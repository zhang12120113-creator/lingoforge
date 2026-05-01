import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { List } from 'lucide-react';
import { unlockAudio } from '../utils/audioContext.js';
import { loadDictionary } from '../utils/loadDictionary.js';
import useTyping from '../hooks/useTyping.js';
import { useUserConfig } from '../hooks/useUserConfig.js';
import StatsPanel from '../components/StatsPanel.jsx';
import ResultModal from '../components/ResultModal.jsx';
import TypingToolbar from '../components/TypingToolbar.jsx';
import WrongBookModal from '../components/WrongBookModal.jsx';
import WordListPanel from '../components/WordListPanel.jsx';
import NextWordPreview from '../components/NextWordPreview.jsx';
import WordDisplay from '../components/WordDisplay.jsx';

export default function Typing() {
  const { dictId, chapterId } = useParams();
  const navigate = useNavigate();
  const [words, setWords] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWrongBook, setShowWrongBook] = useState(false);
  const [isWordListOpen, setIsWordListOpen] = useState(false);
  const inputRef = useRef(null);
  const inputHandledRef = useRef(false);
  const handleInputRef = useRef(null);

  const { config, toggleConfig, updateConfig, darkMode, toggleDarkMode } = useUserConfig();

  useEffect(() => {
    setLoading(true); setError(null);
    loadDictionary(dictId).then(dict => {
      setChapters(dict.chapters || []);
      const chapter = dict.chapters?.find(c => c.id === Number(chapterId));
      if (chapter?.words?.length > 0) setWords(chapter.words);
      else setError('章节不存在或为空');
      setLoading(false);
    }).catch(() => { setError('加载失败'); setLoading(false); });
  }, [dictId, chapterId]);

  const { currentWord, currentInput, wordIndex, stats, isFinished, handleInput, jumpTo, reset, isWrong } = useTyping(words, config.soundEnabled, config.wordRepeatCount);

  // 始终保持 ref 指向最新的 handleInput
  useEffect(() => {
    handleInputRef.current = handleInput;
  }, [handleInput]);

  // 点击/触摸页面任意位置重新聚焦输入框，防止失焦后无法打字
  useEffect(() => {
    if (isFinished || words.length === 0) return;
    const focusInput = () => inputRef.current?.focus();
    document.addEventListener('click', focusInput);
    document.addEventListener('touchstart', focusInput, { passive: true });
    return () => {
      document.removeEventListener('click', focusInput);
      document.removeEventListener('touchstart', focusInput);
    };
  }, [isFinished, words.length]);

  // 绑定原生 beforeinput / input / composition 事件，绕过 React 合成事件在移动端的兼容问题
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    let composing = false;

    const onCompositionStart = () => { composing = true; };
    const onCompositionEnd = (e) => {
      composing = false;
      const data = e.data;
      input.value = '';
      if (data) {
        unlockAudio();
        for (const char of data) {
          if (char.length === 1) handleInputRef.current?.(char);
        }
      }
    };

    const onBeforeInput = (e) => {
      if (composing || e.isComposing) return;
      if (inputHandledRef.current) {
        inputHandledRef.current = false;
        e.preventDefault();
        return;
      }
      unlockAudio();
      if (e.inputType === 'deleteContentBackward') {
        e.preventDefault();
        inputHandledRef.current = true;
        handleInputRef.current?.('Backspace');
        return;
      }
      if (e.data) {
        e.preventDefault();
        inputHandledRef.current = true;
        for (const char of e.data) {
          if (char.length === 1) {
            handleInputRef.current?.(char);
          }
        }
      }
    };

    const onInput = () => {
      if (inputHandledRef.current) {
        inputHandledRef.current = false;
        input.value = '';
        return;
      }
      if (composing) {
        // 合成中不处理中间态，等 compositionend
        input.value = '';
        return;
      }
      const value = input.value;
      input.value = '';
      if (!value) return;
      unlockAudio();
      for (const char of value) {
        if (char.length === 1) {
          handleInputRef.current?.(char);
        }
      }
    };

    input.addEventListener('beforeinput', onBeforeInput);
    input.addEventListener('input', onInput);
    input.addEventListener('compositionstart', onCompositionStart);
    input.addEventListener('compositionend', onCompositionEnd);
    return () => {
      input.removeEventListener('beforeinput', onBeforeInput);
      input.removeEventListener('input', onInput);
      input.removeEventListener('compositionstart', onCompositionStart);
      input.removeEventListener('compositionend', onCompositionEnd);
    };
  }, []);

  const handleRestart = useCallback(() => reset(), [reset]);
  const handleGoHome = useCallback(() => navigate('/'), [navigate]);

  const handleJumpToWord = useCallback((index) => {
    jumpTo(index);
    setIsWordListOpen(false);
    inputRef.current?.focus();
  }, [jumpTo]);

  const handlePlaySound = useCallback((word) => {
    const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`);
    audio.play().catch(() => {});
  }, []);

  const handleKeyDown = useCallback((e) => {
    inputHandledRef.current = false;
    if (e.isComposing) return;
    unlockAudio();
    if (e.key === ' ') e.preventDefault();
    if (e.key === 'Backspace') { e.preventDefault(); inputHandledRef.current = true; handleInput('Backspace'); return; }
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); inputHandledRef.current = true; handleInput(e.key); }
  }, [handleInput]);

  const showPhonetic = useMemo(() => config.showPhonetic && !config.dictationMode && !currentWord?.name?.includes(' '), [config.showPhonetic, config.dictationMode, currentWord?.name]);
  const showTranslation = useMemo(() => config.showTranslation && !config.dictationMode, [config.showTranslation, config.dictationMode]);

  if (loading) return (
    <div className="h-[calc(100vh-4rem)] bg-background dark:bg-transparent flex items-center justify-center transition-colors duration-500">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary dark:border-primary-dark border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-content-tertiary dark:text-gray-400 text-sm">正在加载章节...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="h-[calc(100vh-4rem)] bg-background dark:bg-transparent flex items-center justify-center transition-colors duration-500">
      <div className="text-center card p-8 shadow-lg dark:shadow-black/40 mx-4">
        <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-indigo-500 dark:text-violet-400 mb-6 font-medium">{error}</p>
        <button onClick={() => navigate(`/dict/${dictId}`)} className="px-5 py-2.5 bg-primary hover:opacity-90 text-white rounded-button font-medium transition shadow-lg shadow-primary/20 mr-3">返回章节</button>
        <button onClick={() => navigate('/')} className="px-5 py-2.5 bg-gray-100 dark:bg-white/[0.05] hover:bg-gray-200 dark:hover:bg-white/[0.08] text-content-secondary dark:text-gray-300 rounded-button font-medium transition">返回首页</button>
      </div>
    </div>
  );

  if (words.length === 0) return null;

  return (
    <div className="h-[calc(100vh-4rem)] flex bg-background dark:bg-transparent transition-colors duration-500 animate-page-fade-in">
      {/* 左侧可折叠单词列表 */}
      <div className={`
        transition-all duration-300 ease-in-out shrink-0 self-stretch
        ${isWordListOpen ? 'w-80 opacity-100' : 'w-0 opacity-0 overflow-hidden'}
      `}>
        <WordListPanel
          words={words}
          currentIndex={wordIndex}
          onPlaySound={handlePlaySound}
          onJumpTo={handleJumpToWord}
          onClose={() => setIsWordListOpen(false)}
        />
      </div>

      {/* 右侧主练习区 */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* 隐藏输入框：全屏覆盖，使用原生事件监听绕过 React 合成事件在移动端的兼容问题 */}
        <input
          ref={inputRef}
          type="text"
          autoFocus
          inputMode="text"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          className="absolute inset-0 w-full h-full"
          style={{
            zIndex: 30,
            opacity: 0.01,
            color: 'transparent',
            caretColor: 'transparent',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: 0,
            margin: 0,
            touchAction: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => setTimeout(() => inputRef.current?.focus(), 100)}
          enterKeyHint="done"
        />

        {/* 左侧中部展开列表按钮 */}
        <button
          onClick={() => setIsWordListOpen(v => !v)}
          className={`
            fixed left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full shadow-lg
            transition-all duration-300 backdrop-blur-sm
            ${isWordListOpen
              ? 'opacity-0 pointer-events-none -translate-x-4'
              : 'opacity-100 translate-x-0 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700'
            }
          `}
          title="章节单词列表"
        >
          <List className="w-5 h-5" />
        </button>

        {/* 顶部栏 */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 z-40">
          <button onClick={() => navigate(`/dict/${dictId}`)} className="text-content-tertiary dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark flex items-center gap-2 text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.04]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">返回章节</span>
          </button>

          <div className="flex flex-col items-center">
            <div className="text-base font-semibold text-content dark:text-white">
              第 {wordIndex + 1} / {words.length} 词
            </div>
            <div className="w-40 h-1.5 bg-gray-200 dark:bg-white/[0.08] rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-primary dark:bg-primary-dark rounded-full shadow-[0_0_6px_rgba(99,102,241,0.45)] dark:shadow-[0_0_8px_rgba(129,140,248,0.5)]"
                style={{ width: `${((wordIndex + 1) / words.length) * 100}%` }}
              />
            </div>
          </div>

          <TypingToolbar
            dictId={dictId}
            currentChapterId={chapterId}
            chapters={chapters}
            config={config}
            toggleConfig={toggleConfig}
            updateConfig={updateConfig}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            onOpenWrongBook={() => setShowWrongBook(true)}
          />
        </div>

        {/* 单词前后预览 */}
        <NextWordPreview
          prevWord={wordIndex > 0 ? words[wordIndex - 1] : null}
          nextWord={wordIndex < words.length - 1 ? words[wordIndex + 1] : null}
          showTranslation={showTranslation}
        />

        {/* 单词显示 */}
        <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
          <div className="text-center">
            {showPhonetic && (currentWord?.usphone || currentWord?.us || currentWord?.ukphone || currentWord?.uk) && (
              <div className="text-content-tertiary dark:text-gray-500 text-lg mb-4 font-mono tracking-wide">
                /{currentWord.usphone || currentWord.us || currentWord.ukphone || currentWord.uk}/
              </div>
            )}

            <WordDisplay word={currentWord} currentInput={currentInput} isWrong={isWrong} />

            {currentWord?.trans && showTranslation && (
              <div className="text-xl text-content-tertiary dark:text-gray-400 mt-8 leading-relaxed max-w-lg mx-auto">
                {Array.isArray(currentWord.trans) ? currentWord.trans.join('；') : currentWord.trans}
              </div>
            )}
          </div>
        </div>

        <StatsPanel stats={stats} />

        {isFinished && <ResultModal stats={stats} onRestart={handleRestart} onGoHome={handleGoHome} />}
        {showWrongBook && <WrongBookModal onClose={() => setShowWrongBook(false)} />}
      </div>
    </div>
  );
}
