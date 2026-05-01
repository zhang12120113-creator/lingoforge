const fs = require('fs');
const path = require('path');
const https = require('https');

const DICTS_DIR = path.join(__dirname, '../src/dictionaries');

const DICT_FILES = [
  'junior.json', 'zhongkao.json', 'senior.json', 'gaokao.json',
  'cet4.json', 'cet4freq.json', 'cet6.json', 'cet6freq.json',
  'tem4.json', 'tem8.json', 'ielts.json', 'toefl.json', 'sat.json',
  'postgraduate.json', 'programmer.json'
];

const CACHE_FILE = path.join(__dirname, '../.youdao-phonetics-cache.json');

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
              ukphone: (phones.ukphone || '').trim(),
              usphone: (phones.usphone || '').trim(),
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

function loadDict(file) {
  const fp = path.join(DICTS_DIR, file);
  if (!fs.existsSync(fp)) return null;
  try {
    return JSON.parse(fs.readFileSync(fp, 'utf-8'));
  } catch (e) {
    console.error(`解析失败 ${file}: ${e.message}`);
    return null;
  }
}

function getPhoneFields(word) {
  if (word.uk !== undefined || word.us !== undefined) {
    return { uk: 'uk', us: 'us' };
  }
  return { uk: 'ukphone', us: 'usphone' };
}

async function main() {
  // 加载缓存
  const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8')) : {};

  // 收集需要补充的单词
  const needed = new Map(); // word -> { needUk: boolean, needUs: boolean, locations: [...] }
  const dictData = {};

  for (const file of DICT_FILES) {
    const fp = path.join(DICTS_DIR, file);
    if (!fs.existsSync(fp)) continue;
    const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
    dictData[file] = data;
    if (!data.chapters) continue;

    for (const ch of data.chapters) {
      if (!ch.words) continue;
      for (const w of ch.words) {
        const word = w.name?.toString().trim();
        if (!word) continue;

        const fields = getPhoneFields(w);
        const uk = (w[fields.uk] ?? '').toString().trim();
        const us = (w[fields.us] ?? '').toString().trim();

        if (!uk || !us) {
          if (!needed.has(word)) {
            needed.set(word, { needUk: !uk, needUs: !us, locations: [] });
          }
          const info = needed.get(word);
          if (!uk) info.needUk = true;
          if (!us) info.needUs = true;
          info.locations.push({ file, word: w, fields });
        }
      }
    }
  }

  console.log(`共 ${needed.size} 个单词需要补充音标`);

  // 调用有道API
  let fetched = 0;
  let skipped = 0;
  let failed = 0;
  const words = Array.from(needed.keys());
  const BATCH_SIZE = 30;

  for (let i = 0; i < words.length; i += BATCH_SIZE) {
    const batch = words.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(words.length / BATCH_SIZE);
    process.stdout.write(`\r  Batch ${batchNum}/${totalBatches} (${i + 1}-${Math.min(i + BATCH_SIZE, words.length)})... `);

    // 先检查缓存
    const toFetch = [];
    for (const word of batch) {
      if (cache[word] && (cache[word].ukphone || cache[word].usphone)) {
        skipped++;
      } else {
        toFetch.push(word);
      }
    }

    if (toFetch.length > 0) {
      const results = await Promise.all(toFetch.map(fetchYoudao));
      for (const r of results) {
        if (r.success) {
          cache[r.word] = { ukphone: r.ukphone, usphone: r.usphone };
          fetched++;
        } else {
          cache[r.word] = { ukphone: '', usphone: '' };
          failed++;
        }
      }
      // 每批保存缓存
      fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
    }

    if (i + BATCH_SIZE < words.length) {
      await sleep(500);
    }
  }

  console.log('\n');
  console.log(`API 调用完成: 新获取 ${fetched}, 使用缓存 ${skipped}, 失败 ${failed}`);

  // 应用补充（只填充缺失的一侧）
  let totalFilled = 0;
  for (const [word, info] of needed) {
    const apiResult = cache[word];
    if (!apiResult) continue;

    for (const loc of info.locations) {
      const w = loc.word;
      const fields = loc.fields;

      if (info.needUk && apiResult.ukphone && fields.uk) {
        const orig = w[fields.uk];
        if (!orig || String(orig).trim() === '') {
          w[fields.uk] = apiResult.ukphone;
          totalFilled++;
          console.log(`[${loc.file}] ${word}: ${fields.uk} "" -> "${apiResult.ukphone}"`);
        }
      }
      if (info.needUs && apiResult.usphone && fields.us) {
        const orig = w[fields.us];
        if (!orig || String(orig).trim() === '') {
          w[fields.us] = apiResult.usphone;
          totalFilled++;
          console.log(`[${loc.file}] ${word}: ${fields.us} "" -> "${apiResult.usphone}"`);
        }
      }
    }
  }

  // 保存修改的文件
  const modifiedFiles = new Set();
  for (const [word, info] of needed) {
    for (const loc of info.locations) {
      modifiedFiles.add(loc.file);
    }
  }

  for (const file of modifiedFiles) {
    const fp = path.join(DICTS_DIR, file);
    const data = dictData[file];
    if (data) {
      fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
      console.log(`✅ 已保存: ${file}`);
    }
  }

  console.log(`\n======== 完成 ========`);
  console.log(`共补充 ${totalFilled} 处音标`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
