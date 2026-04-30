import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';
import { unlockAudio } from '../utils/audioContext.js';
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
  const [showWrongBook, setShowWrongBook] = useState(false);
  const inputRef = useRef(null);

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

  const { currentWord, currentInput, wordIndex, stats, isFinished, handleInput, reset, isWrong } = useTyping(words, config.soundEnabled, config.wordRepeatCount);

  // 点击页面任意位置重新聚焦输入框，防止失焦后无法打字
  useEffect(() => {
    if (isFinished || words.length === 0) return;
    const onDocClick = () => inputRef.current?.focus();
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [isFinished, words.length]);

  const handleRestart = useCallback(() => reset(), [reset]);
  const handleGoHome = useCallback(() => navigate('/'), [navigate]);

  const showPhonetic = config.showPhonetic && !config.dictationMode;
  const showTranslation = config.showTranslation && !config.dictationMode;

  if (loading) return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f] flex items-center justify-center transition-colors duration-500">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-indigo-600 dark:border-indigo-500 border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-gray-500 dark:text-gray-400 text-sm">正在加载章节...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f] flex items-center justify-center transition-colors duration-500">
      <div className="text-center bg-white dark:bg-[#13131f] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 mx-4">
        <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-red-500 dark:text-red-400 mb-6 font-medium">{error}</p>
        <button onClick={() => navigate(`/dict/${dictId}`)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition shadow-lg shadow-indigo-500/20 mr-3">返回章节</button>
        <button onClick={() => navigate('/')} className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition">返回首页</button>
      </div>
    </div>
  );

  if (words.length === 0) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f] flex flex-col items-center justify-center p-6 relative transition-colors duration-500">
      {/* 隐藏输入框：自动聚焦并捕获键盘事件，支持移动端虚拟键盘 */}
      <input
        ref={inputRef}
        autoFocus
        className="absolute opacity-0 top-0 left-0 h-px w-px"
        onKeyDown={(e) => {
          // 懒解锁音频，处理直接通过 URL 进入练习页的情况
          unlockAudio();
          if (e.key === ' ') e.preventDefault();
          if (e.key === 'Backspace') { e.preventDefault(); handleInput('Backspace'); return; }
          if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); handleInput(e.key); }
        }}
      />

      {/* 顶部栏 */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-40">
        <button onClick={() => navigate(`/dict/${dictId}`)} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2 text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/60">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回章节
        </button>

        <div className="flex flex-col items-center">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            第 {wordIndex + 1} / {words.length} 词
          </div>
          <div className="w-32 h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-1.5 overflow-hidden">
            <div className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-300" style={{ width: `${((wordIndex + 1) / words.length) * 100}%` }} />
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

      {/* 单词显示 */}
      <div className="mb-12 text-center pt-16">
        {showPhonetic && (currentWord?.usphone || currentWord?.us || currentWord?.ukphone || currentWord?.uk) && (
          <div className="text-gray-400 dark:text-gray-500 text-lg mb-4 font-mono tracking-wide">
            /{currentWord.usphone || currentWord.us || currentWord.ukphone || currentWord.uk}/
          </div>
        )}

        <div key={wordIndex} className={`text-6xl md:text-8xl font-mono tracking-[0.15em] flex gap-1 justify-center select-none ${isWrong ? 'animate-shake' : ''}`}>
          {currentWord?.name.split('').map((char, i) => (
            <span key={i} className={`${i < currentInput.length ? (currentInput[i] === char ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-500') : 'text-gray-300 dark:text-gray-600'}`}>
              {char}
            </span>
          ))}
        </div>

        {currentWord?.trans && showTranslation && (
          <div className="text-xl text-gray-500 dark:text-gray-400 mt-8 leading-relaxed max-w-lg mx-auto">
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

