export default function ResultModal({ stats, onRestart, onGoHome }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">🎉 章节完成！</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"><div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.time}s</div><div className="text-xs text-gray-500 dark:text-gray-400">用时</div></div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"><div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.wpm}</div><div className="text-xs text-gray-500 dark:text-gray-400">WPM</div></div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"><div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.correctCount}</div><div className="text-xs text-gray-500 dark:text-gray-400">正确字母</div></div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"><div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{Math.round(stats.accuracy * 100)}%</div><div className="text-xs text-gray-500 dark:text-gray-400">正确率</div></div>
        </div>
        <div className="flex gap-3">
          <button onClick={onRestart} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition">再来一次</button>
          {onGoHome && <button onClick={onGoHome} className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition">返回首页</button>}
        </div>
      </div>
    </div>
  );
}
