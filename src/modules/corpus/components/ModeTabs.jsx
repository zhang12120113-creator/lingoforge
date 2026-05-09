import { Fragment } from 'react'
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

// 哪些位置后面跟竖线分隔（按视觉分组）：双语|英语|中文|听写 ｜ 挖空 ｜ 阅读 ｜ 中译英 ｜ 词卡
// 这里直接每个 tab 后面都给一根淡竖线（最后一个不给）
export default function ModeTabs() {
  const { mode, setMode } = useCorpusContext()

  return (
    <div className="flex items-center gap-0 overflow-x-auto px-1">
      {TABS.map((t, i) => {
        const active = mode === t.id
        return (
          <Fragment key={t.id}>
            <button
              type="button"
              onClick={() => setMode(t.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                active
                  ? 'bg-gray-100 dark:bg-white/10 text-content dark:text-white font-semibold'
                  : 'text-content-tertiary dark:text-gray-400 hover:text-content dark:hover:text-gray-200'
              }`}
              aria-pressed={active}
            >
              {t.label}
            </button>
            {i < TABS.length - 1 && (
              <span className="mx-0.5 text-content-tertiary/40 dark:text-gray-600 select-none">
                |
              </span>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
