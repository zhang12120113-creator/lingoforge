export default function StatsPanel({ stats }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur border-t border-gray-200 dark:border-gray-800 py-4 px-6 z-30">
      <div className="max-w-2xl mx-auto flex justify-around text-center">
        <div><div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{formatTime(stats.time)}</div><div className="text-xs text-gray-500 dark:text-gray-400 mt-1">时间</div></div>
        <div><div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{stats.inputCount}</div><div className="text-xs text-gray-500 dark:text-gray-400 mt-1">输入数</div></div>
        <div><div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{stats.wpm}</div><div className="text-xs text-gray-500 dark:text-gray-400 mt-1">WPM</div></div>
        <div><div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{stats.correctCount}</div><div className="text-xs text-gray-500 dark:text-gray-400 mt-1">正确数</div></div>
        <div><div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{Math.round(stats.accuracy * 100)}%</div><div className="text-xs text-gray-500 dark:text-gray-400 mt-1">正确率</div></div>
      </div>
    </div>
  );
}
