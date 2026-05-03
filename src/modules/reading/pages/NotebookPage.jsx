import { useState, useMemo } from 'react';
import { Search, BookMarked, GraduationCap, Sparkles } from 'lucide-react';
import { ThemeWrapper, useReadingTheme } from '../components/ThemeWrapper';
import VocabularyCard from '../components/VocabularyCard';
import { useNotebook } from '../hooks/useReadingStorage';

const FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'unmastered', label: '未掌握' },
  { key: 'mastered', label: '已掌握' },
];

const SORTS = [
  { key: 'recent', label: '最近添加' },
  { key: 'alpha', label: '字母顺序' },
];

export default function NotebookPage() {
  const { cardBg, mutedText, inputBg } = useReadingTheme();
  const { notebook, toggleMaster, remove } = useNotebook();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('recent');

  const filtered = useMemo(() => {
    let result = [...notebook];

    if (search) {
      result = result.filter((n) => n.word.toLowerCase().includes(search.toLowerCase()));
    }

    if (filter === 'mastered') result = result.filter((n) => n.mastered);
    if (filter === 'unmastered') result = result.filter((n) => !n.mastered);

    if (sort === 'alpha') {
      result.sort((a, b) => a.word.localeCompare(b.word));
    } else {
      result.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    }

    return result;
  }, [notebook, search, filter, sort]);

  const stats = {
    total: notebook.length,
    mastered: notebook.filter((n) => n.mastered).length,
    unmastered: notebook.filter((n) => !n.mastered).length,
  };

  const handleSpeak = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <ThemeWrapper className="pb-24">
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <div className="flex items-center gap-3 mb-6">
          <BookMarked className="text-blue-500" size={28} />
          <h1 className="text-2xl font-bold">单词本</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className={`${cardBg} rounded-xl border p-4 text-center`}>
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className={`text-xs ${mutedText} mt-1`}>总词汇</div>
          </div>
          <div className={`${cardBg} rounded-xl border p-4 text-center`}>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.mastered}</div>
            <div className={`text-xs ${mutedText} mt-1 flex items-center justify-center gap-1`}>
              <GraduationCap size={12} /> 已掌握
            </div>
          </div>
          <div className={`${cardBg} rounded-xl border p-4 text-center`}>
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.unmastered}</div>
            <div className={`text-xs ${mutedText} mt-1 flex items-center justify-center gap-1`}>
              <Sparkles size={12} /> 未掌握
            </div>
          </div>
        </div>

        <div className={`relative mb-4 ${inputBg} rounded-lg border`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${mutedText}`} size={18} />
          <input
            type="text"
            placeholder="搜索单词..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                filter === f.key
                  ? 'bg-blue-600 text-white'
                  : `${cardBg} ${mutedText} hover:bg-blue-50 dark:hover:bg-blue-900/20`
              }`}
            >
              {f.label}
            </button>
          ))}
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
          {SORTS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSort(s.key)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                sort === s.key
                  ? 'bg-blue-600 text-white'
                  : `${cardBg} ${mutedText} hover:bg-blue-50 dark:hover:bg-blue-900/20`
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className={`text-center py-20 ${mutedText}`}>
            <BookMarked size={48} className="mx-auto mb-4 opacity-30" />
            <p>还没有收藏任何单词</p>
            <p className="text-sm mt-1">去阅读文章添加生词吧</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((item) => (
              <VocabularyCard
                key={item.word}
                item={item}
                onToggleMaster={toggleMaster}
                onRemove={remove}
                onSpeak={handleSpeak}
              />
            ))}
          </div>
        )}
      </div>
    </ThemeWrapper>
  );
}
