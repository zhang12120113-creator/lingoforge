import { useEffect, useState } from 'react';

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const scrollToWordbooks = () => {
    const element = document.getElementById('wordbooks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[500px] h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-indigo-900 text-white overflow-hidden">
      {/* 背景光晕装饰 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          LingoForge
          <span
            className={`inline-block ml-1 w-[3px] h-[0.9em] bg-indigo-400 align-middle transition-opacity duration-100 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-2 font-light">
          打字背单词，一举两得
        </p>

        <p className="text-sm md:text-base text-slate-400 mb-8 max-w-lg mx-auto">
          15 大精准词库 · 科学分章记忆 · 沉浸式打字练习
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToWordbooks}
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            立即开始
          </button>

          <a
            href="https://github.com/zhang12120113-creator/lingoforge"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              {/* GitHub 图标内联 SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </span>
          </a>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
