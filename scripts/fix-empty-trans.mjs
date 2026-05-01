import fs from 'fs';

// Fix empty strings in trans arrays
for (const dict of ['gaokao', 'ielts', 'senior']) {
  const filePath = `src/dictionaries/${dict}.json`;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let fixedCount = 0;

  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      const originalLen = word.trans.length;
      word.trans = word.trans.filter(t => t && t.trim() !== '');
      if (word.trans.length < originalLen) {
        console.log(`Fixed ${word.name} in ${dict} chapter ${chapter.id}: removed ${originalLen - word.trans.length} empty translation(s)`);
        fixedCount++;
      }
    }
  }

  if (fixedCount > 0) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`Fixed ${fixedCount} words in ${dict}.json\n`);
  } else {
    console.log(`No empty translations found in ${dict}.json\n`);
  }
}
