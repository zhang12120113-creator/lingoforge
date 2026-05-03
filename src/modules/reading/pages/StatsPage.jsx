import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { BarChart3, BookOpen, Star, GraduationCap, Clock } from 'lucide-react';
import { ThemeWrapper, useReadingTheme } from '../components/ThemeWrapper';
import { useStats } from '../hooks/useReadingStorage';
import * as storage from '../utils/readingStorage';

export default function StatsPage() {
  const { cardBg, mutedText, isDark } = useReadingTheme();
  const { stats } = useStats();
  const progress = storage.getProgress();

  const readArticles = Object.keys(progress).length;

  const chartData = useMemo(() => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const record = stats.dailyRecords.find((r) => r.date === dateStr);
      days.push({
        date: `${d.getMonth() + 1}/${d.getDate()}`,
        readWords: record?.readWords || 0,
        newWords: record?.newWords || 0,
      });
    }
    return days;
  }, [stats.dailyRecords]);

  const pieData = [
    { name: '已掌握', value: stats.masteredWords, color: '#22c55e' },
    { name: '未掌握', value: stats.totalNotebookWords - stats.masteredWords, color: '#eab308' },
  ];

  const overview = [
    {
      icon: BookOpen,
      label: '已读文章',
      value: readArticles,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Clock,
      label: '阅读词汇',
      value: stats.totalReadWords,
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: Star,
      label: '收藏生词',
      value: stats.totalNotebookWords,
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: GraduationCap,
      label: '已掌握',
      value: stats.masteredWords,
      color: 'text-green-600 dark:text-green-400',
    },
  ];

  return (
    <ThemeWrapper className="pb-24">
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="text-blue-500" size={28} />
          <h1 className="text-2xl font-bold">学习统计</h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {overview.map((item) => (
            <div key={item.label} className={`${cardBg} rounded-xl border p-4`}>
              <item.icon size={20} className={`${item.color} mb-2`} />
              <div className="text-2xl font-bold">{item.value}</div>
              <div className={`text-xs ${mutedText} mt-1`}>{item.label}</div>
            </div>
          ))}
        </div>

        <div className={`${cardBg} rounded-xl border p-4 mb-6`}>
          <h3 className="font-bold mb-4">近 7 天学习趋势</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="date" stroke={isDark ? '#9ca3af' : '#6b7280'} fontSize={12} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#f3f4f6' : '#111827',
                }}
              />
              <Line
                type="monotone"
                dataKey="readWords"
                stroke="#3b82f6"
                strokeWidth={2}
                name="阅读词汇"
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="newWords"
                stroke="#f59e0b"
                strokeWidth={2}
                name="新增生词"
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={`${cardBg} rounded-xl border p-4`}>
          <h3 className="font-bold mb-4">词汇掌握分布</h3>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    color: isDark ? '#f3f4f6' : '#111827',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-6">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-sm">
                    {d.name}: <strong>{d.value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
}
