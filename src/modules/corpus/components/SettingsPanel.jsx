import { useEffect } from 'react'
import { X, Maximize, BookmarkCheck, Bookmark, FileText, Music, PlaySquare } from 'lucide-react'
import { useCorpusContext } from '../context/CorpusPlayerContext.jsx'
import { useUserConfig } from '../../../hooks/useUserConfig.js'
import { useCorpusStore } from '../hooks/useCorpusStore.js'

const THEME_OPTIONS = [
  { value: 'light', label: '浅色', activeClass: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' },
  { value: 'gray', label: '曜黑', activeClass: 'bg-gray-200 text-gray-700 dark:bg-white dark:text-gray-900' },
  { value: 'star', label: '星空', activeClass: 'bg-amber-100 text-amber-700 dark:bg-white dark:text-gray-900' },
  { value: 'warm', label: '暖米', activeClass: 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400' },
]

function Section({ title, children }) {
  return (
    <div className="px-4 py-3 border-b border-gray-100 dark:border-white/[0.06]">
      {title && (
        <div className="text-xs font-medium text-content-tertiary dark:text-gray-500 mb-2">
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

function ToggleRow({ label, value, onChange, hint }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex-1 min-w-0">
        <div className="text-sm text-content dark:text-gray-200">{label}</div>
        {hint && (
          <div className="text-xs text-content-tertiary dark:text-gray-500">{hint}</div>
        )}
      </div>
      <button
        type="button"
        onClick={() => onChange(!value)}
        role="switch"
        aria-checked={value}
        className={`shrink-0 relative w-9 h-5 rounded-full transition-colors ${
          value
            ? 'bg-primary'
            : 'bg-gray-200 dark:bg-white/[0.1]'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
            value ? 'translate-x-4' : ''
          }`}
        />
      </button>
    </div>
  )
}

function Segmented({ options, value, onChange }) {
  return (
    <div className="flex items-center gap-1 p-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] overflow-hidden">
      {options.map((opt) => {
        const active = value === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 text-center px-2 py-1.5 text-xs rounded transition ${
              active
                ? 'bg-surface dark:bg-white/[0.08] text-content dark:text-gray-100 shadow-sm font-medium'
                : 'text-content-tertiary dark:text-gray-400 hover:text-content dark:hover:text-gray-200'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

export default function SettingsPanel({ open, onClose }) {
  const { settings, updateSetting, toggleSetting, videoId, player } = useCorpusContext()
  const { theme, setTheme } = useUserConfig()
  const { isBookmarked, toggleBookmark } = useCorpusStore()
  const bookmarked = videoId ? isBookmarked(videoId) : false

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      {/* 遮罩 */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 animate-[fadeIn_0.18s_ease-out]"
        onClick={onClose}
      />
      <aside className="corpus-settings-drawer text-content dark:text-gray-100">
        {/* 顶部 */}
        <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-white/[0.06]">
          <span className="text-sm font-semibold">设置</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.06] text-content-tertiary dark:text-gray-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 顶部按钮行 */}
        <div className="shrink-0 px-4 py-3 grid grid-cols-5 gap-2 border-b border-gray-100 dark:border-white/[0.06]">
          <button
            type="button"
            onClick={() => player.requestFullscreen?.()}
            className="flex flex-col items-center gap-1 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/[0.06] text-xs text-content-secondary dark:text-gray-300"
            title="全屏"
          >
            <Maximize className="w-4 h-4" />
            <span>全屏</span>
          </button>
          <button
            type="button"
            onClick={() => videoId && toggleBookmark(videoId)}
            className="flex flex-col items-center gap-1 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/[0.06] text-xs text-content-secondary dark:text-gray-300"
            title={bookmarked ? '取消收藏' : '收藏'}
          >
            {bookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-primary" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
            <span>{bookmarked ? '已收藏' : '收藏'}</span>
          </button>
          <button
            type="button"
            disabled
            className="flex flex-col items-center gap-1 py-2 rounded-md text-xs text-content-tertiary dark:text-gray-500 opacity-50 cursor-not-allowed"
            title="即将开放"
          >
            <FileText className="w-4 h-4" />
            <span>字幕</span>
          </button>
          <button
            type="button"
            disabled
            className="flex flex-col items-center gap-1 py-2 rounded-md text-xs text-content-tertiary dark:text-gray-500 opacity-50 cursor-not-allowed"
            title="即将开放"
          >
            <Music className="w-4 h-4" />
            <span>音频</span>
          </button>
          <button
            type="button"
            disabled
            className="flex flex-col items-center gap-1 py-2 rounded-md text-xs text-content-tertiary dark:text-gray-500 opacity-50 cursor-not-allowed"
            title="即将开放"
          >
            <PlaySquare className="w-4 h-4" />
            <span>YouTube</span>
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* 字幕大小 */}
          <Section title="字幕大小">
            <div className="flex items-center gap-3">
              <span className="text-xs text-content-tertiary dark:text-gray-500 w-6 text-right">
                12
              </span>
              <input
                type="range"
                min={12}
                max={22}
                step={1}
                value={settings.subtitleSize}
                onChange={(e) =>
                  updateSetting('subtitleSize', parseInt(e.target.value, 10))
                }
                className="flex-1 accent-primary cursor-pointer"
              />
              <span className="text-xs text-primary tabular-nums w-8 text-right font-medium">
                {settings.subtitleSize}
              </span>
            </div>
          </Section>

          {/* 一组开关 */}
          <Section title="播放偏好">
            <ToggleRow
              label="视频循环"
              value={settings.videoLoop}
              onChange={() => toggleSetting('videoLoop')}
            />
            <ToggleRow
              label="播放完当前句暂停"
              value={player.pauseAfterCue}
              onChange={() => player.togglePauseAfterCue()}
            />
            <ToggleRow
              label="显示音标"
              value={settings.showPhonetic}
              onChange={() => toggleSetting('showPhonetic')}
            />
            <ToggleRow
              label="显示字幕笔记"
              value={settings.showNotes}
              onChange={() => toggleSetting('showNotes')}
            />
          </Section>

          {/* 主题 */}
          <Section title="主题颜色">
            <div className="grid grid-cols-4 gap-1 p-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06]">
              {THEME_OPTIONS.map((opt) => {
                const active = theme === opt.value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTheme(opt.value)}
                    className={`text-center px-2 py-1.5 text-xs rounded transition ${
                      active
                        ? opt.activeClass + ' shadow-sm font-medium'
                        : 'text-content-tertiary dark:text-gray-400 hover:text-content dark:hover:text-gray-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </Section>
        </div>
      </aside>
    </>
  )
}
