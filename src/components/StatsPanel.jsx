import { memo } from 'react';

function StatsPanel({ stats }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const items = [
    { label: '时间', value: formatTime(stats.time), icon: (
      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
    { label: '输入数', value: stats.inputCount, icon: (
      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
    )},
    { label: 'WPM', value: stats.wpm, icon: (
      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )},
    { label: '正确数', value: stats.correctCount, icon: (
      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
    { label: '正确率', value: `${Math.round(stats.accuracy * 100)}%`, icon: (
      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    )},
  ];

  return (
    <div className="shrink-0 bg-white/90 dark:bg-[#13131f]/90 border-t border-gray-200/60 dark:border-white/[0.04] pt-3 md:pt-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:pb-[calc(1rem+env(safe-area-inset-bottom))] px-3 md:px-6 z-30">
      <div className="max-w-2xl mx-auto flex flex-wrap justify-center md:grid md:grid-cols-5 gap-x-8 gap-y-2 md:gap-4 text-center">
        {items.map((item) => (
          <div key={item.label} className="w-[26%] md:w-auto flex flex-col items-center">
            <div className="text-xl md:text-4xl font-extrabold text-primary dark:text-primary-dark tabular-nums tracking-tight dark:drop-shadow-[0_0_8px_rgba(99,102,241,0.35)]">{item.value}</div>
            <div className="text-[10px] md:text-base text-content-tertiary dark:text-gray-500 mt-0.5 md:mt-1 flex items-center gap-0.5 md:gap-1">
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
