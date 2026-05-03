import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, XCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { ThemeWrapper, useReadingTheme } from '../components/ThemeWrapper';
import articles from '../data/articles.json';

const CATEGORY_MAP = {
  technology: '科技',
  culture: '文化',
  life: '生活',
  science: '科学',
  business: '商业',
};

const DIFFICULTY_MAP = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
};

export default function ReadingLandingPage() {
  const navigate = useNavigate();
  const { cardBg, mutedText, inputBg, isDark } = useReadingTheme();

  const featuredArticle = articles.find((a) => a.id === 'tech-ai-future');

  return (
    <ThemeWrapper>
      {/* Hero 区域 */}
      <section className="relative px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              阅读，是通往
            </span>
            <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>
              {' '}自由{' '}
            </span>
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              的捷径
            </span>
          </h1>
          <p className={`text-lg md:text-xl ${mutedText} mb-8 max-w-2xl mx-auto`}>
            拒绝机械式背单词。在真实文章中自然习得地道表达，培养英语思维。
          </p>
          <button
            onClick={() => navigate('/read/articles')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            开始阅读之旅 <ArrowRight size={20} />
          </button>
        </div>
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce ${mutedText}`}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* 对比区域 */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* 左侧：传统 */}
          <div
            className={`${isDark ? 'bg-red-900/20' : 'bg-red-50'} border-l-4 border-red-400 rounded-xl p-6 md:p-8`}
          >
            <h3
              className={`text-xl font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-red-300' : 'text-red-700'}`}
            >
              <XCircle size={24} /> 传统机械式记忆
            </h3>
            <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                枯燥的单词列表，背完就忘
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                脱离语境，只会认不会用
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                难以坚持，陷入反复放弃的循环
              </li>
            </ul>
          </div>

          {/* 右侧：Echogle */}
          <div
            className={`${isDark ? 'bg-blue-900/20' : 'bg-blue-50'} border-l-4 border-blue-500 rounded-xl p-6 md:p-8`}
          >
            <h3
              className={`text-xl font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}
            >
              <CheckCircle size={24} /> 阅读式学习
            </h3>
            <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-500 mt-1 shrink-0" />
                在真实文章中遇见生词，记忆更深刻
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-500 mt-1 shrink-0" />
                理解词汇的微妙用法，培养语感
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-500 mt-1 shrink-0" />
                阅读本身就是乐趣，更容易坚持
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 文章预览卡片 */}
      <section className="px-6 py-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">精选文章预览</h2>
        {featuredArticle && (
          <div
            onClick={() => navigate('/read/articles')}
            className={`${cardBg} rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 border`}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 ${isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'} text-xs rounded-full font-medium`}
                >
                  {CATEGORY_MAP[featuredArticle.category]}
                </span>
                <span className={`text-xs ${mutedText}`}>
                  {DIFFICULTY_MAP[featuredArticle.difficulty]} · {featuredArticle.readTime} min read
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{featuredArticle.title}</h3>
              <p className={`${mutedText} text-sm line-clamp-2`}>{featuredArticle.summary}</p>
            </div>
          </div>
        )}
      </section>

      {/* 三大特性 */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 特性 1 */}
          <div className="relative p-6">
            <span className="absolute top-0 left-0 text-7xl font-bold opacity-10 select-none">
              01
            </span>
            <BookOpen size={32} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">精选真实语料</h3>
            <p className={mutedText}>
              告别枯燥的教科书式文本。每一篇文章都精挑细选，无论是科技热点、文化评论还是生活随笔，确保内容有深度、有温度。
            </p>
          </div>

          {/* 特性 2 */}
          <div className="relative p-6">
            <span className="absolute top-0 left-0 text-7xl font-bold opacity-10 select-none">
              02
            </span>
            <div className={`${inputBg} rounded-lg p-4 mb-4 border`}>
              <div className="text-sm font-bold">Serendipity</div>
              <div className={`text-xs ${mutedText}`}>noun</div>
              <div className="text-sm mt-1">
                The occurrence of events by chance in a happy or beneficial way.
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">沉浸式单词本</h3>
            <p className={mutedText}>
              阅读中遇到生词？一键加入单词本。建立属于你的专属词库，持续沉淀阅读收获。
            </p>
          </div>

          {/* 特性 3 */}
          <div className="relative p-6">
            <span className="absolute top-0 left-0 text-7xl font-bold opacity-10 select-none">
              03
            </span>
            <div className="mb-4 h-16 flex items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-500 rounded-t"
                  style={{ height: `${h}%`, opacity: 0.3 + i * 0.1 }}
                />
              ))}
            </div>
            <h3 className="text-xl font-bold mb-3">学习数据追踪</h3>
            <p className={mutedText}>
              可视化你的阅读量、词汇积累和学习趋势，让每一点进步都清晰可见，持续激发学习动力。
            </p>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
        <button
          onClick={() => navigate('/read/articles')}
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
        >
          开始你的阅读之旅 <ArrowRight size={20} />
        </button>
      </section>
    </ThemeWrapper>
  );
}
