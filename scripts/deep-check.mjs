import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');

function loadDict(name) {
  const p = path.join(dictDir, `${name}.json`);
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

// 1. 检查 CET4 和 CET6 是否完全相同
const cet4 = loadDict('cet4');
const cet6 = loadDict('cet6');

console.log('=== CET4 vs CET6 深度对比 ===');
console.log(`CET4 总单词数: ${cet4.totalWords}, 章节数: ${cet4.chapters.length}`);
console.log(`CET6 总单词数: ${cet6.totalWords}, 章节数: ${cet6.chapters.length}`);

let sameCount = 0;
let diffCount = 0;
const minChapters = Math.min(cet4.chapters.length, cet6.chapters.length);

for (let ci = 0; ci < minChapters; ci++) {
  const c4 = cet4.chapters[ci];
  const c6 = cet6.chapters[ci];
  const minWords = Math.min(c4.words.length, c6.words.length);
  for (let wi = 0; wi < minWords; wi++) {
    const w4 = c4.words[wi];
    const w6 = c6.words[wi];
    if (w4.name === w6.name && w4.usphone === w6.usphone && w4.ukphone === w6.ukphone) {
      sameCount++;
    } else {
      diffCount++;
      if (diffCount <= 5) {
        console.log(`  差异[章节${ci}][单词${wi}]: CET4="${w4.name}" CET6="${w6.name}"`);
      }
    }
  }
}

console.log(`相同单词: ${sameCount}`);
console.log(`不同单词: ${diffCount}`);

if (sameCount > 0 && diffCount === 0 && cet4.chapters.length === cet6.chapters.length) {
  // 检查章节内单词数
  let allSame = true;
  for (let ci = 0; ci < cet4.chapters.length; ci++) {
    if (cet4.chapters[ci].words.length !== cet6.chapters[ci].words.length) {
      allSame = false;
      console.log(`  章节${ci}单词数不同: CET4=${cet4.chapters[ci].words.length} CET6=${cet6.chapters[ci].words.length}`);
    }
  }
  if (allSame) {
    console.log('\n🚨 CET4 和 CET6 的数据结构完全相同！');
  }
}

// 2. 检查 CET4Freq vs CET6Freq
const c4f = loadDict('cet4freq');
const c6f = loadDict('cet6freq');
console.log('\n=== CET4Freq vs CET6Freq 深度对比 ===');
console.log(`CET4Freq 总单词数: ${c4f.totalWords}, 章节数: ${c4f.chapters.length}`);
console.log(`CET6Freq 总单词数: ${c6f.totalWords}, 章节数: ${c6f.chapters.length}`);

let sameF = 0, diffF = 0;
const minCF = Math.min(c4f.chapters.length, c6f.chapters.length);
for (let ci = 0; ci < minCF; ci++) {
  const c4 = c4f.chapters[ci];
  const c6 = c6f.chapters[ci];
  const minW = Math.min(c4.words.length, c6.words.length);
  for (let wi = 0; wi < minW; wi++) {
    if (c4.words[wi].name === c6.words[wi].name) sameF++;
    else {
      diffF++;
      if (diffF <= 3) console.log(`  差异: [${ci}][${wi}] c4="${c4.words[wi].name}" c6="${c6.words[wi].name}"`);
    }
  }
}
console.log(`相同: ${sameF}, 不同: ${diffF}`);

// 3. 检查音标 "bɐːθ" 问题
console.log('\n=== 音标 bɐːθ 检查 ===');
const dicts = ['cet4', 'cet6', 'cet4freq', 'cet6freq'];
for (const d of dicts) {
  const data = loadDict(d);
  for (const ch of data.chapters) {
    for (const w of ch.words) {
      if (w.usphone === 'bɐːθ' || w.ukphone === 'bɐːθ') {
        console.log(`  ${d}[章节${ch.id}]: ${w.name} - usphone=${w.usphone}, ukphone=${w.ukphone}`);
      }
    }
  }
}

// 4. 检查 IELTS 缺失音标
console.log('\n=== IELTS 缺失音标单词 ===');
const ielts = loadDict('ielts');
let missingCount = 0;
for (const ch of ielts.chapters) {
  for (const w of ch.words) {
    const hasPhone = (w.ukphone && String(w.ukphone).trim()) || (w.usphone && String(w.usphone).trim()) ||
                     (w.uk && String(w.uk).trim()) || (w.us && String(w.us).trim());
    if (!hasPhone) {
      missingCount++;
      if (missingCount <= 10) {
        console.log(`  [章节${ch.id}] ${w.name} - trans=${JSON.stringify(w.trans)}`);
      }
    }
  }
}
console.log(`IELTS 缺失音标总数: ${missingCount}`);

// 5. 检查 SENIOR 异常字符单词
console.log('\n=== Senior 异常字符单词 ===');
const senior = loadDict('senior');
const invalidPattern = /^[a-zA-Z0-9\-'\.\s]+$/;
for (const ch of senior.chapters) {
  for (const w of ch.words) {
    if (!invalidPattern.test(w.name)) {
      console.log(`  [章节${ch.id}] "${w.name}"`);
    }
  }
}

// 6. 检查 GAOGAO 重复单词详情
console.log('\n=== Gaokao 重复单词详情 ===');
const gaokao = loadDict('gaokao');
const nameMap = new Map();
for (const ch of gaokao.chapters) {
  for (let i = 0; i < ch.words.length; i++) {
    const w = ch.words[i];
    if (!nameMap.has(w.name)) nameMap.set(w.name, []);
    nameMap.get(w.name).push({ chapter: ch.id, index: i, trans: w.trans });
  }
}
for (const [name, locs] of nameMap.entries()) {
  if (locs.length > 1) {
    console.log(`  "${name}" 出现 ${locs.length} 次:`);
    for (const l of locs) {
      console.log(`    - 章节${l.chapter}[${l.index}] trans=${JSON.stringify(l.trans).slice(0,80)}`);
    }
  }
}

// 7. 检查不同词典之间的重叠
console.log('\n=== 跨词典重复检查 ===');
const allDicts = ['cet4', 'cet6', 'gaokao', 'ielts', 'senior', 'zhongkao'];
const wordSets = {};
for (const d of allDicts) {
  const data = loadDict(d);
  const set = new Set();
  for (const ch of data.chapters) {
    for (const w of ch.words) set.add(w.name.toLowerCase());
  }
  wordSets[d] = set;
}

for (let i = 0; i < allDicts.length; i++) {
  for (let j = i + 1; j < allDicts.length; j++) {
    const a = allDicts[i], b = allDicts[j];
    const overlap = [...wordSets[a]].filter(x => wordSets[b].has(x));
    const pctA = (overlap.length / wordSets[a].size * 100).toFixed(1);
    const pctB = (overlap.length / wordSets[b].size * 100).toFixed(1);
    if (overlap.length > 100) {
      console.log(`${a} ∩ ${b}: ${overlap.length} 个公共单词 (${pctA}% of ${a}, ${pctB}% of ${b})`);
    }
  }
}
