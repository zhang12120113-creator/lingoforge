export const DIFFICULTY_TIERS = [
  { level: 1, label: '初级', max: 50 },
  { level: 2, label: '基础', max: 149 },
  { level: 3, label: '中级', max: 199 },
  { level: 4, label: '中高级', max: 249 },
  { level: 5, label: '高级', max: Infinity },
]

export const DIFFICULTY_LABELS = DIFFICULTY_TIERS.map((t) => t.label)

export function getDifficultyLevel(sentenceCount = 0) {
  for (const tier of DIFFICULTY_TIERS) {
    if (sentenceCount <= tier.max) return tier.level
  }
  return 5
}

export function getDifficultyLabel(sentenceCount = 0) {
  return DIFFICULTY_TIERS[getDifficultyLevel(sentenceCount) - 1].label
}
