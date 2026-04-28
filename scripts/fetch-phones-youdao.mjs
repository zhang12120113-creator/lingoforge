import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPORTS_DIR = path.join(__dirname, '..', 'reports');
const NEED_API_PATH = path.join(REPORTS_DIR, 'need-api-phones.json');
const CACHE_PATH = path.join(REPORTS_DIR, 'phone-cache.json');

const BATCH_SIZE = 30;
const DELAY_MS = 500;
const MAX_RETRIES = 2;

function fetchYoudao(word) {
  return new Promise((resolve) => {
    const url = `https://dict.youdao.com/jsonapi?q=${encodeURIComponent(word)}`;
    const req = https.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const phones = json?.ec?.word?.[0];
          if (phones && (phones.ukphone || phones.usphone)) {
            resolve({
              word,
              ukphone: phones.ukphone || '',
              usphone: phones.usphone || '',
              success: true
            });
          } else {
            resolve({ word, success: false, reason: 'no_phonetic_data' });
          }
        } catch {
          resolve({ word, success: false, reason: 'parse_error' });
        }
      });
    });
    req.on('error', (err) => {
      resolve({ word, success: false, reason: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ word, success: false, reason: 'timeout' });
    });
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  if (!fs.existsSync(NEED_API_PATH)) {
    console.error('❌ need-api-phones.json not found. Run fill-phones-local.mjs first.');
    process.exit(1);
  }

  const needData = JSON.parse(fs.readFileSync(NEED_API_PATH, 'utf-8'));
  const words = Object.keys(needData.words);
  console.log(`🎯 Fetching phonetics for ${words.length} words from Youdao...`);

  const results = {};
  const failed = [];

  const totalBatches = Math.ceil(words.length / BATCH_SIZE);
  for (let i = 0; i < words.length; i += BATCH_SIZE) {
    const batch = words.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    process.stdout.write(`\r  Batch ${batchNum}/${totalBatches} (${i + 1}-${Math.min(i + BATCH_SIZE, words.length)})... `);

    const batchResults = await Promise.all(batch.map(fetchYoudao));

    for (const r of batchResults) {
      if (r.success) {
        results[r.word] = { ukphone: r.ukphone, usphone: r.usphone };
      } else {
        failed.push(r.word);
      }
    }

    if (i + BATCH_SIZE < words.length) {
      await sleep(DELAY_MS);
    }
  }

  console.log('\n');

  // Retry failed words
  if (failed.length > 0 && MAX_RETRIES > 0) {
    console.log(`🔄 Retrying ${failed.length} failed words...`);
    const toRetry = [...failed];
    failed.length = 0;
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      if (toRetry.length === 0) break;
      const retryBatch = toRetry.splice(0, BATCH_SIZE);
      await sleep(2000); // longer delay for retries
      const retryResults = await Promise.all(retryBatch.map(fetchYoudao));
      for (const r of retryResults) {
        if (r.success) {
          results[r.word] = { ukphone: r.ukphone, usphone: r.usphone };
        } else {
          failed.push(r.word);
        }
      }
    }
  }

  fs.writeFileSync(CACHE_PATH, JSON.stringify({ results, failed }, null, 2));

  const successCount = Object.keys(results).length;
  console.log(`\n✅ Success: ${successCount}/${words.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  if (failed.length > 0) {
    console.log(`   Failed words: ${failed.slice(0, 20).join(', ')}${failed.length > 20 ? '...' : ''}`);
  }
  console.log(`💾 Saved to: ${CACHE_PATH}`);
}

main().catch(console.error);
