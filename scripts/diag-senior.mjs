import fs from 'fs';

const data = JSON.parse(fs.readFileSync('src/dictionaries/senior.json', 'utf8'));

const wordMap = new Map();

for (const chapter of data.chapters) {
  for (const word of chapter.words) {
    if (!wordMap.has(word.name)) {
      wordMap.set(word.name, []);
    }
    wordMap.get(word.name).push({
      chapter: chapter.id,
      usphone: word.usphone,
      ukphone: word.ukphone,
      trans: word.trans
    });
  }
}

const duplicates = [];
for (const [name, occurrences] of wordMap) {
  if (occurrences.length > 1) {
    const first = JSON.stringify(occurrences[0]);
    const allSame = occurrences.every(o => JSON.stringify(o) === first);
    duplicates.push({ name, occurrences, allSame });
  }
}

console.log(`Found ${duplicates.length} words with multiple occurrences`);
for (const d of duplicates) {
  console.log(`\n${d.name}: ${d.occurrences.length} times, allSame=${d.allSame}`);
  for (const o of d.occurrences) {
    console.log(`  chapter ${o.chapter}: trans=${JSON.stringify(o.trans)}`);
  }
}
