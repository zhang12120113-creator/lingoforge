import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '..', 'src', 'dictionaries');

const alternates = {
  'organiser': { uk: 'ˈɔːɡənaɪzə(r)', us: 'ˈɔːrɡənaɪzər' },
  'aupair': { uk: 'ˌəʊ ˈpeə(r)', us: 'ˌoʊ ˈper' },
};

for (const dictName of ['gaokao', 'senior', 'ielts']) {
  const filePath = path.join(DICTS_DIR, `${dictName}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  let fixed = 0;
  if (data.chapters) {
    for (const chapter of data.chapters) {
      if (!chapter.words) continue;
      for (const word of chapter.words) {
        const alt = alternates[word.name];
        if (alt) {
          word.ukphone = alt.uk;
          word.usphone = alt.us;
          fixed++;
        }
      }
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  if (fixed > 0) console.log(`${dictName}: fixed ${fixed}`);
}
