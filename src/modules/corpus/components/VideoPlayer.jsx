import { EyeOff } from 'lucide-react'
import { useCorpusContext } from '../context/CorpusPlayerContext.jsx'
import { formatTime } from '../../../utils/formatTime.js'

export default function VideoPlayer({ src, poster }) {
  const { videoRef, player, settings } = useCorpusContext()
  const { hideVideo, currentTime, duration, seek } = player
  const max = duration > 0 ? duration : 0

  return (
    <div className="rounded-2xl overflow-hidden bg-black w-full aspect-video shrink-0 relative border border-gray-200/60 dark:border-white/[0.06] shadow-lg dark:shadow-2xl dark:shadow-black/40">
      {hideVideo ? (
        <div className="corpus-hidden-video flex flex-col items-center justify-center gap-2">
          <EyeOff className="w-6 h-6 opacity-60" />
          <span>视频已隐藏 · 仅听音频</span>
        </div>
      ) : null}
      <video
        ref={videoRef}
        src={src}
        poster={poster || undefined}
        controls={false}
        preload="metadata"
        playsInline
        loop={settings.videoLoop}
        className={`w-full h-full bg-black ${hideVideo ? 'invisible absolute inset-0' : ''}`}
      />

      {/* 底部叠加进度条 */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-2 pointer-events-none">
        <div className="flex items-center gap-2 text-[11px] text-white/85 tabular-nums drop-shadow">
          <span className="shrink-0 w-9 text-right">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={max || 0}
            step={0.1}
            value={Math.min(currentTime, max)}
            onChange={(e) => seek(parseFloat(e.target.value))}
            aria-label="进度"
            className="flex-1 corpus-video-range cursor-pointer pointer-events-auto"
          />
          <span className="shrink-0 w-9">{formatTime(max)}</span>
        </div>
      </div>
    </div>
  )
}
