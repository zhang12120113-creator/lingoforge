import fs from 'fs';

const data = JSON.parse(fs.readFileSync('src/dictionaries/ielts.json', 'utf8'));

// Find words with '3' in ukphone
const badPhones = [];
const phraseFragments = [];

for (const chapter of data.chapters) {
  for (const word of chapter.words) {
    if (word.ukphone && word.ukphone.includes('3')) {
      badPhones.push({
        name: word.name,
        ukphone: word.ukphone,
        chapter: chapter.id
      });
    }
    // Check for suspicious phrase fragments
    if (['out', 'line', 'be', 'odds', 'with', 'accountable', 'in', 'go'].includes(word.name)) {
      phraseFragments.push({
        name: word.name,
        trans: word.trans,
        chapter: chapter.id
      });
    }
  }
}

console.log('Words with "3" in ukphone:');
for (const w of badPhones) {
  console.log(`  ${w.name}: ${w.ukphone} (chapter ${w.chapter})`);
}

console.log('\nPotential phrase fragments:');
for (const w of phraseFragments) {
  console.log(`  ${w.name}: trans=${JSON.stringify(w.trans)} (chapter ${w.chapter})`);
}
