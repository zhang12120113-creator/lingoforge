import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Type,
  Star,
  Volume2,
  ChevronLeft,
  ChevronRight,
  List,
} from 'lucide-react';
import { ThemeWrapper, useReadingTheme } from '../components/ThemeWrapper';
import WordPopup from '../components/WordPopup';
import articles from '../data/articles.json';
import { lookupWord } from '../utils/wordIndex';
import * as storage from '../utils/readingStorage';
import { useNotebook } from '../hooks/useReadingStorage';

export default function ArticleReadPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cardBg, mutedText, inputBg, isDark } = useReadingTheme();
  const { notebook, add } = useNotebook();

  const article = articles.find((a) => a.id === id);
  const [showTranslation, setShowTranslation] = useState(true);
  const [fontSize, setFontSize] = useState(18);
  const [popup, setPopup] = useState(null);
  const [readTriggered, setReadTriggered] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!article || readTriggered) return;

    const timer = setTimeout(() => {
      storage.markArticleRead(article.id);
      const wordCount = article.paragraphs.reduce((sum, p) => sum + p.en.split(/\s+/).length, 0);
      storage.recordDaily(wordCount, 0);
      storage.updateStatsSummary();
      setReadTriggered(true);
    }, article.readTime * 60 * 1000);

    return () => clearTimeout(timer);
  }, [article, readTriggered]);

  useEffect(() => {
    if (!article || readTriggered) return;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        storage.markArticleRead(article.id);
        storage.updateStatsSummary();
        setReadTriggered(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article, readTriggered]);

  const handleWordClick = useCallback(
    (e, rawWord, paragraphId) => {
      const cleanWord = rawWord.replace(/[^a-zA-Z]/g, '');
      if (!cleanWord || cleanWord.length < 2) return;

      const vocab = lookupWord(article.id, cleanWord);
      const rect = e.target.getBoundingClientRect();

      setPopup({
        word: cleanWord,
        vocab,
        position: {
          top: rect.bottom + 8 + window.scrollY,
          left: Math.max(10, rect.left + window.scrollX - 100),
        },
        paragraphId,
      });
    },
    [article]
  );

  const handleAddToNotebook = useCallback(() => {
    if (!popup || !popup.vocab) return;
    const item = {
      word: popup.vocab.word,
      phonetic: popup.vocab.phonetic,
      pos: popup.vocab.pos,
      definition: popup.vocab.definition,
      articleId: article.id,
      paragraphId: popup.paragraphId,
      addedAt: new Date().toISOString(),
      mastered: false,
    };
    add(item);
    storage.updateStatsSummary();
    setPopup(null);
  }, [popup, article, add]);

  const isInNotebook = (word) => notebook.some((n) => n.word === word);

  const handleQuickAdd = (vocab) => {
    const item = {
      word: vocab.word,
      phonetic: vocab.phonetic,
      pos: vocab.pos,
      definition: vocab.definition,
      articleId: article.id,
      paragraphId: 'quick',
      addedAt: new Date().toISOString(),
      mastered: false,
    };
    add(item);
    storage.updateStatsSummary();
  };

  if (!article) {
    return (
      <ThemeWrapper>
        <div className="flex items-center justify-center h-screen">文章不存在</div>
      </ThemeWrapper>
    );
  }

  const articleIndex = articles.findIndex((a) => a.id === id);
  const prevArticle = articles[articleIndex - 1];
  const nextArticle = articles[articleIndex + 1];

  return (
    <ThemeWrapper>
      <div className={`sticky top-0 z-40 ${cardBg} border-b backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/read/articles')}
            className={`flex items-center gap-1 text-sm ${mutedText} hover:text-blue-500 transition-colors`}
          >
            <ArrowLeft size={18} /> 返回
          </button>
          <h1 className="font-medium text-sm truncate max-w-[200px] md:max-w-md">{article.title}</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className={`p-2 rounded-lg ${inputBg} hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors`}
              title={showTranslation ? '隐藏译文' : '显示译文'}
            >
              {showTranslation ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
            <div className={`flex items-center gap-1 ${inputBg} rounded-lg px-2 py-1`}>
              <Type size={14} className={mutedText} />
              <button
                onClick={() => setFontSize((s) => Math.max(14, s - 2))}
                className="px-1 hover:text-blue-500"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize((s) => Math.min(24, s + 2))}
                className="px-1 hover:text-blue-500"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 lg:max-w-[60%]" ref={contentRef}>
          <div className="mb-6">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full aspect-video object-cover rounded-xl mb-4"
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{article.title}</h1>
            <div className={`flex items-center gap-3 text-sm ${mutedText}`}>
              <span>{article.source}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>

          <div style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}>
            {article.paragraphs.map((para) => (
              <div key={para.id} className="mb-8">
                <p className="mb-2">
                  {para.en.split(/(\s+|[.,;!?()"'])/).map((token, idx) => {
                    const clean = token.replace(/[^a-zA-Z]/g, '').toLowerCase();
                    const isKey = para.keyWords.some((k) => k.toLowerCase() === clean);
                    return (
                      <span
                        key={idx}
                        onClick={(e) => handleWordClick(e, token, para.id)}
                        className={`cursor-pointer rounded px-0.5 transition-colors hover:bg-yellow-100 dark:hover:bg-yellow-900/40 ${
                          isKey ? 'border-b-2 border-blue-400 dark:border-blue-500' : ''
                        }`}
                      >
                        {token}
                      </span>
                    );
                  })}
                </p>
                {showTranslation && (
                  <p className={`pl-4 border-l-2 border-gray-300 dark:border-gray-600 text-base ${mutedText}`}>
                    {para.zh}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12 pt-6 border-t dark:border-gray-700">
            <button
              onClick={() => prevArticle && navigate(`/read/article/${prevArticle.id}`)}
              disabled={!prevArticle}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg ${inputBg} ${
                prevArticle ? 'hover:bg-blue-100 dark:hover:bg-blue-900/30' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={16} /> 上一篇
            </button>
            <button
              onClick={() => navigate('/read/articles')}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg ${inputBg} hover:bg-blue-100 dark:hover:bg-blue-900/30`}
            >
              <List size={16} /> 文章列表
            </button>
            <button
              onClick={() => nextArticle && navigate(`/read/article/${nextArticle.id}`)}
              disabled={!nextArticle}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg ${inputBg} ${
                nextArticle ? 'hover:bg-blue-100 dark:hover:bg-blue-900/30' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              下一篇 <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="lg:w-[35%] shrink-0">
          <div className={`sticky top-20 ${cardBg} rounded-xl border p-4`}>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Star size={18} className="text-yellow-500" />
              本文重点词汇
            </h3>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {article.vocabulary.map((vocab) => {
                const added = isInNotebook(vocab.word);
                return (
                  <div key={vocab.word} className={`p-3 rounded-lg ${inputBg}`}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <span className="font-bold">{vocab.word}</span>
                        <span className={`text-xs ml-2 ${mutedText}`}>{vocab.phonetic}</span>
                      </div>
                      <button
                        onClick={() => (added ? null : handleQuickAdd(vocab))}
                        className={`text-xs px-2 py-1 rounded-full transition-colors ${
                          added
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        }`}
                      >
                        {added ? '已收藏' : '收藏'}
                      </button>
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">{vocab.pos}</div>
                    <p className="text-sm mb-1">{vocab.definition}</p>
                    <p className={`text-xs italic ${mutedText}`}>{vocab.example}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {popup && (
        <WordPopup
          word={popup.word}
          vocab={popup.vocab}
          position={popup.position}
          onClose={() => setPopup(null)}
          onAddToNotebook={handleAddToNotebook}
          isInNotebook={isInNotebook(popup.word)}
        />
      )}
    </ThemeWrapper>
  );
}
