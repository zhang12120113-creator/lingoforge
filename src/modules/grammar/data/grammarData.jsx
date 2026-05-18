import grammarData from '../../../../english_grammar_system.json'

export const metadata = grammarData.metadata
export const partsOfSpeech = grammarData.partsOfSpeech
export const tenses = grammarData.tenses
export const sentenceAnalysis = grammarData.sentenceAnalysis

export const moduleConfig = [
  {
    id: 'partsOfSpeech',
    path: 'parts-of-speech',
    name: '词性',
    nameEn: 'Parts of Speech',
    description: '10大词性类别，82个子类型',
    color: 'violet',
    bgColor: 'bg-violet-50 dark:bg-violet-500/10',
    textColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-200 dark:border-violet-500/20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M4 7V4h16v3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20h6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4v16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    data: grammarData.partsOfSpeech,
  },
  {
    id: 'tenses',
    path: 'tenses',
    name: '时态',
    nameEn: 'Tenses',
    description: '12种基本时态体系',
    color: 'emerald',
    bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-200 dark:border-emerald-500/20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    data: grammarData.tenses,
  },
  {
    id: 'sentenceAnalysis',
    path: 'sentence-analysis',
    name: '句子精解',
    nameEn: 'Sentence Analysis',
    description: '句子成分、句型、从句',
    color: 'amber',
    bgColor: 'bg-amber-50 dark:bg-amber-500/10',
    textColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-200 dark:border-amber-500/20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    data: grammarData.sentenceAnalysis,
  },
]
