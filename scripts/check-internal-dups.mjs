import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');

const dictFiles = fs.readdirSync(dictDir).filter(f => f.endsWith('.json'));

console.log('=== 各词库内部重复单词检查 ===\n');

for (const file of dictFiles) {
  const data = JSON.parse(fs.readFileSync(path.join(dictDir, file), 'utf-8'));
  const nameMap = new Map(); // name -> [{chapterId, index, trans}]

  for (const ch of data.chapters || []) {
    for (let i = 0; i < (ch.words || []).length; i++) {
      const w = ch.words[i];
      const key = w.name?.toLowerCase().trim();
      if (!key) continue;
      if (!nameMap.has(key)) nameMap.set(key, []);
      nameMap.get(key).push({
        chapterId: ch.id,
        index: i,
        name: w.name,
        usphone: w.usphone,
        ukphone: w.ukphone,
        trans: w.trans
      });
    }
  }

  const duplicates = [...nameMap.entries()].filter(([k, v]) => v.length > 1);
  if (duplicates.length > 0) {
    console.log(`📚 ${file}: ${duplicates.length} 个重复单词`);
    for (const [name, locs] of duplicates) {
      console.log(`  "${name}" 出现 ${locs.length} 次:`);
      for (const l of locs) {
        const transPreview = JSON.stringify(l.trans).slice(0, 60);
        console.log(`    章节${l.chapterId}[${l.index}] trans=${transPreview}`);
      }
    }
    console.log('');
  }
}
