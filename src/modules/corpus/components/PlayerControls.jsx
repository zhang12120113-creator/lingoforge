import { useState, useRef, useEffect } from 'react'
import {
  Pause,
  Play,
  Repeat,
  SkipBack,
  SkipForward,
  Maximize,
  PauseCircle,
  Hourglass,
} from 'lucide-react'
import { useCorpusContext } from '../context/CorpusPlayerContext.jsx'

const RATE_OPTIONS = [0.75, 1, 1.25, 1.5, 1.75, 2]
const INTERVAL_OPTIONS = [0, 0.5, 1, 2, 3]

function LabeledBtn({ active, onClick, label, ariaLabel, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={ariaLabel || label}
      aria-pressed={!!active}
      className="shrink-0 flex flex-col items-center gap-0.5 group min-w-[44px]"
    >
      <span
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
          active
            ? 'bg-primary-soft text-primary'
            : 'text-content-secondary dark:text-gray-300 group-hover:bg-gray-100/60 dark:group-hover:bg-white/[0.06]'
        }`}
      >
        {children}
      </span>
      <span
        className={`text-[10px] leading-none whitespace-nowrap ${
          active ? 'text-primary' : 'text-content-tertiary dark:text-gray-500'
        }`}
      >
        {label}
      </span>
    </button>
  )
}

function RateMenu({ rate, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [open])
  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col items-center gap-0.5 group min-w-[44px]"
        title="播放速度"
      >
        <span className="w-9 h-9 flex items-center justify-center rounded-full text-content-secondary dark:text-gray-300 group-hover:bg-gray-100/60 dark:group-hover:bg-white/[0.06] text-sm font-medium tabular-nums">
          {rate}x
        </span>
        <span className="text-[10px] leading-none text-content-tertiary dark:text-gray-500">
          倍速
        </span>
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 min-w-[80px] rounded-md py-1 z-50 bg-surface dark:bg-[#1a1a24] border border-gray-200 dark:border-white/[0.08] shadow-lg">
          {RATE_OPTIONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                onChange(r)
                setOpen(false)
              }}
              className={`block w-full px-3 py-1.5 text-left text-xs ${
                rate === r
                  ? 'bg-primary-soft text-primary'
                  : 'text-content-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              {r}x
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function IntervalMenu({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [open])
  const active = value > 0
  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col items-center gap-0.5 group min-w-[44px]"
        title="单句重播间隔"
      >
        <span
          className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
            active
              ? 'bg-primary-soft text-primary'
              : 'text-content-secondary dark:text-gray-300 group-hover:bg-gray-100/60 dark:group-hover:bg-white/[0.06]'
          }`}
        >
          <Hourglass className="w-4 h-4" />
        </span>
        <span
          className={`text-[10px] leading-none ${
            active ? 'text-primary' : 'text-content-tertiary dark:text-gray-500'
          }`}
        >
          {active ? `${value}s` : '间隔'}
        </span>
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 min-w-[100px] rounded-md py-1 z-50 bg-surface dark:bg-[#1a1a24] border border-gray-200 dark:border-white/[0.08] shadow-lg">
          {INTERVAL_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                onChange(s)
                setOpen(false)
              }}
              className={`block w-full px-3 py-1.5 text-left text-xs ${
                value === s
                  ? 'bg-primary-soft text-primary'
                  : 'text-content-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.04]'
              }`}
            >
              {s === 0 ? '关闭' : `${s} 秒`}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function VerticalSep() {
  return <span className="mx-1 self-center h-7 w-px bg-gray-200 dark:bg-white/[0.08]" />
}

export default function PlayerControls() {
  const { player, settings, toggleSetting } = useCorpusContext()

  const {
    isPlaying,
    rate,
    isLooping,
    abLoop,
    pauseAfterCue,
    intervalGap,
    toggle,
    setRate,
    toggleLoop,
    setAbPoint,
    togglePauseAfterCue,
    setIntervalGap,
    requestFullscreen,
    prevCue,
    nextCue,
  } = player

  const abLabel =
    abLoop.a == null
      ? 'A点'
      : abLoop.b == null
      ? 'B点?'
      : 'A↻B'

  return (
    <div className="shrink-0 px-2 py-2 flex items-end justify-center gap-1 overflow-x-auto">
      <RateMenu rate={rate} onChange={setRate} />
      <LabeledBtn onClick={requestFullscreen} label="全屏">
        <Maximize className="w-4 h-4" />
      </LabeledBtn>
      <LabeledBtn
        active={settings.showPhonetic}
        onClick={() => toggleSetting('showPhonetic')}
        label="音标"
        ariaLabel="显示音标"
      >
        <span className="text-base font-serif italic leading-none">ə</span>
      </LabeledBtn>

      <VerticalSep />

      <LabeledBtn onClick={prevCue} label="上一句">
        <SkipBack className="w-4 h-4" />
      </LabeledBtn>

      {/* 大号播放/暂停按钮 */}
      <button
        type="button"
        onClick={toggle}
        title={isPlaying ? '暂停' : '播放'}
        className="shrink-0 mx-1 mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" fill="currentColor" />
        ) : (
          <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
        )}
      </button>

      <LabeledBtn onClick={nextCue} label="下一句">
        <SkipForward className="w-4 h-4" />
      </LabeledBtn>

      <VerticalSep />

      {/* A 点按钮 —— 用 LabeledBtn 但内部是文字 */}
      <button
        type="button"
        onClick={setAbPoint}
        title={abLabel}
        aria-pressed={abLoop.enabled}
        className="shrink-0 flex flex-col items-center gap-0.5 group min-w-[44px]"
      >
        <span
          className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
            abLoop.enabled
              ? 'bg-primary text-white'
              : abLoop.a != null
              ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300'
              : 'text-content-secondary dark:text-gray-300 group-hover:bg-gray-100/60 dark:group-hover:bg-white/[0.06]'
          }`}
        >
          A
        </span>
        <span
          className={`text-[10px] leading-none ${
            abLoop.enabled || abLoop.a != null
              ? 'text-primary'
              : 'text-content-tertiary dark:text-gray-500'
          }`}
        >
          A点
        </span>
      </button>

      <LabeledBtn active={isLooping} onClick={toggleLoop} label="单句循环">
        <Repeat className="w-4 h-4" />
      </LabeledBtn>

      <IntervalMenu value={intervalGap} onChange={setIntervalGap} />

      <LabeledBtn
        active={pauseAfterCue}
        onClick={togglePauseAfterCue}
        label="单句暂停"
      >
        <PauseCircle className="w-4 h-4" />
      </LabeledBtn>
    </div>
  )
}
