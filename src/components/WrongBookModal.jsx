import { useState, useEffect } from 'react';

export default function WrongBookModal({ onClose }) {
  const [wrongWords, setWrongWords] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('typingword_wrong');
      if (saved) setWrongWords(JSON.parse(saved).words || []);
    } catch {}
  }, []);

  const removeWord = (wordName) => {
    const next = wrongWords.filter(w => w.name !== wordName);
    setWrongWords(next);
    localStorage.setItem('typingword_wrong', JSON.stringify({ words: next }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl max-h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold dark:text-white">📕 错题本</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        {wrongWords.length === 0 ? (
          <div className="text-center py-8 text-gray-400">暂无错题</div>
        ) : (
          <div className="overflow-y-auto flex-1 space-y-2">
            {wrongWords.map(word => (
              <div key={word.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="font-medium dark:text-white">{word.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{word.trans?.join('；')}</div>
                </div>
                <button onClick={() => removeWord(word.name)} className="text-red-500 hover:text-red-700 text-sm">删除</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
