import fs from 'fs';

const filePath = 'src/dictionaries/ielts.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Exact fixes for each word based on the analysis
const phoneFixes = {
  'dwell': { ukphone: "'dwel" },        // standard UK /dwel/
  'electronic': { ukphone: "ɪˌlek'trɒnɪk" },
  'degenerate': { ukphone: "dɪ'dʒenəreɪt" },
  'patent': { ukphone: "'pætnt; 'peɪtnt" },
  'suitcase': { ukphone: "'suːtkeɪs" },  // also fix 'sʊːt -> 'suːt
  'upset': { ukphone: "ʌp'set" },
  'digest': { ukphone: "daɪ'dʒest" },
  'discriminate': { ukphone: "dɪ'skrɪmɪneɪt" },
  'extract': { ukphone: "'ekstrækt" },
  'questionnaire': { ukphone: "ˌkwestʃə'neə(r)" },
  'advent': { ukphone: "'ædvent" },
  'sedentary': { ukphone: "'sedntri" },
  'particulate': { ukphone: "pə'tɪkjələt" },  // noun form
  'hectare': { ukphone: "'hektə(r)" },
  'asymmetry': { ukphone: "eɪ'sɪmətri" },
  'reject': { ukphone: "rɪ'dʒekt" }
};

let fixedCount = 0;

for (const chapter of data.chapters) {
  for (const word of chapter.words) {
    if (phoneFixes[word.name]) {
      const oldPhone = word.ukphone;
      const fixes = phoneFixes[word.name];
      if (fixes.ukphone && word.ukphone !== fixes.ukphone) {
        word.ukphone = fixes.ukphone;
        console.log(`Fixed ${word.name}: ${oldPhone} -> ${word.ukphone}`);
        fixedCount++;
      }
    }
  }
}

console.log(`\nFixed ${fixedCount} ukphone entries`);
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('File saved.');
