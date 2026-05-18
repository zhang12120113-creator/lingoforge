import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight, ChevronDown, BookOpen } from 'lucide-react'
import { partsOfSpeech } from '../data/grammarData.jsx'

const WORD_CLASS_COLORS = {
  '开放类': {
    badge: 'bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300',
    dot: 'bg-violet-500',
    border: 'border-violet-200 dark:border-violet-500/20',
    accent: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-500/10',
  },
  '封闭类': {
    badge: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300',
    dot: 'bg-emerald-500',
    border: 'border-emerald-200 dark:border-emerald-500/20',
    accent: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
  },
}

function getCategoryColor(category) {
  return WORD_CLASS_COLORS[category.wordClassType] || WORD_CLASS_COLORS['开放类']
}

/* ─── List View: all categories ─── */
function CategoryList({ navigate }) {
  const { overview, categories } = partsOfSpeech

  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] px-4 py-6 max-w-4xl mx-auto animate-page-fade-in pb-20">
      {/* Back button */}
      <button
        onClick={() => navigate('/reading/grammar')}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-content-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>返回语法体系</span>
      </button>

      {/* Overview */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300 text-xs font-medium mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          词性 Parts of Speech
        </div>
        <h1 className="text-2xl font-bold text-content dark:text-gray-100 mb-2">
          英语词性分类
        </h1>
        <p className="text-sm text-content-secondary dark:text-gray-300 leading-relaxed mb-4">
          {overview.definition}
        </p>

        {/* Key points */}
        <div className="space-y-2 mb-4">
          {overview.keyPoints.map((point, i) => (
            <div key={i} className="flex gap-2 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-400 shrink-0" />
              <span className="text-content-secondary dark:text-gray-300 leading-relaxed">{point}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-content-tertiary dark:text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {overview.totalCategories} 大词性类别
          </span>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <span>{categories.reduce((sum, c) => sum + c.subTypes.length, 0)} 个子类型</span>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((category, index) => {
          const colors = getCategoryColor(category)
          return (
            <button
              key={category.id}
              onClick={() => navigate(`/reading/grammar/parts-of-speech/${category.id}`)}
              className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] animate-card-enter bg-white dark:bg-white/[0.03] ${colors.border}`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Top row: abbreviation + badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-lg font-bold ${colors.accent}`}>
                  {category.abbreviation}
                </span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${colors.badge}`}>
                  {category.wordClassType}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-content dark:text-gray-100 mb-0.5">
                {category.name}
              </h3>
              <p className="text-xs text-content-tertiary dark:text-gray-400 mb-3">
                {category.nameEn}
              </p>

              {/* Sub types count */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-content-tertiary dark:text-gray-500">
                  {category.subTypes.length} 个子类型
                </span>
                <ChevronRight className="w-4 h-4 text-content-tertiary dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ─── SubType Card (expandable) ─── */
function SubTypeCard({ subType, index }) {
  const [expanded, setExpanded] = useState(index < 2)

  return (
    <div
      className="rounded-2xl border border-gray-200 dark:border-white/[0.06] overflow-hidden transition-all duration-200 animate-card-enter bg-white dark:bg-white/[0.03]"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Header - always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-base font-bold text-content dark:text-gray-100">
              {subType.name}
            </h3>
            <span className="text-xs text-content-tertiary dark:text-gray-500">
              {subType.nameEn}
            </span>
          </div>
          <p className="text-sm text-content-secondary dark:text-gray-300 leading-relaxed line-clamp-2">
            {subType.definition}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-content-tertiary dark:text-gray-500 shrink-0 ml-3 transition-transform duration-200 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1">
            {/* English definition */}
            <p className="text-sm text-content-tertiary dark:text-gray-500 italic mb-4">
              {subType.definitionEn}
            </p>

            {/* Examples */}
            {subType.examples && subType.examples.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-content-secondary dark:text-gray-400 uppercase tracking-wider mb-2.5">
                  示例 Examples
                </h4>
                <div className="space-y-2">
                  {subType.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-gray-50 dark:bg-white/[0.04] px-4 py-3"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                          {ex.word}
                        </span>
                        <span className="text-xs text-content-tertiary dark:text-gray-500">
                          {ex.meaning}
                        </span>
                      </div>
                      <p className="text-sm text-content-secondary dark:text-gray-300 leading-relaxed">
                        {ex.sentence}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Grammar notes */}
            {subType.grammarNotes && (
              <div className="rounded-xl bg-violet-50/60 dark:bg-violet-500/10 border-l-3 border-violet-400 dark:border-violet-500/60 px-4 py-3">
                <h4 className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-1">
                  语法要点
                </h4>
                <p className="text-sm text-content-secondary dark:text-gray-300 leading-relaxed">
                  {subType.grammarNotes}
                </p>
                {subType.grammarNotesEn && (
                  <p className="text-xs text-content-tertiary dark:text-gray-500 mt-1 italic">
                    {subType.grammarNotesEn}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Detail View: single category ─── */
function CategoryDetail({ id, navigate }) {
  const category = partsOfSpeech.categories.find((c) => c.id === id)

  if (!category) {
    return (
      <div className="min-h-[calc(100vh-3rem-3.5rem)] flex flex-col items-center justify-center px-6 text-center pb-20 animate-page-fade-in">
        <p className="text-content-secondary dark:text-gray-300 mb-4">没有找到该词性类别</p>
        <button
          onClick={() => navigate('/reading/grammar/parts-of-speech')}
          className="px-4 py-2 rounded-lg bg-primary text-white text-sm hover:opacity-90 transition-opacity"
        >
          返回列表
        </button>
      </div>
    )
  }

  const colors = getCategoryColor(category)

  return (
    <div className="min-h-[calc(100vh-3rem-3.5rem)] md:min-h-[calc(100vh-4rem-3.5rem)] px-4 py-6 max-w-4xl mx-auto animate-page-fade-in pb-20">
      {/* Back button */}
      <button
        onClick={() => navigate('/reading/grammar/parts-of-speech')}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-content-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>返回词性列表</span>
      </button>

      {/* Category header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-3xl font-bold ${colors.accent}`}>
            {category.abbreviation}
          </span>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
            {category.wordClassType} · {category.wordClassTypeEn}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-content dark:text-gray-100 mb-0.5">
          {category.name}
          <span className="text-lg text-content-tertiary dark:text-gray-400 font-normal ml-2">
            {category.nameEn}
          </span>
        </h1>
      </div>

      {/* Definition card */}
      <div className={`rounded-2xl border p-5 mb-3 ${colors.bg} ${colors.border}`}>
        <h4 className="text-xs font-semibold text-content-secondary dark:text-gray-400 uppercase tracking-wider mb-2">
          定义 Definition
        </h4>
        <p className="text-sm text-content dark:text-gray-100 leading-relaxed mb-2">
          {category.definition}
        </p>
        <p className="text-sm text-content-tertiary dark:text-gray-500 leading-relaxed italic">
          {category.definitionEn}
        </p>
      </div>

      {/* Function card */}
      <div className="rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-5 mb-6">
        <h4 className="text-xs font-semibold text-content-secondary dark:text-gray-400 uppercase tracking-wider mb-2">
          句法功能 Function
        </h4>
        <p className="text-sm text-content dark:text-gray-100 leading-relaxed mb-1">
          {category.function}
        </p>
        <p className="text-sm text-content-tertiary dark:text-gray-500 leading-relaxed italic">
          {category.functionEn}
        </p>
      </div>

      {/* Sub types heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-content dark:text-gray-100">
          子类型
        </h2>
        <span className="text-xs text-content-tertiary dark:text-gray-500">
          {category.subTypes.length} 个子类型
        </span>
      </div>

      {/* Sub types list */}
      <div className="space-y-3">
        {category.subTypes.map((subType, index) => (
          <SubTypeCard key={subType.id} subType={subType} index={index} />
        ))}
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function PartsOfSpeech() {
  const { id } = useParams()
  const navigate = useNavigate()

  if (id) {
    return <CategoryDetail id={id} navigate={navigate} />
  }

  return <CategoryList navigate={navigate} />
}
