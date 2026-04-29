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

const CACHE_FILE = path.join(__dirname, '../.phonetics-cache.json');

// ============ API 调用 ============

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 10000 }, (res) => {
      if (res.statusCode === 404) return resolve(null);
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function parsePhonesFromApi(response) {
  if (!Array.isArray(response) || response.length === 0) return null;
  const entry = response[0];
  const phonetics = entry.phonetics || [];

  let uk = '';
  let us = '';

  for (const p of phonetics) {
    if (!p.text) continue;
    const text = p.text.replace(/^\//, '').replace(/\/$/, ''); // 移除 // 包裹
    const audio = p.audio || '';

    if (audio.includes('-uk') || audio.includes('-gb')) {
      if (!uk) uk = text;
    } else if (audio.includes('-us') || audio.includes('-au')) {
      if (!us) us = text;
    } else if (!audio && !us) {
      // 无音频的音标，当作备用
      us = text;
    }
  }

  // 如果没找到 uk，但找到了 us 且两者不同，尝试用第一个 phonetic 作为 uk
  if (!uk && phonetics.length > 0) {
    const first = phonetics.find(p => p.text);
    if (first && first.text !== us) {
      uk = first.text.replace(/^\//, '').replace(/\/$/, '');
    }
  }

  // 如果顶层 phonetic 存在，用它作为 uk 备用
  if (!uk && entry.phonetic) {
    uk = entry.phonetic.replace(/^\//, '').replace(/\/$/, '');
  }

  return { uk, us };
}

// ============ 主流程 ============

async function main() {
  // 加载缓存
  const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8')) : {};

  // 收集需要补充的单词
  const needed = new Map(); // word -> { needUk: boolean, needUs: boolean, locations: [...] }
  const dictData = {}; // file -> parsed data

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

        const uk = (w.uk ?? w.ukphone ?? '').toString().trim();
        const us = (w.us ?? w.usphone ?? '').toString().trim();

        if (!uk || !us) {
          if (!needed.has(word)) {
            needed.set(word, { needUk: !uk, needUs: !us, locations: [] });
          }
          const info = needed.get(word);
          if (!uk) info.needUk = true;
          if (!us) info.needUs = true;
          info.locations.push({ file, word: w });
        }
      }
    }
  }

  console.log(`共 ${needed.size} 个单词需要补充音标`);

  // 调用 API
  let fetched = 0;
  let skipped = 0;
  const words = Array.from(needed.keys());

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const info = needed.get(word);

    if (cache[word] && (cache[word].uk || cache[word].us)) {
      skipped++;
    } else {
      try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`;
        const response = await fetchJson(url);
        if (response) {
          cache[word] = parsePhonesFromApi(response);
        } else {
          cache[word] = { uk: '', us: '' };
        }
        fetched++;
        if (fetched % 10 === 0) {
          fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
          console.log(`  进度: ${i + 1}/${words.length}, 本次获取 ${fetched}, 缓存 ${skipped}`);
        }
        await sleep(150); // 避免限流
      } catch (e) {
        console.error(`  API 错误 ${word}: ${e.message}`);
        cache[word] = { uk: '', us: '' };
        await sleep(500);
      }
    }
  }

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  console.log(`API 调用完成: 新获取 ${fetched}, 使用缓存 ${skipped}`);

  // 应用补充
  let totalFilled = 0;
  for (const [word, info] of needed) {
    const apiResult = cache[word];
    if (!apiResult) continue;

    for (const loc of info.locations) {
      const w = loc.word;
      const ukField = w.uk !== undefined ? 'uk' : (w.ukphone !== undefined ? 'ukphone' : null);
      const usField = w.us !== undefined ? 'us' : (w.usphone !== undefined ? 'usphone' : null);

      if (info.needUk && apiResult.uk && ukField) {
        const orig = w[ukField];
        w[ukField] = apiResult.uk;
        totalFilled++;
        console.log(`[${loc.file}] ${word}: ${ukField} "" -> "${apiResult.uk}"`);
      }
      if (info.needUs && apiResult.us && usField) {
        const orig = w[usField];
        w[usField] = apiResult.us;
        totalFilled++;
        console.log(`[${loc.file}] ${word}: ${usField} "" -> "${apiResult.us}"`);
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
