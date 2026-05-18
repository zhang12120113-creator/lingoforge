import { useNavigate } from 'react-router-dom'
import { moduleConfig, metadata } from '../data/grammarData.jsx'

export default function GrammarHome() {
  const navigate = useNavigate()

  return (
    <div className="h-[calc(100vh-3rem-3.5rem)] md:h-[calc(100vh-4rem-3.5rem)] flex flex-col px-4 max-w-4xl mx-auto animate-page-fade-in overflow-hidden">
      {/* Header */}
      <div className="pt-5 pb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-soft text-primary dark:text-primary-dark text-xs font-medium">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            语法体系
          </div>
          <button
            onClick={() => navigate('/reading')}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-content-tertiary dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark hover:bg-primary-soft transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            返回列表
          </button>
        </div>
        <h1 className="text-2xl font-bold text-content dark:text-gray-100 mb-0.5">{metadata.title}</h1>
        <p className="text-sm text-content-tertiary dark:text-gray-400">{metadata.description}</p>
      </div>

      {/* Module Cards - fills remaining space */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 min-h-0 pb-2">
        {moduleConfig.map((mod, index) => (
          <button
            key={mod.id}
            onClick={() => navigate(mod.path)}
            className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] animate-card-enter ${mod.bgColor} ${mod.borderColor}`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Icon */}
            <div className={`w-11 h-11 rounded-xl ${mod.bgColor} ${mod.textColor} flex items-center justify-center mb-3`}>
              {mod.icon}
            </div>

            {/* Title */}
            <h3 className={`text-base font-bold ${mod.textColor} mb-0.5`}>{mod.name}</h3>
            <p className="text-xs text-content-tertiary dark:text-gray-400 mb-3">{mod.nameEn}</p>

            {/* Description */}
            <p className="text-xs text-content-secondary dark:text-gray-300 leading-relaxed">
              {mod.description}
            </p>

            {/* Arrow */}
            <div className={`absolute bottom-4 right-4 w-7 h-7 rounded-full bg-white/60 dark:bg-white/10 flex items-center justify-center ${mod.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Footer info */}
      <div className="flex items-center justify-between text-xs text-content-tertiary dark:text-gray-500 py-2">
        <span>{metadata.modules.length} 大模块</span>
        <span className="text-[10px]">v{metadata.version}</span>
      </div>
    </div>
  )
}
