import fs from 'fs';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync('./scripts/ecdict.csv', 'utf8'), {
  columns: true,
  skip_empty_lines: true,
});

const existing = new Set();
const data = JSON.parse(fs.readFileSync('src/dictionaries/ielts.json', 'utf8'));
for (const ch of data.chapters) {
  for (const w of ch.words) existing.add(w.name.toLowerCase());
}

const ieltsWords = [];
for (const r of records) {
  const tag = r.tag || '';
  if (tag.includes('ielts')) {
    const word = r.word;
    if (!existing.has(word.toLowerCase())) {
      ieltsWords.push({
        name: word.toLowerCase(),
        usphone: r.phonetic || '',
        ukphone: '',
        trans: [r.translation || ''],
      });
    }
  }
}

console.log('ECDICT ielts words not in existing dict:', ieltsWords.length);
fs.writeFileSync('./scripts/ecdict-ielts-extra.json', JSON.stringify(ieltsWords, null, 2));
