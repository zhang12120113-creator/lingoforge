import { useEffect, useRef } from 'react';
import { Volume2, Star, X } from 'lucide-react';
import { useReadingTheme } from './ThemeWrapper';

export default function WordPopup({
  word,
  vocab,
  position,
  onClose,
  onAddToNotebook,
  isInNotebook,
}) {
  const { cardBg, mutedText, isDark } = useReadingTheme();
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSpeak = () => {
    if (!word) return;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  if (!vocab) {
    return (
      <div
        ref={popupRef}
        className={`fixed z-50 ${cardBg} border rounded-lg shadow-xl p-4 w-64`}
        style={{ top: position.top, left: Math.min(position.left, window.innerWidth - 280) }}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="font-bold text-lg">{word}</span>
          <button onClick={onClose} className={mutedText}><X size={16} /></button>
        </div>
        <p className={`text-sm ${mutedText}`}>暂无释义，可从现有词库中查找。</p>
      </div>
    );
  }

  return (
    <div
      ref={popupRef}
      className={`fixed z-50 ${cardBg} border rounded-lg shadow-xl p-4 w-72 max-w-[90vw]`}
      style={{
        top: Math.min(position.top, window.innerHeight - 250),
        left: Math.min(position.left, window.innerWidth - 300),
      }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="font-bold text-lg">{vocab.word}</div>
          <div className={`text-sm ${mutedText}`}>{vocab.phonetic}</div>
        </div>
        <button onClick={onClose} className={mutedText}><X size={16} /></button>
      </div>

      <div className="mb-3">
        <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">
          {vocab.pos}
        </span>
      </div>

      <p className="text-sm mb-2">{vocab.definition}</p>
      <p className={`text-xs italic mb-3 ${mutedText}`}>{vocab.example}</p>

      <div className="flex gap-2">
        <button
          onClick={handleSpeak}
          className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors"
        >
          <Volume2 size={14} /> 发音
        </button>
        <button
          onClick={onAddToNotebook}
          disabled={isInNotebook}
          className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-sm transition-colors ${
            isInNotebook
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 cursor-default'
              : 'bg-yellow-500 hover:bg-yellow-600 text-white'
          }`}
        >
          <Star size={14} /> {isInNotebook ? '已收藏' : '收藏'}
        </button>
      </div>
    </div>
  );
}
