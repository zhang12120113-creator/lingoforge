import { memo } from 'react'
import { DICT_BADGE_LABEL, DICT_BADGE_CLASS } from '../utils/wordColorMap.js'

function WordBadgeInner({ dictId, size = 'sm' }) {
  if (!dictId) return null
  const label = DICT_BADGE_LABEL[dictId] || '单词'
  const colorCls = DICT_BADGE_CLASS[dictId] || 'bg-gray-100 text-gray-700 dark:bg-white/[0.06] dark:text-gray-300'
  const sizeCls =
    size === 'xs'
      ? 'text-[10px] px-1.5 py-0.5'
      : size === 'sm'
      ? 'text-[11px] px-1.5 py-0.5'
      : 'text-xs px-2 py-0.5'
  return (
    <span
      className={`inline-flex items-center rounded font-medium ${sizeCls} ${colorCls}`}
    >
      {label}
    </span>
  )
}

const WordBadge = memo(WordBadgeInner)
export default WordBadge
