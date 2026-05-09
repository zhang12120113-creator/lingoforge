import { useCorpusContext } from '../context/CorpusPlayerContext.jsx'
import BilingualMode from './subtitleModes/BilingualMode.jsx'
import EnglishMode from './subtitleModes/EnglishMode.jsx'
import ChineseMode from './subtitleModes/ChineseMode.jsx'
import DictationMode from './subtitleModes/DictationMode.jsx'
import ClozeMode from './subtitleModes/ClozeMode.jsx'
import ReadingMode from './subtitleModes/ReadingMode.jsx'
import TranslateMode from './subtitleModes/TranslateMode.jsx'
import VocabCardMode from './subtitleModes/VocabCardMode.jsx'

const MODE_MAP = {
  bilingual: BilingualMode,
  english: EnglishMode,
  chinese: ChineseMode,
  dictation: DictationMode,
  cloze: ClozeMode,
  reading: ReadingMode,
  translate: TranslateMode,
  vocab: VocabCardMode,
}

export default function SubtitlePanel() {
  const { mode, subtitles, settings, loadError } = useCorpusContext()

  if (loadError) {
    return (
      <div className="h-full flex items-center justify-center bg-surface dark:bg-white/[0.03] border border-gray-200/70 dark:border-white/[0.06] rounded-card p-6 text-center">
        <div>
          <p className="text-content-secondary dark:text-gray-300 mb-2">字幕加载失败</p>
          <p className="text-sm text-content-tertiary dark:text-gray-500">{loadError}</p>
        </div>
      </div>
    )
  }

  if (!subtitles?.length) {
    return (
      <div className="h-full flex items-center justify-center bg-surface dark:bg-white/[0.03] border border-gray-200/70 dark:border-white/[0.06] rounded-card">
        <p className="text-sm text-content-tertiary dark:text-gray-500">字幕加载中…</p>
      </div>
    )
  }

  const Cmp = MODE_MAP[mode] || BilingualMode
  const fontSize = `${settings.subtitleSize || 16}px`
  return (
    <div className="h-full" style={{ fontSize }}>
      <Cmp />
    </div>
  )
}
