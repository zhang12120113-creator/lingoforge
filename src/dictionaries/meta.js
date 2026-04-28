export const dictionaryMeta = [
  { id: 'junior', name: '初中英语词汇', category: '初中英语', description: '初中阶段必学英语词汇', totalChapters: 57, totalWords: 1418, color: 'bg-green-400' },
  { id: 'zhongkao', name: '中考英语核心词汇', category: '初中英语', description: '中考英语高频核心词汇', totalChapters: 57, totalWords: 1418, color: 'bg-emerald-500' },
  { id: 'senior', name: '高中英语词汇', category: '高中英语', description: '高中阶段必学英语词汇', totalChapters: 147, totalWords: 3665, color: 'bg-teal-500' },
  { id: 'gaokao', name: '高考英语核心词汇', category: '高中英语', description: '高考英语高频核心词汇', totalChapters: 147, totalWords: 3665, color: 'bg-cyan-500' },
  { id: 'cet4', name: '英语4级', category: '英语4级', description: '大学英语四级大纲核心词汇', totalChapters: 182, totalWords: 4544, color: 'bg-blue-500' },
  { id: 'cet4freq', name: '英语4级高频', category: '英语4级', description: 'CET-4 高频必考词汇', totalChapters: 60, totalWords: 1500, color: 'bg-indigo-400' },
  { id: 'cet6', name: '英语6级', category: '英语6级', description: '大学英语六级大纲核心词汇', totalChapters: 160, totalWords: 3991, color: 'bg-indigo-500' },
  { id: 'cet6freq', name: '英语6级高频', category: '英语6级', description: 'CET-6 高频必考词汇', totalChapters: 60, totalWords: 1500, color: 'bg-violet-500' },
  { id: 'tem4', name: '英语专四', category: '英语专四', description: '英语专业四级考试核心词汇', totalChapters: 161, totalWords: 4025, color: 'bg-purple-500' },
  { id: 'tem8', name: '英语专八', category: '英语专八', description: '英语专业八级考试核心词汇', totalChapters: 488, totalWords: 12197, color: 'bg-fuchsia-500' },
  { id: 'ielts', name: '雅思词汇', category: '雅思', description: '雅思考试核心词汇', totalChapters: 138, totalWords: 3427, color: 'bg-pink-500' },
  { id: 'toefl', name: '托福词汇', category: '托福', description: '托福考试核心词汇', totalChapters: 369, totalWords: 9212, color: 'bg-rose-500' },
  { id: 'sat', name: 'SAT 词汇', category: 'SAT', description: 'SAT 考试核心词汇', totalChapters: 177, totalWords: 4423, color: 'bg-orange-500' },
  { id: 'postgraduate', name: '考研词汇', category: '考研', description: '考研英语核心词汇', totalChapters: 182, totalWords: 4533, color: 'bg-blue-600' },
  { id: 'programmer', name: '程序员常见词汇', category: '程序员英语', description: '程序员工作中高频使用的英语单词', totalChapters: 67, totalWords: 1665, color: 'bg-yellow-500' }
];

export const categories = ['初中英语', '高中英语', '英语4级', '英语6级', '英语专四', '英语专八', '雅思', '托福', 'SAT', '考研', '程序员英语'];

export const getMeta = (id) => dictionaryMeta.find((d) => d.id === id);
