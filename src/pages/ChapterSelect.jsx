import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadDictionary } from '../utils/loadDictionary.js';
import { dictionaryMeta } from '../dictionaries/meta.js';

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

  if (loading) return <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center"><div className="animate-spin w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full" /></div>;
  if (error || !dict) return <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center"><div className="text-center"><p className="text-red-500 mb-4">{error}</p><button onClick={() => navigate('/')} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">返回首页</button></div></div>;

  const chapterCount = dict.chapters?.length || 0;
  const totalWords = dict.chapters?.reduce((sum, c) => sum + (c.words?.length || 0), 0) || 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate('/')} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 flex items-center gap-2 text-sm">← 返回词库列表</button>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{meta?.name || dict.name}</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">{meta?.description || dict.description}</p>
        <div className="flex gap-4 mt-3 text-sm text-gray-400"><span>共 {chapterCount} 章</span><span>共 {totalWords} 词</span></div>
        {chapterCount === 0 ? <div className="text-center py-12 text-gray-400">暂无章节数据</div> : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-6">
            {dict.chapters.map((chapter, index) => (
              <Link key={chapter.id} to={`/typing/${dictId}/${chapter.id}`} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 hover:shadow-md transition group">
                <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600">{chapter.name}</div>
                <div className="text-xs text-gray-400 mt-2">{chapter.words?.length || 0} 词</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
