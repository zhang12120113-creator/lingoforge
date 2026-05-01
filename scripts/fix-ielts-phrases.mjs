import fs from 'fs';

const filePath = 'src/dictionaries/ielts.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let removedCount = 0;

// Phrase fragments to remove:
// out with trans ["of","line","不一致"] -> should be "outline"
// be with trans ["at","odds","with","有争执"] -> should be "be at odds with"
// accountable with trans ["for","应付责任"] -> should be "accountable for"
// in with trans ["favour","为收款人"] -> should be "in favour"
// go with trans ["without","的情况下勉强对付"] -> should be "go without"

const fragments = [
  { name: 'out', chapter: 2, transMatch: t => t.includes('of') && t.includes('line') },
  { name: 'be', chapter: 5, transMatch: t => t.includes('at') && t.includes('odds') && t.includes('with') },
  { name: 'accountable', chapter: 13, transMatch: t => t.includes('for') },
  { name: 'in', chapter: 58, transMatch: t => t.includes('favour') },
  { name: 'go', chapter: 91, transMatch: t => t.includes('without') },
];

for (const frag of fragments) {
  const chapter = data.chapters.find(c => c.id === frag.chapter);
  if (!chapter) {
    console.log(`Chapter ${frag.chapter} not found`);
    continue;
  }

  const idx = chapter.words.findIndex(w => {
    if (w.name !== frag.name) return false;
    const transStr = JSON.stringify(w.trans);
    return frag.transMatch(transStr);
  });

  if (idx !== -1) {
    const word = chapter.words[idx];
    console.log(`Removing fragment: ${word.name} from chapter ${frag.chapter}, trans=${JSON.stringify(word.trans)}`);
    chapter.words.splice(idx, 1);
    removedCount++;
  } else {
    console.log(`Fragment not found: ${frag.name} in chapter ${frag.chapter}`);
  }
}

console.log(`\nRemoved ${removedCount} phrase fragments`);
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('File saved.');
