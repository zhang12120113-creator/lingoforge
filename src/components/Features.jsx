const features = [
  { icon: '⌨️', title: '打字记忆', desc: '手指动起来，单词记得牢' },
  { icon: '📚', title: '精准词库', desc: '中高考到雅思托福全覆盖' },
  { icon: '🎯', title: '科学分章', desc: '每章 25 词，碎片时间也能学' },
  { icon: '🌙', title: '深色护眼', desc: '夜间学习不刺眼' },
];

export default function Features() {
  return (
    <section className="w-full py-16 px-4 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
