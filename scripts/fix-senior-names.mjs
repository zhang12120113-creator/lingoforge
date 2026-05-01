import fs from 'fs';

const filePath = 'src/dictionaries/senior.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Mapping of abnormal names to cleaned names + notes to add to translations
const nameFixes = {
  'ballpoint = ballpoint pen': { name: 'ballpoint', note: '(= ballpoint pen)' },
  'bike = bicycle': { name: 'bike', note: '(= bicycle)' },
  'dad = daddy': { name: 'dad', note: '(= daddy)' },
  'disk =disc': { name: 'disk', note: '(= disc)' },
  'does doesn\'t = does not': { name: 'doesn\'t', note: '(= does not)' },
  'drier =dryer': { name: 'drier', note: '(= dryer)' },
  'exam = examination': { name: 'exam', note: '(= examination)' },
  'fridge =refrigerator': { name: 'fridge', note: '(= refrigerator)' },
  'grandma = grandmother': { name: 'grandma', note: '(= grandmother)' },
  'grandpa = grandfather': { name: 'grandpa', note: '(= grandfather)' },
  'grey / gray': { name: 'grey', note: '(= gray)' },
  'gym =gymnasium': { name: 'gym', note: '(= gymnasium)' },
  'Lost & Found': { name: 'lost and found', note: null },
  'madam/ madame': { name: 'madam', note: '(= madame)' },
  'mathematics =math / maths': { name: 'mathematics', note: '(= math / maths)' },
  'Mom =Mum': { name: 'mom', note: '(= Mum)' },
  'mommy = mummy': { name: 'mommy', note: '(= mummy)' },
  'phone = telephone': { name: 'phone', note: '(= telephone)' },
  'photo =photograph': { name: 'photo', note: '(= photograph)' },
  'pop = popular': { name: 'pop', note: '(= popular)' },
  'VCD = versatile compact disk': { name: 'VCD', note: '(= versatile compact disk)' }
};

let fixedCount = 0;

for (const chapter of data.chapters) {
  for (const word of chapter.words) {
    const fix = nameFixes[word.name];
    if (fix) {
      console.log(`Fixing "${word.name}" -> "${fix.name}"`);
      word.name = fix.name;
      if (fix.note && !word.trans.some(t => t.includes(fix.note))) {
        word.trans = word.trans.map(t => `${t} ${fix.note}`.trim());
      }
      fixedCount++;
    }
  }
}

console.log(`\nFixed ${fixedCount} abnormal word names`);
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('File saved.');
