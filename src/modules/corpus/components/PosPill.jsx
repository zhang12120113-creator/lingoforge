import { memo } from 'react'
import { getPosColor } from '../utils/wordColorMap.js'

function PosPillInner({ word, pos, onClick }) {
  const color = getPosColor(pos || 'unknown')
  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) onClick(word, e)
  }

  return (
    <span
      onClick={handleClick}
      className="corpus-pos-pill cursor-pointer select-none"
      style={{ '--corpus-pos-color': color }}
      title={pos || ''}
    >
      {word}
    </span>
  )
}

export default memo(PosPillInner)
