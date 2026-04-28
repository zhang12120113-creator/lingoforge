const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');
const files = fs.readdirSync(dictDir).filter(f => f.endsWith('.json'));

let hasErrors = false;

for (const file of files) {
  const filepath = path.join(dictDir, file);
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  const chapters = data.chapters || [];

  console.log(`\n=== ${file} ===`);
  console.log(`  Chapters: ${chapters.length}`);

  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    const wordCount = ch.words ? ch.words.length : 0;
    const isLast = i === chapters.length - 1;
    const expected = 25;
    const ok = isLast ? wordCount <= expected : wordCount === expected;
    const status = ok ? 'OK' : 'FAIL';
    console.log(`  ${ch.name || '(no name)'}: ${wordCount} words [${status}]`);
    if (!ok) hasErrors = true;
  }
}

console.log('\n========================================');
if (hasErrors) {
  console.log('Result: Some chapters do not have exactly 25 words.');
  process.exit(1);
} else {
  console.log('Result: All non-last chapters have 25 words.');
  process.exit(0);
}
