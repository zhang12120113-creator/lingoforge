import { useState, useEffect, useCallback, useRef } from 'react';

// ========== 音频合成（机械键盘模拟）==========

function playKeySound(audioCtx) {
  if (!audioCtx) return;
  try {
    const ctx = audioCtx;
    const now = ctx.currentTime;

    // 1. 白噪声 burst（模拟按键撞击的"咔"声）
    const bufferSize = ctx.sampleRate * 0.008; // 8ms 极短
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // 高通滤波：只保留高频"咔嗒"质感
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 4000;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.008);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);
    noise.stop(now + 0.008);

    // 2. 短促高频 tone（清脆的主体音）
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = 1000;
    const toneGain = ctx.createGain();
    toneGain.gain.setValueAtTime(0.2, now);
    toneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(toneGain);
    toneGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  } catch (e) {}
}

function playSound(type, audioCtx) {
  if (!audioCtx) return;
  try {
    const ctx = audioCtx;
    const now = ctx.currentTime;

    if (type === 'correct') {
      // 清脆双音调（大三度和弦，更有成就感）
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 1200;
      const g1 = ctx.createGain();
      g1.gain.setValueAtTime(0.3, now);
      g1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(g1);
      g1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.value = 1500; // 大三度
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(0.2, now);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc2.connect(g2);
      g2.connect(ctx.destination);
      osc2.start(now);
      osc2.stop(now + 0.12);

    } else if (type === 'wrong') {
      // 低沉嗡嗡声（sawtooth 更刺耳）
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = 180;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);

    } else if (type === 'finish') {
      // 欢快三音调上升
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.3, now);
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.setValueAtTime(1200, now + 0.12);
      osc.frequency.setValueAtTime(1600, now + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (e) {}
}

export default function useTyping(words, audioCtx, soundEnabled, wordRepeatCount = 1) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [stats, setStats] = useState({ time: 0, inputCount: 0, correctCount: 0, wpm: 0, accuracy: 0 });
  const timerRef = useRef(null);
  const inputCountRef = useRef(0);
  const correctCountRef = useRef(0);
  const repeatCountRef = useRef(0);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  const speakWord = useCallback((word) => {
    if (!soundEnabled || !word) return;
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(word);
        utter.lang = 'en-US';
        utter.rate = 0.9;
        window.speechSynthesis.speak(utter);
      }
    } catch (e) {}
  }, [soundEnabled]);

  // words 变化时重置状态
  useEffect(() => {
    setWordIndex(0);
    setCurrentInput('');
    setIsWrong(false);
    setIsFinished(false);
    setStartTime(null);
    setStats({ time: 0, inputCount: 0, correctCount: 0, wpm: 0, accuracy: 0 });
    inputCountRef.current = 0;
    correctCountRef.current = 0;
    repeatCountRef.current = 0;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, [words]);

  // soundEnabled 为 true 时朗读首词
  useEffect(() => {
    if (soundEnabled && words.length > 0 && wordIndex === 0 && currentInput === '') {
      const timer = setTimeout(() => speakWord(words[0]?.name), 100);
      return () => clearTimeout(timer);
    }
  }, [soundEnabled, words, wordIndex, currentInput, speakWord]);

  // 计时器
  useEffect(() => {
    if (startTime && !isFinished) {
      timerRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setStats(prev => ({ ...prev, time: elapsed, wpm: elapsed > 0 ? Math.round((correctCountRef.current / elapsed) * 60) : 0 }));
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTime, isFinished]);

  const currentWord = words[wordIndex] || null;

  const handleInput = useCallback((key) => {
    if (isFinished || !currentWord) return;
    if (!startTime) setStartTime(Date.now());
    if (key === 'Backspace') { setCurrentInput(prev => prev.slice(0, -1)); setIsWrong(false); return; }

    // 每次按键
    if (soundEnabled) playKeySound(audioCtx);

    const target = currentWord.name;
    const nextInput = currentInput + key;
    inputCountRef.current += 1;

    if (target.startsWith(nextInput)) {
      setCurrentInput(nextInput);
      setIsWrong(false);
      if (nextInput === target) {
        if (soundEnabled) playSound('correct', audioCtx);
        correctCountRef.current += target.length;
        const completedTimes = repeatCountRef.current + 1;
        const shouldAdvance = wordRepeatCount !== 0 && completedTimes >= wordRepeatCount;
        if (shouldAdvance) {
          if (wordIndex >= words.length - 1) {
            if (soundEnabled) playSound('finish', audioCtx);
            setIsFinished(true);
            const elapsed = Math.floor((Date.now() - startTime) / 1000) || 1;
            setStats({ time: elapsed, inputCount: inputCountRef.current, correctCount: correctCountRef.current,
              wpm: Math.round((correctCountRef.current / elapsed) * 60),
              accuracy: inputCountRef.current > 0 ? Math.round((correctCountRef.current / inputCountRef.current) * 100) / 100 : 0 });
          } else {
            setWordIndex(prev => prev + 1);
            setCurrentInput('');
            repeatCountRef.current = 0;
            setTimeout(() => speakWord(wordsRef.current[wordIndex + 1]?.name), 100);
          }
        } else {
          repeatCountRef.current = completedTimes;
          setCurrentInput('');
          setTimeout(() => speakWord(currentWord?.name), 100);
        }
      }
    } else {
      if (soundEnabled) playSound('wrong', audioCtx);
      setCurrentInput(nextInput);
      setIsWrong(true);
      setTimeout(() => { setCurrentInput(''); setIsWrong(false); }, 300);
    }
  }, [currentWord, currentInput, wordIndex, words, isFinished, startTime, speakWord, audioCtx]);

  const reset = useCallback(() => {
    setWordIndex(0); setCurrentInput(''); setIsWrong(false); setIsFinished(false); setStartTime(null);
    setStats({ time: 0, inputCount: 0, correctCount: 0, wpm: 0, accuracy: 0 });
    inputCountRef.current = 0; correctCountRef.current = 0; repeatCountRef.current = 0;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (soundEnabled && wordsRef.current.length > 0) {
      setTimeout(() => speakWord(wordsRef.current[0]?.name), 100);
    }
  }, [soundEnabled, speakWord]);

  return { currentWord, currentInput, wordIndex, stats, isFinished, isWrong, handleInput, reset };
}
