export const mockCorpusVideos = [
  {
    id: '1',
    title: 'How I Created OpenClaw, the Breakthrough AI Agent | Peter Steinberger | TED',
    subtitle: 'TED 演讲：创建突破性 AI 智能体的故事',
    description: 'Peter Steinberger 分享他创建 OpenClaw 的经历——一个迅速走红、改变人们对 AI 认知的开源项目。从精疲力竭到重获激情，他讲述了 AI 智能体如何让非程序员也能成为创造者。',
    speaker: 'Peter Steinberger',
    category: '科技',
    tags: ['TED', 'AI', '演讲'],
    accent: '美音',
    durationSec: 1055,
    sentenceCount: 320,
    vocabCount: 320,
    date: '2026-05-15',
    videoUrl: 'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/HowICreatedOpenClaw%2CtheBreakthroughAIAgentPeterSteinbergerTED.mp4',
    coverUrl: 'https://lingoforge-videos.oss-cn-shenzhen.aliyuncs.com/corpus/HowICreatedOpenClaw%2CtheBreakthroughAIAgentPeterSteinbergerTED.png',
    subtitleUrl: '/corpus/subtitles/001.json',
  },
]


export const totalCount = mockCorpusVideos.length

const allCategories = [...new Set(mockCorpusVideos.map((v) => v.category).filter(Boolean))].sort()
export const categories = ['全部', ...allCategories]

export const getVideoById = (id) =>
  mockCorpusVideos.find((v) => v.id === id)
