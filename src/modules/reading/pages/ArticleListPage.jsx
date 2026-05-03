import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import { ThemeWrapper, useReadingTheme } from '../components/ThemeWrapper';
import ArticleCard from '../components/ArticleCard';
import articles from '../data/articles.json';
import * as storage from '../utils/readingStorage';

const CATEGORIES = [
  { key: 'all', label: '全部' },
  { key: 'technology', label: '科技' },
  { key: 'culture', label: '文化' },
  { key: 'life', label: '生活' },
  { key: 'science', label: '科学' },
  { key: 'business', label: '商业' },
];

const DIFFICULTIES = [
  { key: 'all', label: '全部难度' },
  { key: 'beginner', label: '初级' },
  { key: 'intermediate', label: '中级' },
  { key: 'advanced', label: '高级' },
];

export default function ArticleListPage() {
  const navigate = useNavigate();
  const { cardBg, mutedText, inputBg } = useReadingTheme();
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [search, setSearch] = useState('');
  const progress = storage.getProgress();

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const catMatch = category === 'all' || a.category === category;
      const diffMatch = difficulty === 'all' || a.difficulty === difficulty;
      const searchMatch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase());
      return catMatch && diffMatch && searchMatch;
    });
  }, [category, difficulty, search]);

  return (
    <ThemeWrapper className="pb-24">
      <div className="max-w-6xl mx-auto px-4 pt-6">
        {/* 头部 */}
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-blue-500" size={28} />
          <h1 className="text-2xl font-bold">文章库</h1>
          <span className={`text-sm ${mutedText}`}>共 {articles.length} 篇</span>
        </div>

        {/* 搜索 */}
        <div className={`relative mb-4 ${inputBg} rounded-lg border`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${mutedText}`} size={18} />
          <input
            type="text"
            placeholder="搜索文章标题或摘要..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none text-sm"
          />
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                category === c.key
                  ? 'bg-blue-600 text-white'
                  : `${cardBg} ${mutedText} hover:bg-blue-50 dark:hover:bg-blue-900/20`
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 难度筛选 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {DIFFICULTIES.map((d) => (
            <button
              key={d.key}
              onClick={() => setDifficulty(d.key)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                difficulty === d.key
                  ? 'bg-blue-600 text-white'
                  : `${cardBg} ${mutedText} hover:bg-blue-50 dark:hover:bg-blue-900/20`
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* 文章网格 */}
        {filtered.length === 0 ? (
          <div className={`text-center py-20 ${mutedText}`}>没有找到匹配的文章</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isRead={!!progress[article.id]}
                onClick={() => navigate(`/read/article/${article.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </ThemeWrapper>
  );
}
