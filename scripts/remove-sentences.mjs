import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '..', 'src', 'dictionaries');
const REPORT_PATH = path.join(__dirname, '..', 'reports', 'cleanup-report.json');

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  let removedCount = 0;

  if (data.chapters) {
    for (const chapter of data.chapters) {
      if (chapter.words) {
        for (const word of chapter.words) {
          if ('sentences' in word) {
            delete word.sentences;
            removedCount++;
          }
        }
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  return removedCount;
}

function traverse(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      traverse(fullPath, callback);
    } else if (entry.name.endsWith('.json')) {
      callback(fullPath);
    }
  }
}

if (!fs.existsSync(path.dirname(REPORT_PATH))) {
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
}

const report = {
  timestamp: new Date().toISOString(),
  files: []
};

traverse(DICTS_DIR, (filePath) => {
  const relativePath = path.relative(process.cwd(), filePath);
  try {
    const count = processFile(filePath);
    report.files.push({ file: relativePath, sentencesRemoved: count, status: 'success' });
    console.log(`✅ ${relativePath}: 删除 ${count} 条例句`);
  } catch (err) {
    report.files.push({ file: relativePath, error: err.message, status: 'error' });
    console.error(`❌ ${relativePath}: ${err.message}`);
  }
});

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
console.log(`\n📄 报告已保存: ${REPORT_PATH}`);
