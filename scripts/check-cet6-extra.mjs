import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');

const cet6 = JSON.parse(fs.readFileSync(path.join(dictDir, 'cet6.json'), 'utf-8'));
const cet4 = JSON.parse(fs.readFileSync(path.join(dictDir, 'cet4.json'), 'utf-8'));

console.log('=== CET6 额外章节分析 ===');
console.log(`CET4 章节数: ${cet4.chapters.length}, 单词数: ${cet4.totalWords}`);
console.log(`CET6 章节数: ${cet6.chapters.length}, 单词数: ${cet6.totalWords}`);

// 前182章完全相同，检查183-267章
const extraChapters = cet6.chapters.slice(182);
console.log(`\nCET6 额外章节数: ${extraChapters.length}`);

let extraWords = 0;
for (const ch of extraChapters) {
  extraWords += ch.words.length;
  console.log(`  章节${ch.id}: ${ch.words.length} 个单词`);
  if (ch.id <= 185) {
    for (const w of ch.words.slice(0, 5)) {
      console.log(`    - ${w.name}`);
    }
    if (ch.words.length > 5) console.log(`    ... 还有 ${ch.words.length - 5} 个`);
  }
}
console.log(`\n额外章节总单词数: ${extraWords}`);
console.log(`CET4 + 额外 = ${cet4.totalWords} + ${extraWords} = ${cet4.totalWords + extraWords}`);
console.log(`CET6 声明总数: ${cet6.totalWords}`);

// 检查额外章节的单词是否在CET4中
const cet4Words = new Set();
for (const ch of cet4.chapters) {
  for (const w of ch.words) cet4Words.add(w.name.toLowerCase());
}

let extraInCet4 = 0;
let extraUnique = 0;
for (const ch of extraChapters) {
  for (const w of ch.words) {
    if (cet4Words.has(w.name.toLowerCase())) extraInCet4++;
    else extraUnique++;
  }
}
console.log(`\n额外章节中也在 CET4 中的: ${extraInCet4}`);
console.log(`额外章节中不在 CET4 中的: ${extraUnique}`);
