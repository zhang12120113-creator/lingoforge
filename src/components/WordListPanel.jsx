import React, { useEffect, useRef, memo } from 'react';
import { Volume2, Check, X } from 'lucide-react';

const WordListItem = memo(function WordListItem({ word, idx, currentIndex, onPlaySound, onJumpTo, activeRef }) {
  const isActive = idx === currentIndex;
  const isDone = idx < currentIndex;

  return (
    <div
      ref={isActive ? activeRef : null}
      onClick={() => onJumpTo?.(idx)}
      className={`
        group mx-2 px-3 py-2.5 rounded-lg cursor-pointer transition-all
        flex items-start justify-between gap-2
        ${isActive
          ? 'bg-indigo-50 dark:bg-indigo-500/15 border-l-2 border-indigo-500 dark:border-indigo-400'
          : 'hover:bg-slate-50 dark:hover:bg-slate-700/30 border-l-2 border-transparent'
        }
        ${isDone ? 'opacity-40' : ''}
      `}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className={`
            font-mono text-sm font-medium truncate
            ${isActive ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-300'}
          `}>
            {word.name}
          </span>
          {isDone && <Check className="w-3 h-3 text-emerald-500 shrink-0" />}
        </div>
        <p className="text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5 leading-relaxed">
          {Array.isArray(word.trans) ? word.trans.join('；') : word.trans}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPlaySound?.(word.name);
        }}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-600 shrink-0"
      >
        <Volume2 className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400" />
      </button>
    </div>
  );
});

export default function WordListPanel({ words, currentIndex, onPlaySound, onJumpTo, onClose }) {
  const activeRef = useRef(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [currentIndex]);

  if (!words || words.length === 0) return null;

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-slate-800/50 backdrop-blur-sm border-r border-slate-200 dark:border-slate-700/50">
      {/* 头部 */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700/50">
        <div>
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">本章单词</h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            {currentIndex + 1} / {words.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        </button>
      </div>

      {/* 单词列表 */}
      <div className="flex-1 overflow-y-auto py-2 pb-6 space-y-1 custom-scrollbar">
        {words.map((word, idx) => (
          <WordListItem
            key={`${word.name}-${idx}`}
            word={word}
            idx={idx}
            currentIndex={currentIndex}
            onPlaySound={onPlaySound}
            onJumpTo={onJumpTo}
            activeRef={activeRef}
          />
        ))}
      </div>
    </div>
  );
}
