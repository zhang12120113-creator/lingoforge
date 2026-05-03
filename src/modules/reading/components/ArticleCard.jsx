import { Check, Clock } from 'lucide-react';
import DifficultyBadge from './DifficultyBadge';
import { useReadingTheme } from './ThemeWrapper';

const CATEGORY_MAP = {
  technology: '科技',
  culture: '文化',
  life: '生活',
  science: '科学',
  business: '商业',
};

export default function ArticleCard({ article, isRead, onClick }) {
  const { cardBg, mutedText } = useReadingTheme();

  return (
    <div
      onClick={onClick}
      className={`${cardBg} rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-0.5 border group`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {isRead && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Check size={12} /> 已读
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs rounded-full">
            {CATEGORY_MAP[article.category]}
          </span>
          <DifficultyBadge difficulty={article.difficulty} />
        </div>
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{article.title}</h3>
        <p className={`text-sm ${mutedText} line-clamp-2 mb-3`}>{article.summary}</p>
        <div className={`flex items-center gap-1 text-xs ${mutedText}`}>
          <Clock size={14} />
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
