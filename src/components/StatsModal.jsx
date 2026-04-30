export default function StatsModal({ stats, onClose }) {
  if (!stats) return null;

  const statItems = [
    { label: '用时', value: `${stats.time}s` },
    { label: 'WPM', value: stats.wpm },
    { label: '正确字母', value: stats.correctCount },
    { label: '正确率', value: `${Math.round(stats.accuracy * 100)}%` },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-[fadeIn_0.2s_ease-out]" onClick={onClose}>
      <div className="bg-white dark:bg-[#13131f] rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl shadow-black/20 dark:shadow-black/40 border border-gray-200/60 dark:border-gray-800/60 animate-[slideUp_0.3s_ease-out]" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h2 className="text-lg font-bold dark:text-white">数据统计</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {statItems.map((item) => (
            <div key={item.label} className="text-center p-4 bg-gray-50 dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-gray-800/60">
              <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{item.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
