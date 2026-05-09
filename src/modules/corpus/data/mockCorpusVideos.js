export const mockCorpusVideos = [
  {
    id: '001',
    title: 'How I Created OpenClaw, the Breakthrough AI Agent',
    subtitle: 'Peter Steinberger | TED',
    description: 'Peter Steinberger 在 TED 上分享他如何创造出突破性的 AI Agent OpenClaw。',
    speaker: 'Peter Steinberger',
    durationSec: 1056,
    videoUrl:
      'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/How%20I%20Created%20OpenClaw%2C%20the%20Breakthrough%20AI%20Agent%20%EF%BD%9C%20Peter%20Steinberger%20%EF%BD%9C%20TED.mp4',
    coverUrl: 'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/1.png',
    subtitleUrl: '/corpus/subtitles/001.json',
    tags: ['TED', '科技', 'AI'],
    category: '科技',
    year: 2026,
    vocabCount: 145,
    sentenceCount: 320,
    date: '2026-05-08',
    accent: '美国',
  },
]

export const totalCount = mockCorpusVideos.length

const allCategories = [...new Set(mockCorpusVideos.map((v) => v.category).filter(Boolean))].sort()
export const categories = ['全部', ...allCategories]

export const getVideoById = (id) =>
  mockCorpusVideos.find((v) => v.id === id)
