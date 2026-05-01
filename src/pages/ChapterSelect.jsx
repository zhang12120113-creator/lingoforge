import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadDictionary } from '../utils/loadDictionary.js';
import { dictionaryMeta } from '../dictionaries/meta.js';
import { unlockAudio } from '../utils/audioContext.js';

export default function ChapterSelect() {
  const { dictId } = useParams();
  const navigate = useNavigate();
  const [dict, setDict] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const meta = dictionaryMeta.find(d => d.id === dictId);

  useEffect(() => {
    setLoading(true); setError(null);
    loadDictionary(dictId).then(data => {
      if (!data.chapters || !Array.isArray(data.chapters)) {
        setError('词库数据格式错误'); setLoading(false); return;
      }
      setDict(data); setLoading(false);
    }).catch(err => { setError('加载失败'); setLoading(false); });
  }, [dictId]);

  // 首次用户点击时静默解锁音频，为后续打字页做准备
  useEffect(() => {
    const onFirstClick = () => {
      unlockAudio();
      document.removeEventListener('click', onFirstClick);
    };
    document.addEventListener('click', onFirstClick);
    return () => document.removeEventListener('click', onFirstClick);
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-background dark:bg-transparent flex items-center justify-center transition-colors duration-500">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary dark:border-primary-dark border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-content-tertiary dark:text-gray-400 text-sm">正在加载词库...</p>
      </div>
    </div>
  );
  if (error || !dict) return (
    <div className="min-h-screen bg-background dark:bg-transparent flex items-center justify-center transition-colors duration-500">
      <div className="text-center card p-8 shadow-lg dark:shadow-black/40 mx-4">
        <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <p className="text-indigo-500 dark:text-violet-400 mb-6 font-medium">{error}</p>
        <button onClick={() => navigate('/')} className="px-6 py-2.5 bg-primary hover:opacity-90 text-white rounded-button font-medium transition shadow-lg shadow-primary/20">返回首页</button>
      </div>
    </div>
  );

  const chapterCount = dict.chapters?.length || 0;
  const totalWords = dict.chapters?.reduce((sum, c) => sum + (c.words?.length || 0), 0) || 0;

  return (
    <div className="min-h-screen bg-background dark:bg-transparent p-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate('/')} className="text-content-tertiary dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark mb-8 flex items-center gap-2 text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.04] w-fit">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          <span className="hidden sm:inline">返回词库列表</span>
        </button>

        <div className="mb-8 glass-card rounded-card p-6 relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60" />
          <h1 className="text-3xl font-extrabold text-content dark:text-white mb-2">{meta?.name || dict.name}</h1>
          <p className="text-content-tertiary dark:text-gray-400">{meta?.description || dict.description}</p>
          <div className="flex gap-5 mt-4 text-sm">
            <div className="flex items-center gap-1.5 text-content-tertiary dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <span>共 {chapterCount} 章</span>
            </div>
            <div className="flex items-center gap-1.5 text-content-tertiary dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span>共 {totalWords} 词</span>
            </div>
          </div>
        </div>

        {chapterCount === 0 ? <div className="text-center py-16 text-content-tertiary dark:text-gray-500">暂无章节数据</div> : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {dict.chapters.map((chapter, index) => (
              <Link key={chapter.id} to={`/typing/${dictId}/${chapter.id}`} className="group card card-hover p-4 relative overflow-hidden animate-card-enter glow-border-subtle" style={{ animationDelay: `${index * 0.04}s` }}>
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm font-semibold text-content dark:text-white group-hover:text-primary transition-colors">{chapter.name}</div>
                <div className="text-xs text-content-tertiary dark:text-gray-500 mt-2 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  {chapter.words?.length || 0} 词
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
