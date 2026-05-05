// 检查阅读模块文章是否有重复
import { mockArticles } from './src/modules/reading/data/mockArticles.js'

console.log(`总文章数: ${mockArticles.length}\n`)

// 1. 检查 ID 重复
const idMap = new Map()
const dupIds = []
for (const a of mockArticles) {
  if (idMap.has(a.id)) {
    dupIds.push({ id: a.id, titles: [idMap.get(a.id).title, a.title] })
  } else {
    idMap.set(a.id, a)
  }
}

console.log('========== 1. ID 重复检查 ==========')
if (dupIds.length === 0) {
  console.log('✓ 无重复 ID')
} else {
  console.log(`✗ 发现 ${dupIds.length} 个重复 ID:`)
  dupIds.forEach(d => console.log(`  - ${d.id}: ${d.titles.join(' | ')}`))
}

// 2. 检查标题重复
const titleMap = new Map()
const dupTitles = []
for (const a of mockArticles) {
  const key = (a.title || '').trim()
  if (!key) continue
  if (!titleMap.has(key)) titleMap.set(key, [])
  titleMap.get(key).push(a)
}
for (const [t, arr] of titleMap.entries()) {
  if (arr.length > 1) dupTitles.push({ title: t, items: arr })
}

console.log('\n========== 2. 标题重复检查 ==========')
if (dupTitles.length === 0) {
  console.log('✓ 无重复标题')
} else {
  console.log(`⚠ 发现 ${dupTitles.length} 个重复标题:`)
  dupTitles.forEach(d => {
    console.log(`  - "${d.title}" (${d.items.length} 次)`)
    d.items.forEach(it => console.log(`      [${it.id}] ${it.level || '?'}/${it.year || '?'} category=${it.category}`))
  })
}

// 3. 检查内容(英文段落首句)是否重复 — 跳过 "Questions X to Y are based on..." 引导句
function getFirstEn(a) {
  if (!a.paragraphs || !a.paragraphs.length) return ''
  for (const p of a.paragraphs) {
    const en = (p.en || '').trim()
    if (!en) continue
    if (/^questions?\s+\d+\s+to\s+\d+\s+are\s+based\s+on/i.test(en)) continue
    return en.slice(0, 200).toLowerCase()
  }
  return ''
}
const contentMap = new Map()
const dupContent = []
for (const a of mockArticles) {
  const key = getFirstEn(a)
  if (!key) continue
  if (!contentMap.has(key)) contentMap.set(key, [])
  contentMap.get(key).push(a)
}
for (const [k, arr] of contentMap.entries()) {
  if (arr.length > 1) dupContent.push({ snippet: k.slice(0, 80), items: arr })
}

console.log('\n========== 3. 内容重复检查 (按首段英文前 200 字符) ==========')
if (dupContent.length === 0) {
  console.log('✓ 无重复内容')
} else {
  console.log(`⚠ 发现 ${dupContent.length} 组重复内容:`)
  dupContent.forEach(d => {
    console.log(`  - "${d.snippet}..." (${d.items.length} 次)`)
    d.items.forEach(it => console.log(`      [${it.id}] "${it.title}" ${it.level || '?'}/${it.year || '?'}`))
  })
}

// 4. 全文 hash 重复检查
function getFullEn(a) {
  if (!a.paragraphs || !a.paragraphs.length) return ''
  return a.paragraphs.map(p => (p.en || '').trim()).join('\n').toLowerCase()
}
const fullMap = new Map()
const dupFull = []
for (const a of mockArticles) {
  const key = getFullEn(a)
  if (!key) continue
  if (!fullMap.has(key)) fullMap.set(key, [])
  fullMap.get(key).push(a)
}
for (const [k, arr] of fullMap.entries()) {
  if (arr.length > 1) dupFull.push({ items: arr })
}

console.log('\n========== 4. 全文完全相同检查 ==========')
if (dupFull.length === 0) {
  console.log('✓ 无完全相同的全文')
} else {
  console.log(`✗ 发现 ${dupFull.length} 组全文完全相同:`)
  dupFull.forEach(d => {
    console.log(`  -`)
    d.items.forEach(it => console.log(`      [${it.id}] "${it.title}"`))
  })
}

console.log('\n========== 总结 ==========')
console.log(`ID 重复: ${dupIds.length}`)
console.log(`标题重复组: ${dupTitles.length}`)
console.log(`首段重复组: ${dupContent.length}`)
console.log(`全文重复组: ${dupFull.length}`)
