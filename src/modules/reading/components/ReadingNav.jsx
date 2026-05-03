import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Star, BarChart3 } from 'lucide-react';
import { useReadingTheme } from './ThemeWrapper';

const NAV_ITEMS = [
  { path: '/read', label: '首页', icon: Home, exact: true },
  { path: '/read/articles', label: '文章', icon: BookOpen },
  { path: '/read/notebook', label: '词汇本', icon: Star },
  { path: '/read/stats', label: '统计', icon: BarChart3 },
];

export default function ReadingNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cardBg, mutedText } = useReadingTheme();

  // 只在阅读模块页面显示
  if (!location.pathname.startsWith('/read')) return null;

  return (
    <div className={`sticky top-[57px] z-30 ${cardBg} border-b backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex gap-1 overflow-x-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = item.exact
            ? location.pathname === item.path
            : location.pathname.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : `${mutedText} hover:bg-blue-50 dark:hover:bg-blue-900/20`
              }`}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
