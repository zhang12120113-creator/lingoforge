export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          LingoForge © 2026 · 独立开发者 小月
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/zhang12120113-creator/lingoforge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/zhang12120113-creator/lingoforge/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            问题反馈
          </a>
        </div>
      </div>
    </footer>
  );
}
