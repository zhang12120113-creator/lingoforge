import fs from 'fs';

function checkGaokao() {
  const data = JSON.parse(fs.readFileSync('src/dictionaries/gaokao.json', 'utf8'));
  const wordMap = new Map();
  let duplicates = 0;
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      const key = JSON.stringify({ name: word.name, usphone: word.usphone, ukphone: word.ukphone, trans: word.trans });
      if (wordMap.has(key)) {
        duplicates++;
      } else {
        wordMap.set(key, true);
      }
      if (word.trans.some(t => !t || t.trim() === '')) {
        console.log(`[GAOKAO] Empty trans in ${word.name} chapter ${chapter.id}`);
      }
    }
  }
  console.log(`[GAOKAO] Remaining exact duplicates: ${duplicates}`);
}

function checkSenior() {
  const data = JSON.parse(fs.readFileSync('src/dictionaries/senior.json', 'utf8'));
  const wordMap = new Map();
  let duplicates = 0;
  const badNames = [];
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      if (wordMap.has(word.name)) {
        duplicates++;
        console.log(`[SENIOR] Duplicate name: ${word.name} (ch${wordMap.get(word.name)} and ch${chapter.id})`);
      } else {
        wordMap.set(word.name, chapter.id);
      }
      if (/[=&/]/.test(word.name) || word.name.includes('  ') || word.name.includes('= ')) {
        badNames.push(word.name);
      }
    }
  }
  console.log(`[SENIOR] Remaining duplicate names: ${duplicates}`);
  console.log(`[SENIOR] Bad names remaining: ${badNames.length} ${badNames.slice(0, 5)}`);
}

function checkIELTS() {
  const data = JSON.parse(fs.readFileSync('src/dictionaries/ielts.json', 'utf8'));
  let badPhones = 0;
  let fragments = 0;
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      if (word.ukphone && word.ukphone.includes('3')) {
        badPhones++;
        console.log(`[IELTS] Bad phone: ${word.name} = ${word.ukphone}`);
      }
      // Check for suspicious fragments
      const transStr = JSON.stringify(word.trans);
      if ((word.name === 'out' && transStr.includes('line')) ||
          (word.name === 'be' && transStr.includes('odds')) ||
          (word.name === 'accountable' && transStr.includes('for')) ||
          (word.name === 'in' && transStr.includes('favour')) ||
          (word.name === 'go' && transStr.includes('without'))) {
        fragments++;
        console.log(`[IELTS] Remaining fragment: ${word.name} ch${chapter.id}`);
      }
    }
  }
  console.log(`[IELTS] Bad phones remaining: ${badPhones}`);
  console.log(`[IELTS] Fragments remaining: ${fragments}`);
}

function checkCET6() {
  const c4 = JSON.parse(fs.readFileSync('src/dictionaries/cet4freq.json', 'utf8'));
  const c6 = JSON.parse(fs.readFileSync('src/dictionaries/cet6freq.json', 'utf8'));
  const c4names = c4.chapters.flatMap(c => c.words.map(w => w.name));
  const c6names = c6.chapters.flatMap(c => c.words.map(w => w.name));
  let samePos = 0;
  for (let i = 0; i < 1500; i++) {
    if (c4names[i] === c6names[i]) samePos++;
  }
  console.log(`[CET6] Same words in same position as CET4: ${samePos} (should be < 10)`);
  console.log(`[CET6] CET6 first 3: ${c6names.slice(0, 3).join(', ')}`);
  console.log(`[CET6] CET4 first 3: ${c4names.slice(0, 3).join(', ')}`);
}

checkGaokao();
checkSenior();
checkIELTS();
checkCET6();
console.log('\nVerification complete.');
