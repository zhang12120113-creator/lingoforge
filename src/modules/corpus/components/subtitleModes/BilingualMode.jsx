import { useCorpusContext } from '../../context/CorpusPlayerContext.jsx'
import { useAutoScrollList } from '../../hooks/useAutoScrollList.js'
import SubtitleCueCard from '../SubtitleCueCard.jsx'

export default function BilingualMode() {
  const { subtitles, player, posMap, handleWordClick } = useCorpusContext()
  const { setItemRef, containerProps } = useAutoScrollList(player.activeId)

  if (!subtitles?.length) return null

  return (
    <div
      {...containerProps}
      className="h-full overflow-y-auto divide-y divide-gray-200/60 dark:divide-white/[0.05]"
    >
      {subtitles.map((sub, idx) => {
        const active = sub.id === player.activeId
        return (
          <div
            ref={setItemRef(sub.id)}
            key={sub.id}
          >
            <SubtitleCueCard
              subtitle={sub}
              index={idx}
              active={active}
              posMap={posMap}
              onClick={() => player.jumpToCue(sub.id)}
              onWordClick={handleWordClick}
              onPlay={() => player.jumpToCue(sub.id)}
            />
          </div>
        )
      })}
    </div>
  )
}
