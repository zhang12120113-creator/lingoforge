import fs from 'fs';

const filePath = 'src/dictionaries/senior.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let removedCount = 0;
let mergedCount = 0;

// Helper: find all entries for a word name
function findEntries(name) {
  const entries = [];
  for (const chapter of data.chapters) {
    for (let i = 0; i < chapter.words.length; i++) {
      if (chapter.words[i].name === name) {
        entries.push({ chapter, index: i, word: chapter.words[i] });
      }
    }
  }
  return entries;
}

// Helper: remove an entry by reference
function removeEntry(entry) {
  entry.chapter.words.splice(entry.index, 1);
  removedCount++;
}

// 1. True duplicate: doctor - keep first, remove rest
{
  const entries = findEntries('doctor');
  if (entries.length > 1) {
    for (let i = 1; i < entries.length; i++) {
      removeEntry(entries[i]);
    }
    console.log(`Removed ${entries.length - 1} duplicate(s) of 'doctor'`);
  }
}

// 2. number - merge translations, keep first
{
  const entries = findEntries('number');
  if (entries.length > 1) {
    const allTrans = new Set();
    for (const e of entries) {
      e.word.trans.forEach(t => allTrans.add(t));
    }
    entries[0].word.trans = Array.from(allTrans);
    for (let i = 1; i < entries.length; i++) {
      removeEntry(entries[i]);
    }
    mergedCount++;
    console.log(`Merged 'number': ${entries.length} entries, trans=${entries[0].word.trans}`);
  }
}

// 3. fight - merge translations, keep first
{
  const entries = findEntries('fight');
  if (entries.length > 1) {
    const allTrans = new Set();
    for (const e of entries) {
      e.word.trans.forEach(t => allTrans.add(t));
    }
    entries[0].word.trans = Array.from(allTrans);
    for (let i = 1; i < entries.length; i++) {
      removeEntry(entries[i]);
    }
    mergedCount++;
    console.log(`Merged 'fight': ${entries.length} entries, trans=${entries[0].word.trans}`);
  }
}

// 4. ad - appears in chapter 2 (advertisement) and chapter 91 (away/interrupt)
// These are different meanings, keep both but rename to distinguish
{
  const entries = findEntries('ad');
  if (entries.length >= 2) {
    // First one is advertisement
    entries[0].word.trans = ['(缩) =advertisement n.广告'];
    // Second one is "away/interrupted" meaning
    entries[1].word.trans = ['.离开；（电自来水）停了,中断'];
    console.log(`Kept both 'ad' entries with distinct meanings: ch${entries[0].chapter.id} (advertisement), ch${entries[1].chapter.id} (away/interrupt)`);
  }
}

// 5. Homonyms to merge: broadcast, fall, order, park, record, shine, shoot, strike, tire, war, will
const homonyms = ['broadcast', 'fall', 'order', 'park', 'record', 'shine', 'shoot', 'strike', 'tire', 'war', 'will'];
for (const name of homonyms) {
  const entries = findEntries(name);
  if (entries.length > 1) {
    const allTrans = new Set();
    for (const e of entries) {
      e.word.trans.forEach(t => allTrans.add(t));
    }
    entries[0].word.trans = Array.from(allTrans);
    for (let i = 1; i < entries.length; i++) {
      removeEntry(entries[i]);
    }
    mergedCount++;
    console.log(`Merged homonym '${name}': ${entries.length} entries -> ch${entries[0].chapter.id}, ${entries[0].word.trans.length} translations`);
  } else if (entries.length === 1) {
    console.log(`Note: '${name}' only found once, no merge needed`);
  } else {
    console.log(`Warning: '${name}' not found`);
  }
}

// 6. female - also a duplicate with different meanings, merge
{
  const entries = findEntries('female');
  if (entries.length > 1) {
    const allTrans = new Set();
    for (const e of entries) {
      e.word.trans.forEach(t => allTrans.add(t));
    }
    entries[0].word.trans = Array.from(allTrans);
    for (let i = 1; i < entries.length; i++) {
      removeEntry(entries[i]);
    }
    mergedCount++;
    console.log(`Merged 'female': ${entries.length} entries, trans=${entries[0].word.trans}`);
  }
}

console.log(`\nSummary: removed ${removedCount} duplicates, merged ${mergedCount} words`);
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('File saved.');
