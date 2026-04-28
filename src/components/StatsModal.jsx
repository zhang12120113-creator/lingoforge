export default function StatsModal({ stats, onClose }) {
  if (!stats) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold dark:text-white">📊 数据统计</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.time}s</div>
            <div className="text-xs text-gray-500 mt-1">用时</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.wpm}</div>
            <div className="text-xs text-gray-500 mt-1">WPM</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.correctCount}</div>
            <div className="text-xs text-gray-500 mt-1">正确字母</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{Math.round(stats.accuracy * 100)}%</div>
            <div className="text-xs text-gray-500 mt-1">正确率</div>
          </div>
        </div>
      </div>
    </div>
  );
}
