import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dictDir = path.join(__dirname, '../src/dictionaries');

const dictMap = {
  '初中英语词汇': 'junior.json',
  '中考英语核心词汇': 'zhongkao.json',
  '高中英语词汇': 'senior.json',
  '高考英语核心词汇': 'gaokao.json',
  '英语4级': 'cet4.json',
  '英语4级高频': 'cet4freq.json',
  '英语6级': 'cet6.json',
  '英语6级高频': 'cet6freq.json',
  '英语专四': 'tem4.json',
  '英语专八': 'tem8.json',
  '雅思词汇': 'ielts.json',
  '托福词汇': 'toefl.json',
  'SAT词汇': 'sat.json',
  '考研词汇': 'postgraduate.json',
  '程序员常见词汇': 'programmer.json',
};

function loadDict(name) {
  const file = path.join(dictDir, dictMap[name]);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf-8'));
  return null;
}

function getAllWords(data) {
  if (!data || !Array.isArray(data.chapters)) return [];
  const words = [];
  for (const ch of data.chapters) {
    if (Array.isArray(ch.words)) words.push(...ch.words);
  }
  return words;
}

function analyze(name) {
  const data = loadDict(name);
  if (!data) return console.log(`❌ 未找到: ${name}`), null;

  const words = getAllWords(data);
  const total = words.length;
  const names = words.map(w => w.name?.toLowerCase().trim()).filter(Boolean);
  const unique = new Set(names);
  const duplicates = total - unique.size;
  const emptyTrans = words.filter(w => !w.trans || (Array.isArray(w.trans) ? w.trans.length === 0 : String(w.trans).trim() === '')).length;
  const tooLong = words.filter(w => w.name?.length > 25).length;
  const hasSpaceLong = words.filter(w => w.name?.includes(' ') && w.name.length > 15).length;

  console.log(`\n📊 ${name}`);
  console.log(`   总词条: ${total} | 唯一: ${unique.size} | 重复: ${duplicates || '✅'}`);
  console.log(`   空释义: ${emptyTrans || '✅'} | 超长词: ${tooLong || '✅'} | 长短语: ${hasSpaceLong || '✅'}`);

  return { name, words, uniqueNames: [...unique], totalChapters: data.totalChapters };
}

// 执行诊断
const results = [];
for (const name of Object.keys(dictMap)) {
  const r = analyze(name);
  if (r) results.push(r);
}

// 交叉重复检测
console.log(`\n🔍 交叉重复检测（专四 vs 专八 vs 六级）`);
const zhuansi = results.find(r => r.name === '英语专四');
const zhuansiba = results.find(r => r.name === '英语专八');
const cet6 = results.find(r => r.name === '英语6级');

if (zhuansi && zhuansiba) {
  const set = new Set(zhuansiba.uniqueNames);
  const overlap = zhuansi.uniqueNames.filter(w => set.has(w));
  console.log(`   专四 ∩ 专八: ${overlap.length} 词 (${(overlap.length/zhuansi.uniqueNames.length*100).toFixed(1)}%)`);
  if (overlap.length > 0) console.log(`   示例: ${overlap.slice(0, 5).join(', ')}`);
}

if (zhuansi && cet6) {
  const set = new Set(cet6.uniqueNames);
  const overlap = zhuansi.uniqueNames.filter(w => set.has(w));
  console.log(`   专四 ∩ 六级: ${overlap.length} 词 (${(overlap.length/zhuansi.uniqueNames.length*100).toFixed(1)}%)`);
}

if (zhuansiba && cet6) {
  const set = new Set(cet6.uniqueNames);
  const overlap = zhuansiba.uniqueNames.filter(w => set.has(w));
  console.log(`   专八 ∩ 六级: ${overlap.length} 词 (${(overlap.length/zhuansiba.uniqueNames.length*100).toFixed(1)}%)`);
}

// 专四专项：列出疑似短语
if (zhuansi) {
  const phrases = zhuansi.words.filter(w => (w.name?.length > 20) || (w.name?.includes(' ') && w.name.length > 12));
  console.log(`\n📋 专四疑似短语 (${phrases.length}个，展示前15):`);
  phrases.slice(0, 15).forEach(w => console.log(`   - "${w.name}"`));
}

// 专八专项：列出疑似短语
if (zhuansiba) {
  const phrases = zhuansiba.words.filter(w => (w.name?.length > 20) || (w.name?.includes(' ') && w.name.length > 12));
  console.log(`\n📋 专八疑似短语 (${phrases.length}个，展示前15):`);
  phrases.slice(0, 15).forEach(w => console.log(`   - "${w.name}"`));
}

// 所有词库交叉重复概览
console.log(`\n📈 各词库规模概览`);
for (const r of results) {
  console.log(`   ${r.name}: ${r.words.length} 词 / ${r.totalChapters} 章`);
}
