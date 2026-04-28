import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { loadDictionary } from '../utils/loadDictionary.js';
import useTyping from '../hooks/useTyping.js';
import { useUserConfig } from '../hooks/useUserConfig.js';
import StatsPanel from '../components/StatsPanel.jsx';
import ResultModal from '../components/ResultModal.jsx';
import TypingToolbar from '../components/TypingToolbar.jsx';
import WrongBookModal from '../components/WrongBookModal.jsx';

export default function Typing() {
  const { dictId, chapterId } = useParams();
  const navigate = useNavigate();
  const [words, setWords] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [audioCtx, setAudioCtx] = useState(null);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [showWrongBook, setShowWrongBook] = useState(false);

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

  const { currentWord, currentInput, wordIndex, stats, isFinished, handleInput, reset, isWrong } = useTyping(words, audioCtx, config.soundEnabled, config.wordRepeatCount);

  useEffect(() => {
    if (isFinished || words.length === 0 || !isAudioReady) return;
    const onKey = (e) => {
      if (e.key === ' ') e.preventDefault();
      if (e.key === 'Backspace') { e.preventDefault(); handleInput('Backspace'); return; }
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); handleInput(e.key); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFinished, words.length, handleInput, isAudioReady]);

  const unlockAudio = async () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      await ctx.resume();
      setAudioCtx(ctx);
      setIsAudioReady(true);
    } catch (e) { setIsAudioReady(true); }
  };

  const handleRestart = useCallback(() => reset(), [reset]);
  const handleGoHome = useCallback(() => navigate('/'), [navigate]);

  const showPhonetic = config.showPhonetic && !config.dictationMode;
  const showTranslation = config.showTranslation && !config.dictationMode;

  if (loading) return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button onClick={() => navigate(`/dict/${dictId}`)} className="px-4 py-2 bg-indigo-600 text-white rounded-lg mr-2">返回章节</button>
        <button onClick={() => navigate('/')} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">返回首页</button>
      </div>
    </div>
  );

  if (words.length === 0) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center p-6 relative transition-colors">
      {!isAudioReady && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={unlockAudio}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-2xl">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">准备开始</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">点击任意位置启用音频和语音朗读</p>
            <button onClick={unlockAudio} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700">开始练习</button>
          </div>
        </div>
      )}

      {/* 顶部栏 */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-40">
        <button onClick={() => navigate(`/dict/${dictId}`)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 text-sm transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回章节
        </button>

        <div className="text-sm text-gray-400 dark:text-gray-500">
          第 {wordIndex + 1} / {words.length} 词
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

      {/* 单词显示 */}
      <div className="mb-12 text-center pt-16">
        {currentWord?.usphone && showPhonetic && (
          <div className="text-gray-400 dark:text-gray-500 text-lg mb-3 font-mono">/{currentWord.usphone}/</div>
        )}

        <div className={`text-6xl md:text-7xl font-mono tracking-widest flex gap-1 justify-center ${isWrong ? 'animate-shake' : ''}`}>
          {currentWord?.name.split('').map((char, i) => (
            <span key={i} className={i < currentInput.length ? (currentInput[i] === char ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-500') : 'text-gray-300 dark:text-gray-600'}>
              {char}
            </span>
          ))}
        </div>

        {currentWord?.trans && showTranslation && (
          <div className="text-xl text-gray-600 dark:text-gray-400 mt-6">
            {Array.isArray(currentWord.trans) ? currentWord.trans.join('；') : currentWord.trans}
          </div>
        )}
      </div>

      <StatsPanel stats={stats} />

      {isFinished && <ResultModal stats={stats} onRestart={handleRestart} onGoHome={handleGoHome} />}
      {showWrongBook && <WrongBookModal onClose={() => setShowWrongBook(false)} />}
    </div>
  );
}

