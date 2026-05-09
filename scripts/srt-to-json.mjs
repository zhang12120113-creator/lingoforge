#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function tsToSec(ts) {
  const [hms, ms] = ts.trim().replace(',', '.').split('.')
  const [h, m, s] = hms.split(':').map(Number)
  const frac = ms ? Number('0.' + ms) : 0
  return h * 3600 + m * 60 + s + frac
}

function parseSrt(raw) {
  const text = raw.replace(/^﻿/, '').replace(/\r\n/g, '\n').trim()
  const blocks = text.split(/\n\s*\n/)
  const cues = []

  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean)
    if (lines.length < 2) continue

    let timeIdx = 0
    if (/^\d+$/.test(lines[0])) timeIdx = 1
    const timeLine = lines[timeIdx]
    if (!timeLine || !timeLine.includes('-->')) continue

    const [startStr, endStr] = timeLine.split('-->')
    const start = tsToSec(startStr)
    const end = tsToSec(endStr)
    const text = lines.slice(timeIdx + 1).join(' ').trim()
    if (!text) continue

    cues.push({
      id: cues.length + 1,
      start,
      end,
      en: '',
      zh: text,
    })
  }

  for (let i = 0; i < cues.length - 1; i++) {
    if (cues[i].end > cues[i + 1].start - 0.002) {
      cues[i].end = cues[i + 1].start
    }
  }

  return cues
}

const [, , inputPath, outputId] = process.argv
if (!inputPath || !outputId) {
  console.error('用法: node scripts/srt-to-json.mjs <input.srt> <id>')
  console.error('示例: node scripts/srt-to-json.mjs "C:/path/to/sub.srt" 001')
  process.exit(1)
}

if (!fs.existsSync(inputPath)) {
  console.error(`❌ 输入文件不存在: ${inputPath}`)
  process.exit(1)
}

const raw = fs.readFileSync(inputPath, 'utf-8')
const cues = parseSrt(raw)

const outDir = path.join(__dirname, '..', 'public', 'corpus', 'subtitles')
fs.mkdirSync(outDir, { recursive: true })
const outPath = path.join(outDir, `${outputId}.json`)
fs.writeFileSync(outPath, JSON.stringify(cues, null, 2), 'utf-8')

console.log(`✅ 已生成 public/corpus/subtitles/${outputId}.json，共 ${cues.length} 句`)
