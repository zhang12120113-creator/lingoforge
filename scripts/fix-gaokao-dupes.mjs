import fs from 'fs';

const filePath = 'src/dictionaries/gaokao.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const seen = new Map(); // name -> first occurrence word object (same reference)
let removedCount = 0;
const removedWords = [];

for (const chapter of data.chapters) {
  const newWords = [];
  for (const word of chapter.words) {
    // Compare word content excluding chapter location
    const key = JSON.stringify({
      name: word.name,
      usphone: word.usphone,
      ukphone: word.ukphone,
      trans: word.trans
    });

    if (seen.has(key)) {
      const prev = seen.get(key);
      removedCount++;
      removedWords.push({
        word: word.name,
        chapter: chapter.id,
        previousChapter: prev.chapterId
      });
      // Skip adding this duplicate
    } else {
      seen.set(key, { chapterId: chapter.id });
      newWords.push(word);
    }
  }
  chapter.words = newWords;
}

console.log(`Removed ${removedCount} duplicate words from gaokao.json`);
if (removedWords.length > 0) {
  console.log('Removed words (first 20):');
  removedWords.slice(0, 20).forEach(r => {
    console.log(`  ${r.word} from chapter ${r.chapter} (first in chapter ${r.previousChapter})`);
  });
  if (removedWords.length > 20) {
    console.log(`  ... and ${removedWords.length - 20} more`);
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('File saved.');
