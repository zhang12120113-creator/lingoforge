import { memo } from 'react';

function StatsPanel({ stats }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const items = [
    { label: '时间', value: formatTime(stats.time), icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
    { label: '输入数', value: stats.inputCount, icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
    )},
    { label: 'WPM', value: stats.wpm, icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )},
    { label: '正确数', value: stats.correctCount, icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
    { label: '正确率', value: `${Math.round(stats.accuracy * 100)}%`, icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    )},
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-lg border-t border-gray-200/60 dark:border-gray-800/40 py-4 px-6 z-30">
      <div className="max-w-2xl mx-auto flex justify-around text-center">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums tracking-tight">{item.value}</div>
            <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 flex items-center gap-1">
              {item.icon}
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(StatsPanel);
