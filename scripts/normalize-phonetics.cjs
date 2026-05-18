/**
 * Strip all / and [] wrappers from phonetic fields.
 * The UI already wraps with /…/, so data should be bare IPA.
 */
const fs = require('fs');
const path = require('path');

const DICT_DIR = path.join(__dirname, '..', 'src', 'dictionaries');

const PHONE_FIELD_PATTERNS = [
  /^uk$/,
  /^us$/,
  /^ukphone$/,
  /^usphone$/,
];

function normalizePhone(value) {
  if (!value || typeof value !== 'string') return value;
  let s = value.trim();
  if (!s) return s;
  s = s.replace(/^\/+/, '').replace(/\/+$/, '');
  s = s.replace(/^\[+/, '').replace(/\]+$/, '');
  s = s.trim();
  return s;
}

const files = fs.readdirSync(DICT_DIR).filter(f => f.endsWith('.json'));

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(DICT_DIR, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const chapters = data.chapters;
  if (!Array.isArray(chapters)) continue;

  let fileFixed = 0;

  for (const chapter of chapters) {
    const words = chapter.words;
    if (!Array.isArray(words)) continue;

    for (const word of words) {
      for (const key of Object.keys(word)) {
        const isPhoneField = PHONE_FIELD_PATTERNS.some(p => p.test(key));
        if (!isPhoneField) continue;

        const original = word[key];
        const normalized = normalizePhone(original);
        if (original !== normalized) {
          word[key] = normalized;
          fileFixed++;
        }
      }
    }
  }

  if (fileFixed > 0) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`${file}: fixed ${fileFixed} phonetic values`);
  } else {
    console.log(`${file}: already correct`);
  }

  totalFixed += fileFixed;
}

console.log(`\nTotal phonetic values normalized: ${totalFixed}`);
