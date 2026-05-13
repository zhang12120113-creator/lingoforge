export const mockCorpusVideos = [
  {
    id: '001',
    title: 'How I Created OpenClaw, the Breakthrough AI Agent',
    subtitle: 'Peter Steinberger | TED',
    description: 'Peter Steinberger 在 TED 上分享他如何创造出突破性的 AI Agent OpenClaw。',
    speaker: '',
    durationSec: 1056,
    videoUrl:
      'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/How%20I%20Created%20OpenClaw%2C%20the%20Breakthrough%20AI%20Agent%20%EF%BD%9C%20Peter%20Steinberger%20%EF%BD%9C%20TED%20%5B7rzYDM6vMtI%5D.mp4',
    coverUrl:
      'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/How%20I%20Created%20OpenClaw%2C%20the%20Breakthrough%20AI%20Agent%20%EF%BD%9C%20Peter%20Steinberger%20%EF%BD%9C%20TED.png',
    subtitleUrl: '/corpus/subtitles/001.json',
    tags: ['TED', '科技', 'AI'],
    category: '科技',
    year: 2026,
    vocabCount: 145,
    sentenceCount: 319,
    date: '2026-05-08',
    accent: '美国',
  },
  {
    id: '002',
    title: 'Learn English Through My Trip to London',
    subtitle: 'Comprehensible Input',
    description: '通过伦敦之旅学习英语，边旅行边积累生活词汇。',
    speaker: '',
    durationSec: 623,
    videoUrl:
      'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/Learn%20English%20Through%20My%20Trip%20to%20London%20%F0%9F%87%AC%F0%9F%87%A7%20%EF%BD%9C%20Comprehensible%20Input%20%5B52t241OQ7Ec%5D.mp4',
    coverUrl:
      'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/Learn%20English%20Through%20My%20Trip%20to%20London%20%F0%9F%87%AC%F0%9F%87%A7%20%EF%BD%9C%20Comprehensible%20Input.png',
    subtitleUrl: '/corpus/subtitles/002.json',
    tags: ['旅行', '英国', '伦敦'],
    category: '旅行',
    year: 2026,
    vocabCount: 120,
    sentenceCount: 204,
    date: '2026-05-13',
    accent: '英国',
  },
]

export const totalCount = mockCorpusVideos.length

const allCategories = [...new Set(mockCorpusVideos.map((v) => v.category).filter(Boolean))].sort()
export const categories = ['全部', ...allCategories]

export const getVideoById = (id) =>
  mockCorpusVideos.find((v) => v.id === id)
