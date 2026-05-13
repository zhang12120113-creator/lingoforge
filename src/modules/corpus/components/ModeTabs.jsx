import { useCorpusContext } from '../context/CorpusPlayerContext.jsx'

const TABS = [
  { id: 'bilingual', label: '双语' },
  { id: 'english',   label: '英语' },
  { id: 'chinese',   label: '中文' },
  { id: 'dictation', label: '听写' },
  { id: 'cloze',     label: '挖空' },
  { id: 'reading',   label: '阅读' },
  { id: 'translate', label: '中译英' },
  { id: 'vocab',     label: '词卡' },
]

export default function ModeTabs() {
  const { mode, setMode } = useCorpusContext()

  return (
    <div className="mode-switch-glass flex items-center gap-1 overflow-x-auto rounded-full px-1.5 py-1">
      {TABS.map((t) => {
        const active = mode === t.id
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setMode(t.id)}
            className={`shrink-0 px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
              active
                ? 'bg-primary-soft text-primary dark:bg-white/10 dark:text-white font-semibold'
                : 'text-content-secondary dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/[0.06]'
            }`}
            aria-pressed={active}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}
