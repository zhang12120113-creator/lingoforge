import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { List } from 'lucide-react';
import { unlockAudio } from '../utils/audioContext.js';
import { loadDictionary } from '../utils/loadDictionary.js';
import { getErrorBook, getErrorBookCount, removeFromErrorBook } from '../utils/errorBook.js';
import { getReadingWordBookCount, removeFromReadingWordBook } from '../utils/readingWordBook.js';
import { getMeta } from '../dictionaries/meta.js';
import useTyping from '../hooks/useTyping.js';
import { useUserConfig } from '../hooks/useUserConfig.js';
import { useReadingStore } from '../modules/reading/hooks/useReadingStore.js';
import StatsPanel from '../components/StatsPanel.jsx';
import ResultModal from '../components/ResultModal.jsx';
import TypingToolbar from '../components/TypingToolbar.jsx';
import WrongBookModal from '../components/WrongBookModal.jsx';
import WordListPanel from '../components/WordListPanel.jsx';
import NextWordPreview from '../components/NextWordPreview.jsx';
import WordDisplay from '../components/WordDisplay.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

export default function Typing() {
  const { dictId, chapterId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [words, setWords] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWrongBook, setShowWrongBook] = useState(false);
  const [isWordListOpen, setIsWordListOpen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const hiddenInputRef = useRef(null);
  const handleInputRef = useRef(null);
  const hasJumpedRef = useRef(false);
  const [inputValue, setInputValue] = useState('');
  const inputValueRef = useRef('');

  const isMobile = useIsMobile();
  const isErrorBookMode = dictId === 'error-book';
  const isReadingWordBookMode = dictId === 'reading-word-book';

  const targetWordIndex = parseInt(searchParams.get('wordIndex')) || 0;

  const { config, toggleConfig, updateConfig, theme, setTheme } = useUserConfig();

  useEffect(() => {
    setLoading(true); setError(null); hasJumpedRef.current = false;
    loadDictionary(dictId).then(dict => {
      if (!dict) {
        setError('加载失败'); setLoading(false); return;
      }
      setChapters(dict.chapters || []);
      const chapter = dict.chapters?.find(c => c.id === Number(chapterId));
      if (chapter?.words?.length > 0) {
        setWords(chapter.words);
      } else if (isErrorBookMode && (!dict.chapters || dict.chapters.length === 0)) {
        setError('错题本暂无单词');
        setWords([]);
      } else {
        setError('章节不存在或为空');
      }
      setLoading(false);
    }).catch(() => { setError('加载失败'); setLoading(false); });
  }, [dictId, chapterId, isErrorBookMode, reloadKey]);

  const dictName = useMemo(() => getMeta(dictId)?.name || dictId, [dictId]);

  const { currentWord, currentInput, wordIndex, stats, isFinished, handleInput, jumpTo, reset, isWrong, startTime } = useTyping(words, config.soundEnabled, config.wordRepeatCount, isErrorBookMode, dictName, config.autoRemoveErrorWord);
  const studyStore = useReadingStore();
  const typingAccumulatedRef = useRef(0);
  const lastFlushRef = useRef(0);

  const remainingErrorCount = useMemo(() => {
    if (!isErrorBookMode) return 0;
    return getErrorBookCount();
  }, [isErrorBookMode, isFinished, reloadKey]);

  const remainingReadingCount = useMemo(() => {
    if (!isReadingWordBookMode) return 0;
    return getReadingWordBookCount();
  }, [isReadingWordBookMode, isFinished, reloadKey]);

  // 加载完成后，自动跳转到 URL 参数指定的单词
  useEffect(() => {
    if (!loading && words.length > 0 && targetWordIndex > 0 && !hasJumpedRef.current) {
      const validIndex = Math.min(targetWordIndex, words.length - 1);
      jumpTo(validIndex);
      hasJumpedRef.current = true;
    }
  }, [loading, words, targetWordIndex, jumpTo]);

  // 始终保持 ref 指向最新的 handleInput
  useEffect(() => {
    handleInputRef.current = handleInput;
  }, [handleInput]);

  // 记录单词打字学习时间
  useEffect(() => {
    if (!startTime || isFinished) {
      if (typingAccumulatedRef.current > lastFlushRef.current) {
        const delta = typingAccumulatedRef.current - lastFlushRef.current
        studyStore.addTypingSeconds(delta)
        lastFlushRef.current = typingAccumulatedRef.current
      }
      return
    }

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      typingAccumulatedRef.current = elapsed
      const delta = elapsed - lastFlushRef.current
      if (delta >= 30) {
        studyStore.addTypingSeconds(delta)
        lastFlushRef.current = elapsed
      }
    }, 1000)

    return () => {
      clearInterval(interval)
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      typingAccumulatedRef.current = elapsed
      const delta = elapsed - lastFlushRef.current
      if (delta > 0) {
        studyStore.addTypingSeconds(delta)
        lastFlushRef.current = elapsed
      }
    }
  }, [startTime, isFinished, studyStore])

  // 移动端：点击/触摸页面任意位置重新聚焦输入框，防止失焦后无法打字
  useEffect(() => {
    if (!isMobile || isFinished || words.length === 0) return;
    const focusInput = () => hiddenInputRef.current?.focus();
    document.addEventListener('click', focusInput);
    document.addEventListener('touchstart', focusInput, { passive: true });
    return () => {
      document.removeEventListener('click', focusInput);
      document.removeEventListener('touchstart', focusInput);
    };
  }, [isMobile, isFinished, words.length]);

  // 页面加载/章节切换后自动聚焦隐藏输入框并清空残留
  useEffect(() => {
    if (words.length > 0 && hiddenInputRef.current) {
      setTimeout(() => {
        hiddenInputRef.current?.focus();
        inputValueRef.current = '';
        setInputValue('');
      }, 300);
    }
  }, [words]);

  // 核心输入处理函数，供 keydown 和 input 代理层双轨复用
  const handleCharacterInput = useCallback((char) => {
    if (isFinished) return;
    unlockAudio();
    handleInputRef.current?.(char);
  }, [isFinished]);

  const handleBackspace = useCallback(() => {
    if (isFinished) return;
    unlockAudio();
    handleInputRef.current?.('Backspace');
  }, [isFinished]);

  // 桌面端：window 级别 keydown 监听，保持原有逻辑不变
  useEffect(() => {
    if (isMobile) return;
    const onKeyDown = (e) => {
      if (isFinished) return;
      if (e.isComposing) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === ' ') e.preventDefault();
      if (e.key === 'Backspace') { e.preventDefault(); handleBackspace(); return; }
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); handleCharacterInput(e.key); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobile, isFinished, handleBackspace, handleCharacterInput]);

  // 移动端输入处理：通过隐藏 input 代理键盘输入
  const handleInputChange = useCallback((e) => {
    if (isFinished) return;
    const newVal = e.target.value;
    const oldVal = inputValueRef.current;

    if (newVal.length > oldVal.length) {
      const char = newVal.slice(oldVal.length);
      handleCharacterInput(char);
    } else if (newVal.length < oldVal.length) {
      handleBackspace();
    }

    inputValueRef.current = newVal;
    setInputValue(newVal);
  }, [isFinished, handleCharacterInput, handleBackspace]);

  const handleInputBlur = useCallback(() => {
    setTimeout(() => {
      hiddenInputRef.current?.focus();
    }, 100);
  }, []);

  const handleRestart = useCallback(() => {
    reset();
  }, [reset]);
  const handleGoHome = useCallback(() => {
    if (isErrorBookMode) navigate('/dict/error-book');
    else if (isReadingWordBookMode) navigate('/dict/reading-word-book');
    else navigate('/');
  }, [navigate, isErrorBookMode, isReadingWordBookMode]);

  const handleDeleteCurrentWord = useCallback(() => {
    if (!currentWord || words.length === 0) return;
    if (isErrorBookMode) {
      if (!window.confirm(`确定将 "${currentWord.name}" 从错题本移除吗？`)) return;
      removeFromErrorBook(currentWord.name);
    } else if (isReadingWordBookMode) {
      if (!window.confirm(`确定将 "${currentWord.name}" 从阅读词本移除吗？`)) return;
      removeFromReadingWordBook(currentWord.name);
    } else {
      return;
    }
    setWords(prev => prev.filter(w => w.name !== currentWord.name));
    // words 变化后 useTyping 的 useEffect 会自动重置输入、计时器、统计等状态
  }, [currentWord, words.length, isErrorBookMode, isReadingWordBookMode]);

  const handleWordRemovedFromModal = useCallback((wordName) => {
    setWords(prev => {
      if (!prev.some(w => w.name === wordName)) return prev;
      return prev.filter(w => w.name !== wordName);
    });
  }, []);

  const handleJumpToWord = useCallback((index) => {
    jumpTo(index);
    setIsWordListOpen(false);
    if (isMobile) hiddenInputRef.current?.focus();
  }, [jumpTo, isMobile]);

  const handlePlaySound = useCallback((word) => {
    const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`);
    audio.play().catch(() => {});
  }, []);

  const showPhonetic = useMemo(() => config.showPhonetic && !config.dictationMode && !currentWord?.name?.includes(' '), [config.showPhonetic, config.dictationMode, currentWord?.name]);
  const showTranslation = useMemo(() => config.showTranslation && !config.dictationMode, [config.showTranslation, config.dictationMode]);

  if (loading) return (
    <div className="h-[calc(100dvh-3rem)] md:h-[calc(100vh-4rem)] bg-background dark:bg-transparent flex items-center justify-center transition-colors duration-500">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary dark:border-primary-dark border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-content-tertiary dark:text-gray-400 text-sm">{isErrorBookMode ? '正在加载错题本...' : isReadingWordBookMode ? '正在加载阅读词本...' : '正在加载章节...'}</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="h-[calc(100dvh-3rem)] md:h-[calc(100vh-4rem)] bg-background dark:bg-transparent flex items-center justify-center transition-colors duration-500">
      <div className="text-center card p-8 shadow-lg dark:shadow-black/40 mx-4">
        <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-indigo-500 dark:text-violet-400 mb-6 font-medium">{error}</p>
        {isErrorBookMode || isReadingWordBookMode ? (
          <button onClick={() => navigate(isErrorBookMode ? '/dict/error-book' : '/dict/reading-word-book')} className="px-5 py-2.5 bg-primary hover:opacity-90 text-white rounded-button font-medium transition shadow-lg shadow-primary/20">返回词库</button>
        ) : (
          <>
            <button onClick={() => navigate(`/dict/${dictId}`)} className="px-5 py-2.5 bg-primary hover:opacity-90 text-white rounded-button font-medium transition shadow-lg shadow-primary/20 mr-3">返回章节</button>
            <button onClick={() => navigate('/')} className="px-5 py-2.5 bg-gray-100 dark:bg-white/[0.05] hover:bg-gray-200 dark:hover:bg-white/[0.08] text-content-secondary dark:text-gray-300 rounded-button font-medium transition">返回首页</button>
          </>
        )}
      </div>
    </div>
  );

  if (words.length === 0) {
    if (isErrorBookMode || isReadingWordBookMode) {
      return (
        <div className="h-[calc(100dvh-3rem)] md:h-[calc(100vh-4rem)] bg-background dark:bg-transparent flex items-center justify-center transition-colors duration-500">
          <div className="text-center card p-8 shadow-lg dark:shadow-black/40 mx-4">
            <div className="w-16 h-16 bg-green-50 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-green-600 dark:text-green-400 mb-2 font-medium text-xl">{isErrorBookMode ? '错题本已清空' : '阅读词本已清空'}</p>
            <p className="text-content-tertiary dark:text-gray-400 mb-6">{isErrorBookMode ? '所有单词都已练熟，去挑战新词库吧！' : '所有积累的词汇都已练习完毕，去阅读新文章吧！'}</p>
            <button onClick={() => navigate(isErrorBookMode ? '/dict/error-book' : '/dict/reading-word-book')} className="px-5 py-2.5 bg-primary hover:opacity-90 text-white rounded-button font-medium transition shadow-lg shadow-primary/20">返回词库</button>
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="h-[calc(100dvh-3rem)] md:h-[calc(100vh-4rem)] flex bg-background dark:bg-transparent transition-colors duration-500 animate-page-fade-in overflow-hidden">
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
      <div
        className="flex-1 flex flex-col min-w-0 relative"
        id="typing-container"
        onClick={() => hiddenInputRef.current?.focus()}
      >
        {/* 左侧中部展开列表按钮 */}
        <button
          onClick={() => setIsWordListOpen(v => !v)}
          className={`
            fixed left-2 md:left-4 top-[55%] md:top-1/2 -translate-y-1/2 z-40 p-3 rounded-full shadow-lg
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
        <div className="min-h-12 md:h-14 shrink-0 flex items-center justify-between px-3 md:px-4 z-40">
          <button onClick={() => navigate(isErrorBookMode || isReadingWordBookMode ? `/dict/${dictId}` : `/dict/${dictId}`)} className="text-content-tertiary dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark flex items-center gap-2 text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.04]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">{isErrorBookMode || isReadingWordBookMode ? '返回词库' : '返回章节'}</span>
          </button>

          <div className="flex flex-col items-center">
            <div className="text-base font-semibold text-content dark:text-white">
              {isErrorBookMode ? '错题本练习' : isReadingWordBookMode ? '阅读词本练习' : `第 ${wordIndex + 1} / ${words.length} 词`}
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
            theme={theme}
            setTheme={setTheme}
            onOpenWrongBook={() => setShowWrongBook(true)}
            isErrorBookMode={isErrorBookMode}
            isReadingWordBookMode={isReadingWordBookMode}
            onDeleteCurrentWord={handleDeleteCurrentWord}
          />
        </div>

        {/* 单词前后预览 */}
        <NextWordPreview
          prevWord={wordIndex > 0 ? words[wordIndex - 1] : null}
          nextWord={wordIndex < words.length - 1 ? words[wordIndex + 1] : null}
          showTranslation={showTranslation}
        />

        {/* 单词显示 */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 min-h-0 overflow-hidden relative">
          {/* 移动端：覆盖单词区域的透明输入框 */}
          {isMobile && (
            <input
              ref={hiddenInputRef}
              type="text"
              autoFocus
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              className="absolute inset-0 w-full h-full opacity-0 cursor-text z-50"
              style={{
                fontSize: '16px',
                caretColor: 'transparent',
              }}
            />
          )}
          <div className="flex flex-col items-center gap-2 md:gap-10 text-center">
            {showPhonetic && (currentWord?.usphone || currentWord?.us || currentWord?.ukphone || currentWord?.uk) && (
              <div className="text-content-tertiary dark:text-gray-500 text-xl md:text-5xl mb-1 md:mb-4 font-mono tracking-wide shrink-0">
                /{currentWord.usphone || currentWord.us || currentWord.ukphone || currentWord.uk}/
              </div>
            )}

            <div className="shrink-0">
              <WordDisplay key={wordIndex} word={currentWord} currentInput={currentInput} isWrong={isWrong} />
            </div>

            {currentWord?.trans && showTranslation && (
              <div className="text-sm md:text-2xl text-content-tertiary dark:text-gray-400 leading-relaxed md:leading-normal max-w-full md:max-w-2xl shrink-0">
                {Array.isArray(currentWord.trans) ? currentWord.trans.join('；') : currentWord.trans}
              </div>
            )}
          </div>
        </div>

        <StatsPanel stats={stats} />

        {isFinished && <ResultModal stats={stats} onRestart={handleRestart} onGoHome={handleGoHome} isErrorBookMode={isErrorBookMode} remainingErrorCount={remainingErrorCount} isReadingWordBookMode={isReadingWordBookMode} remainingReadingCount={remainingReadingCount} />}
        {showWrongBook && <WrongBookModal onClose={() => setShowWrongBook(false)} onWordRemoved={isErrorBookMode || isReadingWordBookMode ? handleWordRemovedFromModal : undefined} />}
      </div>
    </div>
  );
}
