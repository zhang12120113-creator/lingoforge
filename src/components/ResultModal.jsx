export default function ResultModal({ stats, onRestart, onGoHome }) {
  const statItems = [
    { label: '用时', value: `${stats.time}s`, icon: '⏱️' },
    { label: 'WPM', value: stats.wpm, icon: '⚡' },
    { label: '正确字母', value: stats.correctCount, icon: '✅' },
    { label: '正确率', value: `${Math.round(stats.accuracy * 100)}%`, icon: '🎯' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-white dark:bg-[#13131f] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-black/20 dark:shadow-black/40 border border-gray-200/60 dark:border-gray-800/60 animate-[slideUp_0.3s_ease-out]">
        <div className="text-center mb-2">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">章节完成！</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">太棒了，继续加油</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8 mt-6">
          {statItems.map((item) => (
            <div key={item.label} className="text-center p-4 bg-gray-50 dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-gray-800/60">
              <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{item.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={onRestart} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/25">再来一次</button>
          {onGoHome && <button onClick={onGoHome} className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition">返回首页</button>}
        </div>
      </div>
    </div>
  );
}
