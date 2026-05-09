#!/usr/bin/env node
// 给字幕 JSON 的空 en 字段填占位英文，仅用于测试点词流程。
//
// 用法:
//   node scripts/fill-test-subtitles.mjs <id>            # 填充
//   node scripts/fill-test-subtitles.mjs <id> --revert   # 还原（从 .bak）
//
// 示例:
//   node scripts/fill-test-subtitles.mjs 001
//   node scripts/fill-test-subtitles.mjs 001 --revert
//
// 注意：填入的英文是合成的占位文本，不是真实演讲转录，仅供 UI 验证使用。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const id = process.argv[2]
const revert = process.argv.includes('--revert')

if (!id) {
  console.error('用法: node scripts/fill-test-subtitles.mjs <id> [--revert]')
  process.exit(1)
}

const target = path.join(__dirname, '..', 'public', 'corpus', 'subtitles', `${id}.json`)
const backup = `${target}.bak`

if (revert) {
  if (!fs.existsSync(backup)) {
    console.error(`❌ 未找到备份: ${backup}`)
    process.exit(1)
  }
  fs.copyFileSync(backup, target)
  fs.unlinkSync(backup)
  console.log(`✅ 已从 ${path.basename(backup)} 还原 ${path.basename(target)}`)
  process.exit(0)
}

if (!fs.existsSync(target)) {
  console.error(`❌ 未找到字幕文件: ${target}`)
  process.exit(1)
}

// 30 句占位英文：常见词汇 + AI/演讲主题，便于点词测试
const POOL = [
  'Welcome to this presentation about modern technology.',
  'Today we will explore how systems learn from data.',
  'I started writing software when I was fourteen.',
  'Building applications felt like playing a game.',
  'The development process taught me patience and focus.',
  'After many years I founded my own company.',
  'We worked hard to create something useful.',
  'Then suddenly artificial intelligence changed everything.',
  'The world of programming was never the same.',
  'New tools allowed us to move much faster.',
  'I noticed that simple agents could solve complex problems.',
  'They could read documents and write working code.',
  'But the existing solutions had clear limitations.',
  'Most agents were expensive and difficult to control.',
  'I wanted to build something open and flexible.',
  'The idea was simple but powerful at the same time.',
  'A small team can outperform a large organization.',
  'We focused on speed quality and developer experience.',
  'Every decision needed to serve the end user.',
  'The first version took only three weeks to ship.',
  'Users started sharing it with their colleagues immediately.',
  'Within a month thousands of developers had joined.',
  'Feedback came in quickly and we kept improving.',
  'Some features became popular faster than expected.',
  'Others required several rounds of careful refinement.',
  'I learned that listening matters more than talking.',
  'Good products come from understanding real problems.',
  'Technology should make difficult things feel easy.',
  'The future belongs to those who build thoughtfully.',
  'Thank you for your attention and curiosity today.',
]

const data = JSON.parse(fs.readFileSync(target, 'utf-8'))

if (!data.every((d) => !d.en)) {
  console.error('❌ 已有部分条目包含 en 内容；为安全起见请先 --revert 或人工处理。')
  process.exit(1)
}

if (!fs.existsSync(backup)) {
  fs.copyFileSync(target, backup)
  console.log(`📝 已备份原文件 → ${path.basename(backup)}`)
}

const filled = data.map((cue, idx) => ({
  ...cue,
  en: POOL[idx % POOL.length],
}))

fs.writeFileSync(target, JSON.stringify(filled, null, 2), 'utf-8')
console.log(`✅ 已为 ${path.basename(target)} 的 ${filled.length} 条字幕填入占位英文`)
console.log(`   还原: node scripts/fill-test-subtitles.mjs ${id} --revert`)
