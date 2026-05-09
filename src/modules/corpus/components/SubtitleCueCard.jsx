import { memo } from 'react'
import { Play, Copy, Heart, Pencil, Mic } from 'lucide-react'
import { formatTime } from '../../../utils/formatTime.js'
import { tokenizeEnglish, getPosColor } from '../utils/wordColorMap.js'

function CueTextWithPills({ text, posMap, onWordClick }) {
  if (!text) return null
  const tokens = tokenizeEnglish(text)
  return (
    <>
      {tokens.map((tok, i) => {
        if (!tok.isWord) {
          return <span key={`c-${i}`}>{tok.raw}</span>
        }
        const pos = posMap?.get(tok.lower) || 'unknown'
        const color = getPosColor(pos)
        const isKnown = posMap?.has(tok.lower)

        if (!isKnown) {
          return (
            <span
              key={`c-${i}`}
              className="cursor-pointer select-none hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.stopPropagation()
                if (onWordClick) onWordClick(tok.lower, e.target.getBoundingClientRect(), e.target)
              }}
            >
              {tok.raw}
            </span>
          )
        }

        return (
          <span
            key={`c-${i}`}
            className="corpus-pos-pill cursor-pointer select-none"
            style={{ '--corpus-pos-color': color }}
            onClick={(e) => {
              e.stopPropagation()
              if (onWordClick) onWordClick(tok.lower, e.target.getBoundingClientRect(), e.target)
            }}
            title={pos}
          >
            {tok.raw}
          </span>
        )
      })}
    </>
  )
}

function CueActions({ onPlay, onCopy, onLike, onEdit, onRecord }) {
  const cls =
    'w-7 h-7 flex items-center justify-center rounded-full text-content-tertiary dark:text-gray-500 hover:text-primary hover:bg-primary-soft transition-colors'
  return (
    <div className="flex items-center gap-0.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); if (onPlay) onPlay() }}
        className={cls}
        title="播放"
      >
        <Play className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); if (onCopy) onCopy() }}
        className={cls}
        title="复制"
      >
        <Copy className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); if (onLike) onLike() }}
        className={cls}
        title="收藏"
      >
        <Heart className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); if (onEdit) onEdit() }}
        className={cls}
        title="编辑"
      >
        <Pencil className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); if (onRecord) onRecord() }}
        className={cls}
        title="录音"
      >
        <Mic className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

function SubtitleCueCardInner({
  subtitle,
  index,
  active,
  posMap,
  onClick,
  onWordClick,
  onPlay,
}) {
  const handleCopy = () => {
    const text = `${subtitle.en}\n${subtitle.zh || ''}`
    navigator.clipboard.writeText(text).catch(() => {})
  }

  return (
    <div
      onClick={onClick}
      className={`group p-3 md:p-4 transition-colors cursor-pointer ${
        active
          ? 'bg-primary-soft/60 dark:bg-primary-soft/30'
          : 'hover:bg-gray-50 dark:hover:bg-white/[0.03]'
      }`}
    >
      {/* 顶部行：时间戳 (左) + 操作图标 (右) */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-content-tertiary dark:text-gray-500 tabular-nums">
          <span className="font-medium">{index + 1}</span>
          <span className="mx-2">{formatTime(subtitle.start)} - {formatTime(subtitle.end)}</span>
        </div>
        <CueActions onPlay={onPlay} onCopy={handleCopy} />
      </div>

      {/* 英文 */}
      {subtitle.en && (
        <div className="text-[15px] leading-relaxed mb-1 text-content dark:text-gray-100">
          <CueTextWithPills
            text={subtitle.en}
            posMap={posMap}
            onWordClick={onWordClick}
          />
        </div>
      )}

      {/* 中文 */}
      {subtitle.zh && (
        <div className="text-sm text-content-tertiary dark:text-gray-400 leading-relaxed">
          {subtitle.zh}
        </div>
      )}
    </div>
  )
}

export default memo(SubtitleCueCardInner)
