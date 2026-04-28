import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '..', 'src', 'dictionaries');

// Derived words that can use root word phonetics
const DERIVED = {
  'extremities': { from: 'extremity', uk: 'ɪkˈstreməti', us: 'ɪkˈstreməti' },
  'unaccepted': { from: 'accepted', uk: 'əkˈseptɪd', us: 'əkˈseptɪd' },
  'secureness': { from: 'secure', uk: 'sɪˈkjʊə(r)', us: 'sɪˈkjʊr' },
};

for (const dictName of ['tem4', 'tem8']) {
  const filePath = path.join(DICTS_DIR, `${dictName}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  let fixed = 0;
  if (data.chapters) {
    for (const chapter of data.chapters) {
      if (!chapter.words) continue;
      for (const word of chapter.words) {
        const derived = DERIVED[word.name];
        if (derived) {
          word.ukphone = derived.uk;
          word.usphone = derived.us;
          fixed++;
        }
      }
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  if (fixed > 0) console.log(`${dictName}: fixed ${fixed}`);
}
