import { Volume2, Check, Trash2 } from 'lucide-react';
import { useReadingTheme } from './ThemeWrapper';

export default function VocabularyCard({ item, onToggleMaster, onRemove, onSpeak }) {
  const { cardBg, mutedText, inputBg } = useReadingTheme();

  return (
    <div className={`${cardBg} rounded-xl border p-4 flex flex-col gap-2`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">{item.word}</span>
            <span className={`text-sm ${mutedText}`}>{item.phonetic}</span>
          </div>
          <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs rounded-full">
            {item.pos}
          </span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => onSpeak(item.word)}
            className={`p-2 rounded-lg ${inputBg} hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors`}
            title="发音"
          >
            <Volume2 size={16} />
          </button>
          <button
            onClick={() => onToggleMaster(item.word)}
            className={`p-2 rounded-lg transition-colors ${
              item.mastered
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                : `${inputBg} hover:bg-green-100 dark:hover:bg-green-900/30`
            }`}
            title={item.mastered ? '取消掌握' : '标记掌握'}
          >
            <Check size={16} />
          </button>
          <button
            onClick={() => onRemove(item.word)}
            className={`p-2 rounded-lg ${inputBg} hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors`}
            title="删除"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-sm mt-1">{item.definition}</p>
      <p className={`text-xs italic ${mutedText}`}>{item.example}</p>
      <div className={`text-xs ${mutedText} mt-1`}>
        来自文章 · {new Date(item.addedAt).toLocaleDateString('zh-CN')}
      </div>
    </div>
  );
}
