import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { sentenceAnalysis } from '../data/grammarData.jsx'

// Map URL id to data key and metadata
const sectionMap = {
  elements: {
    dataKey: 'sentenceElements',
    name: '句子成分',
    nameEn: 'Sentence Elements',
    description: '主语、谓语、宾语等构成句子的核心成分',
    icon: 'shapes',
  },
  typesByPurpose: {
    dataKey: 'sentenceTypesByPurpose',
    name: '句子类型（按用途）',
    nameEn: 'Sentence Types by Purpose',
    description: '陈述句、疑问句、祈使句、感叹句',
    icon: 'list',
  },
  structures: {
    dataKey: 'sentenceStructures',
    name: '句子结构',
    nameEn: 'Sentence Structures',
    description: '简单句、并列句、复合句、并列复合句',
    icon: 'layers',
  },
  clauses: {
    dataKey: 'clauses',
    name: '从句',
    nameEn: 'Clauses',
    description: '名词性从句、形容词性从句、副词性从句',
    icon: 'git-branch',
  },
  specialPatterns: {
    dataKey: 'specialPatterns',
    name: '特殊句式',
    nameEn: 'Special Patterns',
    description: '倒装、强调、虚拟语气、省略',
    icon: 'sparkles',
  },
}

// Accent colors
const accent = {
  bg: 'bg-amber-50 dark:bg-amber-500/10',
  text: 'text-amber-600 dark:text-amber-400',
  border: 'border-amber-200 dark:border-amber-500/20',
  badge: 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300',
  light: 'bg-amber-500',
}

// Section icons as inline SVGs
function SectionIcon({ type, className }) {
  const cn = className || 'w-6 h-6'
  switch (type) {
    case 'shapes':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 0 20" fill="currentColor" opacity={0.15} />
        </svg>
      )
    case 'list':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      )
    case 'layers':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case 'git-branch':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
          <path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z" />
        </svg>
      )
    default:
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}

// Collapsible section
function Collapsible({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 dark:border-white/[0.08] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
      >
        <div>
          <span className="text-sm font-semibold text-content dark:text-gray-100">{title}</span>
          {subtitle && (
            <span className="ml-2 text-xs text-content-tertiary dark:text-gray-400">{subtitle}</span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-content-tertiary dark:text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}

// Example sentence card
function ExampleCard({ sentence, meaning, highlight, highlightKey }) {
  return (
    <div className="bg-gray-50 dark:bg-white/[0.04] rounded-lg p-3 space-y-1">
      {sentence && (
        <p className="text-sm text-content dark:text-gray-100 leading-relaxed">
          {highlight ? highlightText(sentence, highlight) : sentence}
        </p>
      )}
      {meaning && (
        <p className="text-xs text-content-tertiary dark:text-gray-400">{meaning}</p>
      )}
    </div>
  )
}

// Highlight matched text in sentence
function highlightText(sentence, keyword) {
  if (!keyword) return sentence
  const idx = sentence.toLowerCase().indexOf(keyword.toLowerCase())
  if (idx === -1) return sentence
  return (
    <>
      {sentence.slice(0, idx)}
      <span className={`${accent.text} font-semibold`}>{sentence.slice(idx, idx + keyword.length)}</span>
      {sentence.slice(idx + keyword.length)}
    </>
  )
}

// Count items in a data section for card badges
function countItems(dataKey, data) {
  const val = data[dataKey]
  if (!val) return 0
  if (Array.isArray(val)) return val.length
  if (typeof val === 'object') return Object.keys(val).length
  return 0
}

// ---- Main component ----
export default function SentenceAnalysis() {
  const { id } = useParams()
  const navigate = useNavigate()
  const data = sentenceAnalysis

  // Chapter list (no id)
  if (!id) {
    return <ChapterList data={data} navigate={navigate} />
  }

  // Detail view
  const section = sectionMap[id]
  if (!section) {
    return (
      <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] px-4 py-6 max-w-4xl mx-auto animate-page-fade-in">
        <p className="text-content-secondary dark:text-gray-300">未找到该章节</p>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] px-4 py-6 max-w-4xl mx-auto animate-page-fade-in">
      {/* Back button */}
      <button
        onClick={() => navigate('/reading/grammar/sentence-analysis')}
        className="inline-flex items-center gap-1.5 text-sm text-content-secondary dark:text-gray-300 hover:text-content dark:hover:text-gray-100 transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        句子精解
      </button>

      {/* Section header */}
      <div className="mb-6">
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${accent.badge}`}>
          <SectionIcon type={section.icon} className="w-3.5 h-3.5" />
          {section.nameEn}
        </div>
        <h1 className="text-2xl font-bold text-content dark:text-gray-100 mb-1">{section.name}</h1>
        <p className="text-sm text-content-tertiary dark:text-gray-400">{section.description}</p>
      </div>

      {/* Render section content */}
      {id === 'elements' && <SentenceElementsView data={data.sentenceElements} />}
      {id === 'typesByPurpose' && <SimpleListView items={data.sentenceTypesByPurpose} />}
      {id === 'structures' && <SimpleListView items={data.sentenceStructures} />}
      {id === 'clauses' && <ClausesView data={data.clauses} />}
      {id === 'specialPatterns' && <SpecialPatternsView data={data.specialPatterns} />}
    </div>
  )
}

// ==================== Chapter List ====================
function ChapterList({ data, navigate }) {
  const sections = Object.entries(sectionMap).map(([id, meta]) => ({
    id,
    ...meta,
    count: countItems(meta.dataKey, data),
  }))

  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] px-4 py-6 max-w-4xl mx-auto animate-page-fade-in">
      {/* Back to grammar home */}
      <button
        onClick={() => navigate('/reading/grammar')}
        className="inline-flex items-center gap-1.5 text-sm text-content-secondary dark:text-gray-300 hover:text-content dark:hover:text-gray-100 transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        语法体系
      </button>

      {/* Header */}
      <div className="mb-6">
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${accent.badge}`}>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Sentence Analysis
        </div>
        <h1 className="text-2xl font-bold text-content dark:text-gray-100 mb-1">句子精解</h1>
        <p className="text-sm text-content-tertiary dark:text-gray-400 mb-3">
          {data.overview?.definition}
        </p>
        {data.overview?.definitionEn && (
          <p className="text-xs text-content-tertiary dark:text-gray-500 leading-relaxed">
            {data.overview.definitionEn}
          </p>
        )}
      </div>

      {/* Overview cards */}
      {(data.overview?.components?.length > 0 || data.overview?.structures?.length > 0) && (
        <div className="mb-8 space-y-3">
          {data.overview.components?.length > 0 && (
            <div className="glass-card rounded-xl p-4">
              <h3 className="text-sm font-semibold text-content dark:text-gray-100 mb-2">核心维度</h3>
              <ul className="space-y-1.5">
                {data.overview.components.map((c, i) => (
                  <li key={i} className="text-xs text-content-secondary dark:text-gray-300 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-400">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.overview.structures?.length > 0 && (
            <div className="glass-card rounded-xl p-4">
              <h3 className="text-sm font-semibold text-content dark:text-gray-100 mb-2">基本结构</h3>
              <ul className="space-y-1.5">
                {data.overview.structures.map((s, i) => (
                  <li key={i} className="text-xs text-content-secondary dark:text-gray-300 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-400">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Section cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sections.map((sec, index) => (
          <button
            key={sec.id}
            onClick={() => navigate(`/reading/grammar/sentence-analysis/${sec.id}`)}
            className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] animate-card-enter ${accent.bg} ${accent.border}`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className={`w-11 h-11 rounded-xl ${accent.bg} ${accent.text} flex items-center justify-center mb-3`}>
              <SectionIcon type={sec.icon} />
            </div>
            <h3 className={`text-base font-bold ${accent.text} mb-0.5`}>{sec.name}</h3>
            <p className="text-xs text-content-tertiary dark:text-gray-400 mb-2">{sec.nameEn}</p>
            <p className="text-xs text-content-secondary dark:text-gray-300 leading-relaxed mb-2">
              {sec.description}
            </p>
            <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${accent.badge}`}>
              {sec.count} 项
            </span>
            <div className={`absolute bottom-4 right-4 w-7 h-7 rounded-full bg-white/60 dark:bg-white/10 flex items-center justify-center ${accent.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ==================== Sentence Elements View ====================
function SentenceElementsView({ data }) {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="space-y-3">
      {data.map((element) => {
        const isExpanded = expandedId === element.id
        return (
          <div
            key={element.id}
            className={`border rounded-xl overflow-hidden transition-colors ${
              isExpanded
                ? 'border-amber-200 dark:border-amber-500/30'
                : 'border-gray-200 dark:border-white/[0.08]'
            }`}
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : element.id)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold ${accent.badge}`}>
                  {element.name.charAt(0)}
                </span>
                <div>
                  <span className="text-sm font-semibold text-content dark:text-gray-100">
                    {element.name}
                  </span>
                  <span className="ml-2 text-xs text-content-tertiary dark:text-gray-400">
                    {element.nameEn}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-content-tertiary dark:text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {isExpanded && (
              <div className="px-4 pb-4 space-y-4 animate-page-fade-in">
                {/* Definition */}
                <p className="text-sm text-content-secondary dark:text-gray-300 leading-relaxed">
                  {element.definition}
                </p>
                {element.definitionEn && (
                  <p className="text-xs text-content-tertiary dark:text-gray-500 leading-relaxed">
                    {element.definitionEn}
                  </p>
                )}

                {/* Position */}
                {(element.position || element.positionEn) && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded-md font-medium ${accent.badge}`}>位置</span>
                    <span className="text-content-secondary dark:text-gray-300">
                      {element.position}
                    </span>
                    {element.positionEn && (
                      <span className="text-content-tertiary dark:text-gray-500">
                        ({element.positionEn})
                      </span>
                    )}
                  </div>
                )}

                {/* Types */}
                {element.types?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-content dark:text-gray-100 mb-2 uppercase tracking-wider">
                      类型分类
                    </h4>
                    <div className="space-y-2">
                      {element.types.map((t, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 dark:bg-white/[0.04] rounded-lg p-3"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-content dark:text-gray-100">
                              {t.type}
                            </span>
                            <span className="text-xs text-content-tertiary dark:text-gray-400">
                              {t.typeEn}
                            </span>
                          </div>
                          {t.description && (
                            <p className="text-xs text-content-tertiary dark:text-gray-500 mb-1">
                              {t.description}
                            </p>
                          )}
                          {t.example && (
                            <p className="text-sm text-content-secondary dark:text-gray-300">
                              {t.example}
                            </p>
                          )}
                          {t.exampleMeaning && (
                            <p className="text-xs text-content-tertiary dark:text-gray-500">
                              {t.exampleMeaning}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Examples */}
                {element.examples?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-content dark:text-gray-100 mb-2 uppercase tracking-wider">
                      例句
                    </h4>
                    <div className="space-y-2">
                      {element.examples.map((ex, i) => {
                        const highlightWord = ex[element.id] || ex.subject || ex.predicate || ex.object || null
                        return (
                          <ExampleCard
                            key={i}
                            sentence={ex.sentence}
                            meaning={ex.meaning}
                            highlight={highlightWord}
                          />
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ==================== Simple List View (types by purpose / structures) ====================
function SimpleListView({ items }) {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isExpanded = expandedId === item.id
        return (
          <div
            key={item.id}
            className={`border rounded-xl overflow-hidden transition-colors ${
              isExpanded
                ? 'border-amber-200 dark:border-amber-500/30'
                : 'border-gray-200 dark:border-white/[0.08]'
            }`}
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
            >
              <div>
                <span className="text-sm font-semibold text-content dark:text-gray-100">{item.name}</span>
                <span className="ml-2 text-xs text-content-tertiary dark:text-gray-400">{item.nameEn}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-content-tertiary dark:text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {isExpanded && (
              <div className="px-4 pb-4 space-y-3 animate-page-fade-in">
                <p className="text-sm text-content-secondary dark:text-gray-300 leading-relaxed">
                  {item.definition}
                </p>
                {item.definitionEn && (
                  <p className="text-xs text-content-tertiary dark:text-gray-500 leading-relaxed">
                    {item.definitionEn}
                  </p>
                )}
                {item.structure && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded-md font-medium ${accent.badge}`}>结构</span>
                    <code className="text-content-secondary dark:text-gray-300">{item.structure}</code>
                  </div>
                )}
                {item.punctuation && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded-md font-medium ${accent.badge}`}>标点</span>
                    <span className="text-content-secondary dark:text-gray-300">{item.punctuation}</span>
                  </div>
                )}
                {item.examples?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-content dark:text-gray-100 mb-2 uppercase tracking-wider">
                      例句
                    </h4>
                    <div className="space-y-2">
                      {item.examples.map((ex, i) => (
                        <ExampleCard
                          key={i}
                          sentence={ex.sentence}
                          meaning={ex.meaning}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {/* Render any extra keys dynamically */}
                {Object.entries(item).map(([key, val]) => {
                  if (['id', 'name', 'nameEn', 'definition', 'definitionEn', 'structure', 'punctuation', 'examples'].includes(key)) return null
                  if (typeof val === 'string') {
                    return (
                      <div key={key} className="flex items-start gap-2 text-xs">
                        <span className={`px-2 py-0.5 rounded-md font-medium shrink-0 ${accent.badge}`}>{key}</span>
                        <span className="text-content-secondary dark:text-gray-300">{val}</span>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ==================== Clauses View ====================
function ClausesView({ data }) {
  return (
    <div className="space-y-6">
      {Object.entries(data).map(([key, clauseGroup]) => (
        <div key={key}>
          {/* Clause group header */}
          <div className="mb-3">
            <h2 className="text-lg font-bold text-content dark:text-gray-100">
              {clauseGroup.name}
            </h2>
            <p className="text-xs text-content-tertiary dark:text-gray-400">{clauseGroup.nameEn}</p>
            {clauseGroup.definition && (
              <p className="text-sm text-content-secondary dark:text-gray-300 mt-1 leading-relaxed">
                {clauseGroup.definition}
              </p>
            )}
          </div>

          {/* Types */}
          {clauseGroup.types?.length > 0 && (
            <div className="space-y-3 mb-4">
              {clauseGroup.types.map((t, i) => (
                <ClauseTypeCard key={i} type={t} />
              ))}
            </div>
          )}

          {/* Extra info like thatVsWhich, prepositionPlacement */}
          {clauseGroup.thatVsWhich && (
            <Collapsible title="that vs which" subtitle="区别说明" defaultOpen={false}>
              <div className="space-y-3">
                {clauseGroup.thatVsWhich.description && (
                  <p className="text-sm text-content-secondary dark:text-gray-300">
                    {clauseGroup.thatVsWhich.description}
                  </p>
                )}
                {clauseGroup.thatVsWhich.points?.length > 0 && (
                  <ul className="space-y-1.5">
                    {clauseGroup.thatVsWhich.points.map((p, j) => (
                      <li key={j} className="text-xs text-content-secondary dark:text-gray-300 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-400">
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Collapsible>
          )}

          {clauseGroup.prepositionPlacement && (
            <Collapsible title="介词位置" subtitle="Preposition Placement" defaultOpen={false}>
              <div className="space-y-2">
                {clauseGroup.prepositionPlacement.map((p, j) => (
                  <div key={j} className="bg-gray-50 dark:bg-white/[0.04] rounded-lg p-3">
                    <p className="text-xs font-medium text-content dark:text-gray-100 mb-1">{p.pattern}</p>
                    <p className="text-sm text-content-secondary dark:text-gray-300">{p.example}</p>
                    <p className="text-xs text-content-tertiary dark:text-gray-500">{p.meaning}</p>
                  </div>
                ))}
              </div>
            </Collapsible>
          )}
        </div>
      ))}
    </div>
  )
}

function ClauseTypeCard({ type }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors ${open ? 'border-amber-200 dark:border-amber-500/30' : 'border-gray-200 dark:border-white/[0.08]'}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
      >
        <div>
          <span className="text-sm font-semibold text-content dark:text-gray-100">{type.type}</span>
          <span className="ml-2 text-xs text-content-tertiary dark:text-gray-400">{type.typeEn}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-content-tertiary dark:text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 animate-page-fade-in">
          {type.description && (
            <p className="text-sm text-content-secondary dark:text-gray-300">{type.description}</p>
          )}
          {type.function && (
            <div className="flex items-center gap-2 text-xs">
              <span className={`px-2 py-0.5 rounded-md font-medium ${accent.badge}`}>功能</span>
              <span className="text-content-secondary dark:text-gray-300">{type.function}</span>
            </div>
          )}
          {type.introducers && (
            <div className="flex items-center gap-2 text-xs">
              <span className={`px-2 py-0.5 rounded-md font-medium ${accent.badge}`}>引导词</span>
              <span className="text-content-secondary dark:text-gray-300">{type.introducers}</span>
            </div>
          )}
          {type.relativePronouns && (
            <div className="flex items-center gap-2 text-xs">
              <span className={`px-2 py-0.5 rounded-md font-medium ${accent.badge}`}>关系代词</span>
              <span className="text-content-secondary dark:text-gray-300">{type.relativePronouns}</span>
            </div>
          )}
          {type.conjunctions && (
            <div className="flex items-center gap-2 text-xs">
              <span className={`px-2 py-0.5 rounded-md font-medium ${accent.badge}`}>连词</span>
              <span className="text-content-secondary dark:text-gray-300">{type.conjunctions}</span>
            </div>
          )}
          {type.tenseNote && (
            <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-lg p-2.5 text-xs text-amber-700 dark:text-amber-300">
              {type.tenseNote}
            </div>
          )}
          {type.examples?.length > 0 && (
            <div className="space-y-2">
              {type.examples.map((ex, j) => (
                <ExampleCard
                  key={j}
                  sentence={ex.sentence}
                  meaning={ex.meaning}
                  highlight={ex.clause}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ==================== Special Patterns View ====================
function SpecialPatternsView({ data }) {
  return (
    <div className="space-y-6">
      {Object.entries(data).map(([key, pattern]) => (
        <SpecialPatternSection key={key} pattern={pattern} />
      ))}
    </div>
  )
}

function SpecialPatternSection({ pattern }) {
  return (
    <div className="glass-card rounded-xl p-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-content dark:text-gray-100">{pattern.name}</h2>
        <p className="text-xs text-content-tertiary dark:text-gray-400">{pattern.nameEn}</p>
        {pattern.definition && (
          <p className="text-sm text-content-secondary dark:text-gray-300 mt-1 leading-relaxed">
            {pattern.definition}
          </p>
        )}
        {pattern.definitionEn && (
          <p className="text-xs text-content-tertiary dark:text-gray-500 mt-0.5 leading-relaxed">
            {pattern.definitionEn}
          </p>
        )}
      </div>

      {/* Types (inversion, ellipsis, subjunctiveMood) */}
      {pattern.types?.length > 0 && (
        <div className="space-y-3">
          {pattern.types.map((t, i) => (
            <SpecialTypeCard key={i} type={t} />
          ))}
        </div>
      )}

      {/* Methods (emphasis) */}
      {pattern.methods?.length > 0 && (
        <div className="space-y-3">
          {pattern.methods.map((m, i) => (
            <div key={i} className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-3 space-y-2">
              <div>
                <span className="text-sm font-semibold text-content dark:text-gray-100">
                  {m.method}
                </span>
                {m.methodEn && (
                  <span className="ml-2 text-xs text-content-tertiary dark:text-gray-400">
                    {m.methodEn}
                  </span>
                )}
              </div>
              {m.description && (
                <p className="text-xs text-content-secondary dark:text-gray-300">{m.description}</p>
              )}
              {m.usageNote && (
                <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-lg p-2.5 text-xs text-amber-700 dark:text-amber-300">
                  {m.usageNote}
                </div>
              )}
              {m.examples?.length > 0 && (
                <div className="space-y-2">
                  {m.examples.map((ex, j) => (
                    <div key={j} className="bg-white dark:bg-white/[0.03] rounded-lg p-2.5 space-y-1">
                      {ex.original && (
                        <p className="text-xs text-content-tertiary dark:text-gray-500 line-through">{ex.original}</p>
                      )}
                      <p className="text-sm text-content-secondary dark:text-gray-300">{ex.emphasized || ex.ellipted}</p>
                      <p className="text-xs text-content-tertiary dark:text-gray-500">{ex.meaning}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Mixed conditionals (subjunctiveMood) */}
      {pattern.mixedConditionals && (
        <Collapsible title="混合条件句" subtitle="Mixed Conditionals" defaultOpen={false}>
          <p className="text-sm text-content-secondary dark:text-gray-300 mb-2">
            {pattern.mixedConditionals.description}
          </p>
          {pattern.mixedConditionals.descriptionEn && (
            <p className="text-xs text-content-tertiary dark:text-gray-500 mb-2">
              {pattern.mixedConditionals.descriptionEn}
            </p>
          )}
          <div className="space-y-2">
            {pattern.mixedConditionals.examples?.map((ex, j) => (
              <ExampleCard key={j} sentence={ex.sentence} meaning={ex.meaning} />
            ))}
          </div>
        </Collapsible>
      )}
    </div>
  )
}

function SpecialTypeCard({ type }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors ${open ? 'border-amber-200 dark:border-amber-500/30' : 'border-gray-200 dark:border-white/[0.08]'}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
      >
        <div>
          <span className="text-sm font-semibold text-content dark:text-gray-100">{type.type}</span>
          {type.typeEn && (
            <span className="ml-2 text-xs text-content-tertiary dark:text-gray-400">{type.typeEn}</span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-content-tertiary dark:text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 animate-page-fade-in">
          {type.description && (
            <p className="text-sm text-content-secondary dark:text-gray-300">{type.description}</p>
          )}
          {/* Subjunctive mood: ifClause / mainClause */}
          {(type.ifClause || type.mainClause) && (
            <div className="space-y-2">
              {type.ifClause && (
                <div className="flex items-start gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded-md font-medium shrink-0 ${accent.badge}`}>条件从句</span>
                  <span className="text-content-secondary dark:text-gray-300">{type.ifClause}</span>
                </div>
              )}
              {type.mainClause && (
                <div className="flex items-start gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded-md font-medium shrink-0 ${accent.badge}`}>主句</span>
                  <span className="text-content-secondary dark:text-gray-300">{type.mainClause}</span>
                </div>
              )}
            </div>
          )}
          {/* Situations (inversion) */}
          {type.situations?.length > 0 && (
            <div className="space-y-3">
              {type.situations.map((s, j) => (
                <div key={j} className="bg-gray-50 dark:bg-white/[0.04] rounded-lg p-3 space-y-2">
                  <p className="text-xs font-medium text-content dark:text-gray-100">{s.situation}</p>
                  {s.examples?.length > 0 && (
                    <div className="space-y-1.5">
                      {s.examples.map((ex, k) => (
                        <div key={k}>
                          <p className="text-sm text-content-secondary dark:text-gray-300">{ex.sentence}</p>
                          <p className="text-xs text-content-tertiary dark:text-gray-500">{ex.meaning}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Ellipsis types with situations + examples */}
          {type.situations && typeof type.situations === 'string' && (
            <p className="text-xs text-content-tertiary dark:text-gray-500">{type.situations}</p>
          )}
          {/* Generic examples */}
          {type.examples?.length > 0 && (
            <div className="space-y-2">
              {type.examples.map((ex, j) => (
                <div key={j} className="bg-gray-50 dark:bg-white/[0.04] rounded-lg p-2.5 space-y-1">
                  {ex.original && (
                    <p className="text-xs text-content-tertiary dark:text-gray-500 line-through">{ex.original}</p>
                  )}
                  <p className="text-sm text-content-secondary dark:text-gray-300">
                    {ex.sentence || ex.emphasized || ex.ellipted}
                  </p>
                  <p className="text-xs text-content-tertiary dark:text-gray-500">{ex.meaning}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
