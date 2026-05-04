import { getErrorBookCount, loadErrorBookAsDictionary } from '../utils/errorBook.js';
import { getReadingWordBookCount, loadReadingWordBookAsDictionary } from '../utils/readingWordBook.js';

const warmColors = [
  'warm-coral',
  'warm-amber',
  'warm-rose',
  'warm-sage',
  'warm-sky',
  'warm-violet',
  'warm-slate',
  'warm-teal',
];

export const dictionaryMeta = [
  { id: 'junior', name: '初中英语词汇', category: '初中英语', description: '初中阶段必学英语词汇', totalChapters: 57, totalWords: 1418, color: warmColors[0] },
  { id: 'zhongkao', name: '中考英语核心词汇', category: '初中英语', description: '中考英语高频核心词汇', totalChapters: 32, totalWords: 800, color: warmColors[1] },
  { id: 'senior', name: '高中英语词汇', category: '高中英语', description: '高中阶段必学英语词汇', totalChapters: 162, totalWords: 4027, color: warmColors[2] },
  { id: 'gaokao', name: '高考英语核心词汇', category: '高中英语', description: '高考英语高频核心词汇', totalChapters: 28, totalWords: 689, color: warmColors[3] },
  { id: 'cet4', name: '英语4级', category: '英语4级', description: '大学英语四级大纲核心词汇', totalChapters: 182, totalWords: 4543, color: warmColors[4] },
  { id: 'cet4freq', name: '英语4级高频', category: '英语4级', description: 'CET-4 高频必考词汇', totalChapters: 60, totalWords: 1500, color: warmColors[5] },
  { id: 'cet6', name: '英语6级', category: '英语6级', description: '大学英语六级大纲核心词汇', totalChapters: 267, totalWords: 6661, color: warmColors[6] },
  { id: 'cet6freq', name: '英语6级高频', category: '英语6级', description: 'CET-6 高频必考词汇', totalChapters: 60, totalWords: 1500, color: warmColors[7] },
  { id: 'tem4', name: '英语专四', category: '英语专四', description: '英语专业四级考试核心词汇', totalChapters: 253, totalWords: 6307, color: warmColors[0] },
  { id: 'tem8', name: '英语专八', category: '英语专八', description: '英语专业八级考试核心词汇', totalChapters: 488, totalWords: 12197, color: warmColors[1] },
  { id: 'ielts', name: '雅思词汇', category: '雅思', description: '雅思考试核心词汇', totalChapters: 263, totalWords: 6554, color: warmColors[2] },
  { id: 'toefl', name: '托福词汇', category: '托福', description: '托福考试核心词汇', totalChapters: 415, totalWords: 10368, color: warmColors[3] },
  { id: 'sat', name: 'SAT 词汇', category: 'SAT', description: 'SAT 考试核心词汇', totalChapters: 177, totalWords: 4423, color: warmColors[4] },
  { id: 'postgraduate', name: '考研词汇', category: '考研', description: '考研英语核心词汇', totalChapters: 228, totalWords: 5698, color: warmColors[5] },
  { id: 'programmer', name: '程序员常见词汇', category: '程序员英语', description: '程序员工作中高频使用的英语单词', totalChapters: 67, totalWords: 1665, color: warmColors[6] }
];

export const categories = ['初中英语', '高中英语', '英语4级', '英语6级', '英语专四', '英语专八', '雅思', '托福', 'SAT', '考研', '程序员英语'];

export const getMeta = (id) => {
  if (id === 'error-book') {
    const dict = loadErrorBookAsDictionary();
    const count = getErrorBookCount();
    return {
      id: 'error-book',
      name: '错题本',
      category: '我的',
      description: '专属错题练习',
      totalChapters: dict.chapters?.length || 0,
      totalWords: count,
      color: 'warm-rose',
    };
  }
  if (id === 'reading-word-book') {
    const dict = loadReadingWordBookAsDictionary();
    const count = getReadingWordBookCount();
    return {
      id: 'reading-word-book',
      name: '阅读词本',
      category: '我的',
      description: '语境中积累的词汇',
      totalChapters: dict.chapters?.length || 0,
      totalWords: count,
      color: 'warm-violet',
    };
  }
  return dictionaryMeta.find((d) => d.id === id);
};
