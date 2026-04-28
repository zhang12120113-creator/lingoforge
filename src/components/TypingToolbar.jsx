import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const REPEAT_OPTIONS = [
  { value: 1, label: '1次' },
  { value: 3, label: '3次' },
  { value: 5, label: '5次' },
  { value: 8, label: '8次' },
  { value: 0, label: '无限' },
];

export default function TypingToolbar({ dictId, currentChapterId, chapters, config, toggleConfig, updateConfig, darkMode, toggleDarkMode, onOpenWrongBook }) {
  const navigate = useNavigate();
  const [showChapterMenu, setShowChapterMenu] = useState(false);
  const [showRepeatMenu, setShowRepeatMenu] = useState(false);
  const currentIndex = chapters.findIndex(c => c.id === currentChapterId);

  const switchChapter = (chapterId) => { setShowChapterMenu(false); navigate(`/typing/${dictId}/${chapterId}`); };
  const selectRepeat = (value) => { updateConfig('wordRepeatCount', value); setShowRepeatMenu(false); };

  const repeatLabel = config.wordRepeatCount === 0 ? '∞' : `×${config.wordRepeatCount}`;

  const toolbarBtn = "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-400 flex flex-col items-center gap-1";
  const activeBtn = "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300";

  return (
    <div className="flex items-center gap-1">
      {/* 单词循环次数 */}
      <div className="relative">
        <button onClick={() => setShowRepeatMenu(!showRepeatMenu)} className={toolbarBtn} title="单词循环次数">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-[11px]">{repeatLabel}</span>
        </button>
        {showRepeatMenu && (<><div className="fixed inset-0 z-40" onClick={() => setShowRepeatMenu(false)} /><div className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          {REPEAT_OPTIONS.map(opt => (
            <button key={opt.value} onClick={() => selectRepeat(opt.value)} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-between ${config.wordRepeatCount === opt.value ? 'text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30' : 'text-gray-700 dark:text-gray-300'}`}>
              <span>{opt.label}</span>
              {config.wordRepeatCount === opt.value && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              )}
            </button>
          ))}
        </div></>)}
      </div>

      <div className="relative">
        <button onClick={() => setShowChapterMenu(!showChapterMenu)} className={toolbarBtn} title="切换章节">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
          <span className="text-[11px]">章节</span>
        </button>
        {showChapterMenu && (<><div className="fixed inset-0 z-40" onClick={() => setShowChapterMenu(false)} /><div className="absolute right-0 top-full mt-2 w-48 max-h-64 overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          {chapters.map((ch) => (<button key={ch.id} onClick={() => switchChapter(ch.id)} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition ${ch.id === currentChapterId ? 'text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30' : 'text-gray-700 dark:text-gray-300'}`}>{ch.name}</button>))}
        </div></>)}
      </div>

      <button onClick={() => toggleConfig('soundEnabled')} className={`${toolbarBtn} ${!config.soundEnabled ? 'opacity-40' : ''}`} title={config.soundEnabled ? '关闭音效' : '开启音效'}>
        {config.soundEnabled ? (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>) : (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>)}
        <span className="text-[11px]">音效</span>
      </button>

      <button onClick={() => toggleConfig('dictationMode')} className={`${toolbarBtn} ${config.dictationMode ? activeBtn : ''}`} title={config.dictationMode ? '退出默写' : '默写模式'}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        <span className="text-[11px]">默写</span>
      </button>

      <button onClick={() => toggleConfig('showTranslation')} className={`${toolbarBtn} ${!config.showTranslation ? 'opacity-40' : ''}`} title={config.showTranslation ? '隐藏释义' : '显示释义'}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        <span className="text-[11px]">释义</span>
      </button>

      <button onClick={onOpenWrongBook} className={toolbarBtn} title="错题本">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        <span className="text-[11px]">错题本</span>
      </button>

      <button onClick={toggleDarkMode} className={`${toolbarBtn} ${darkMode ? activeBtn : ''}`} title={darkMode ? '浅色模式' : '深色模式'}>
        {darkMode ? (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>) : (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>)}
        <span className="text-[11px]">模式</span>
      </button>
    </div>
  );
}
