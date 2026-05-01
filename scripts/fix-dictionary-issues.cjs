const fs = require('fs');
const path = require('path');
const https = require('https');

const DICT_DIR = path.join(__dirname, '../src/dictionaries');
const CACHE_PATH = path.join(__dirname, '../.youdao-phonetics-cache.json');
const REPORTS_DIR = path.join(__dirname, '../reports');

const DICT_FILES = [
  'junior.json', 'zhongkao.json', 'senior.json', 'gaokao.json',
  'cet4.json', 'cet4freq.json', 'cet6.json', 'cet6freq.json',
  'tem4.json', 'tem8.json', 'ielts.json', 'toefl.json', 'sat.json',
  'postgraduate.json', 'programmer.json'
];

// 保守的英式 IPA -> 美式 IPA 转换
function ukToUs(phone) {
  if (!phone) return phone;
  return phone
    .replace(/\(r\)/g, 'r')
    .replace(/ɒ/g, 'ɑː')
    .replace(/əʊ/g, 'oʊ')
    .replace(/eə/g, 'er')
    .replace(/ɪə/g, 'ɪr')
    .replace(/ʊə/g, 'ʊr');
}

// 保守的美式 IPA -> 英式 IPA 转换
function usToUk(phone) {
  if (!phone) return phone;
  return phone
    .replace(/oʊ/g, 'əʊ')
    .replace(/ɑːr/g, 'ɑː')
    .replace(/ɜːr/g, 'ɜː')
    .replace(/ɔːr/g, 'ɔː')
    .replace(/er\b/g, 'eə')
    .replace(/ɪr\b/g, 'ɪə')
    .replace(/ʊr\b/g, 'ʊə');
}

// 简化音标判定：仅含 ASCII 字符（不含 IPA 特殊符号），且不为空
const asciiOnlyPattern = /^[a-zA-Z0-9\s,.';\-]*$/;
function isSimplifiedPhonetic(phone) {
  const p = (phone ?? '').toString().trim();
  if (!p) return false;
  return asciiOnlyPattern.test(p);
}

function isStandardPhonetic(phone) {
  const p = (phone ?? '').toString().trim();
  if (!p) return false;
  return !asciiOnlyPattern.test(p);
}

function isPhrase(wordName) {
  const w = (wordName ?? '').toString();
  return w.includes(' ') || w.includes('-');
}

// 有道 API 查询
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

async function fetchBatch(words, batchNum, totalBatches) {
  process.stdout.write(`\r  Batch ${batchNum}/${totalBatches} (${words.length} words)... `);
  const results = await Promise.all(words.map(fetchYoudao));
  return results;
}

// 已知释义/词性错误修复表
const DEF_FIXES = {
  'senior.json': {
    'abortion': { trans: ['n. 人工流产，堕胎'] }
  }
};

async function main() {
  console.log('======== 词库综合修复脚本 ========');
  console.log();

  // 加载缓存
  const cache = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8')) : {};
  let cacheModified = false;

  // 加载所有字典
  const dictData = {};
  for (const file of DICT_FILES) {
    const fp = path.join(DICT_DIR, file);
    if (!fs.existsSync(fp)) continue;
    dictData[file] = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  }

  // ===== 阶段 A: 移除短语音标 =====
  console.log('>>> 阶段 A: 移除短语音标');
  let phraseRemovedCount = 0;
  const modifiedFiles = new Set();

  for (const file of DICT_FILES) {
    const data = dictData[file];
    if (!data || !data.chapters) continue;

    for (const ch of data.chapters) {
      if (!ch.words) continue;
      for (const w of ch.words) {
        if (isPhrase(w.name)) {
          const hasUs = (w.usphone ?? '').toString().trim() !== '';
          const hasUk = (w.ukphone ?? '').toString().trim() !== '';
          if (hasUs || hasUk) {
            w.usphone = '';
            w.ukphone = '';
            phraseRemovedCount++;
            modifiedFiles.add(file);
          }
        }
      }
    }
  }

  console.log(`    已移除 ${phraseRemovedCount} 个短语音标`);
  console.log();

  // ===== 阶段 B: 修复简化音标 =====
  console.log('>>> 阶段 B: 修复简化音标');

  // 收集需要修复的项
  const needsFix = []; // { file, chapterIdx, wordIdx, field, word, oldValue }
  for (const file of DICT_FILES) {
    const data = dictData[file];
    if (!data || !data.chapters) continue;

    for (let ci = 0; ci < data.chapters.length; ci++) {
      const ch = data.chapters[ci];
      if (!ch.words) continue;
      for (let wi = 0; wi < ch.words.length; wi++) {
        const w = ch.words[wi];
        if (isPhrase(w.name)) continue; // 短语已在阶段 A 处理

        for (const field of ['usphone', 'ukphone']) {
          const val = w[field];
          if (isSimplifiedPhonetic(val)) {
            needsFix.push({
              file,
              chapterIdx: ci,
              wordIdx: wi,
              field,
              word: w.name,
              oldValue: (val ?? '').toString().trim()
            });
          }
        }
      }
    }
  }

  console.log(`    发现 ${needsFix.length} 个简化音标需要修复`);

  // B1: 本地缓存查找
  let cacheFixed = 0;
  const remainingAfterCache = [];
  for (const item of needsFix) {
    const cached = cache[item.word];
    if (cached && cached[item.field]) {
      const data = dictData[item.file];
      const w = data.chapters[item.chapterIdx].words[item.wordIdx];
      w[item.field] = cached[item.field];
      cacheFixed++;
      modifiedFiles.add(item.file);
    } else {
      remainingAfterCache.push(item);
    }
  }
  console.log(`    缓存修复: ${cacheFixed} 个`);

  // B2: 智能转换（先对只有一端简化的进行转换，减少 API 调用）
  let convertFixed = 0;
  const remainingAfterConvert = [];
  for (const item of remainingAfterCache) {
    const data = dictData[item.file];
    const w = data.chapters[item.chapterIdx].words[item.wordIdx];
    const otherField = item.field === 'usphone' ? 'ukphone' : 'usphone';
    const otherVal = w[otherField];

    if (isStandardPhonetic(otherVal)) {
      const converted = item.field === 'usphone' ? ukToUs(otherVal) : usToUk(otherVal);
      if (converted && converted !== item.oldValue) {
        w[item.field] = converted;
        convertFixed++;
        modifiedFiles.add(item.file);
        continue;
      }
    }
    remainingAfterConvert.push(item);
  }
  console.log(`    智能转换修复: ${convertFixed} 个`);

  // B3: 批量 API 获取（按单词去重）
  const apiWords = [...new Set(remainingAfterConvert.map(i => i.word))];
  const apiResults = {};
  const apiFailed = [];

  if (apiWords.length > 0) {
    const BATCH_SIZE = 30;
    const DELAY_MS = 500;
    const MAX_RETRIES = 2;

    console.log(`    API 查询: ${apiWords.length} 个单词...`);
    const totalBatches = Math.ceil(apiWords.length / BATCH_SIZE);

    for (let i = 0; i < apiWords.length; i += BATCH_SIZE) {
      const batch = apiWords.slice(i, i + BATCH_SIZE);
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      const results = await fetchBatch(batch, batchNum, totalBatches);

      for (const r of results) {
        if (r.success) {
          apiResults[r.word] = { ukphone: r.ukphone, usphone: r.usphone };
          if (!cache[r.word]) cache[r.word] = {};
          if (r.ukphone) cache[r.word].ukphone = r.ukphone;
          if (r.usphone) cache[r.word].usphone = r.usphone;
          cacheModified = true;
        } else {
          apiFailed.push(r.word);
        }
      }

      if (i + BATCH_SIZE < apiWords.length) {
        await sleep(DELAY_MS);
      }
    }

    // 重试失败项
    if (apiFailed.length > 0 && MAX_RETRIES > 0) {
      console.log(`\n    重试 ${apiFailed.length} 个失败单词...`);
      const toRetry = [...apiFailed];
      apiFailed.length = 0;

      for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        if (toRetry.length === 0) break;
        const retryBatch = toRetry.splice(0, BATCH_SIZE);
        await sleep(2000);
        const results = await Promise.all(retryBatch.map(fetchYoudao));

        for (const r of results) {
          if (r.success) {
            apiResults[r.word] = { ukphone: r.ukphone, usphone: r.usphone };
            if (!cache[r.word]) cache[r.word] = {};
            if (r.ukphone) cache[r.word].ukphone = r.ukphone;
            if (r.usphone) cache[r.word].usphone = r.usphone;
            cacheModified = true;
          } else {
            apiFailed.push(r.word);
          }
        }
      }
    }

    console.log(`\n    API 成功: ${Object.keys(apiResults).length}/${apiWords.length}, 失败: ${apiFailed.length}`);
  }

  // B4: 用 API 结果修复
  let apiFixed = 0;
  const remainingAfterApi = [];
  for (const item of remainingAfterConvert) {
    const result = apiResults[item.word];
    if (result && result[item.field]) {
      const data = dictData[item.file];
      const w = data.chapters[item.chapterIdx].words[item.wordIdx];
      w[item.field] = result[item.field];
      apiFixed++;
      modifiedFiles.add(item.file);
    } else {
      remainingAfterApi.push(item);
    }
  }
  console.log(`    API 修复: ${apiFixed} 个`);

  // B5: 再次智能转换（API 后可能只有一端回来了）
  let finalConvertFixed = 0;
  const unFixed = [];
  for (const item of remainingAfterApi) {
    const data = dictData[item.file];
    const w = data.chapters[item.chapterIdx].words[item.wordIdx];
    const otherField = item.field === 'usphone' ? 'ukphone' : 'usphone';
    const otherVal = w[otherField];

    if (otherVal && otherVal.toString().trim() !== '') {
      const converted = item.field === 'usphone' ? ukToUs(otherVal) : usToUk(otherVal);
      if (converted && converted !== item.oldValue) {
        w[item.field] = converted;
        finalConvertFixed++;
        modifiedFiles.add(item.file);
        continue;
      }
    }
    unFixed.push(item);
  }
  console.log(`    API 后智能转换修复: ${finalConvertFixed} 个`);

  // B6: 记录未修复项
  if (unFixed.length > 0) {
    const reportPath = path.join(REPORTS_DIR, 'unfixed-phonetics.json');
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
    const report = unFixed.map(i => ({
      file: i.file,
      word: i.word,
      field: i.field,
      oldValue: i.oldValue
    }));
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
    console.log(`    ⚠️  未修复 ${unFixed.length} 个，已记录到 ${reportPath}`);
  }

  const totalBFixed = cacheFixed + convertFixed + apiFixed + finalConvertFixed;
  console.log(`    阶段 B 总计修复: ${totalBFixed}/${needsFix.length}`);
  console.log();

  // ===== 阶段 C: 修复已知释义/词性错误 =====
  console.log('>>> 阶段 C: 修复已知释义/词性错误');
  let defFixedCount = 0;

  for (const [file, fixes] of Object.entries(DEF_FIXES)) {
    const data = dictData[file];
    if (!data || !data.chapters) continue;

    for (const ch of data.chapters) {
      if (!ch.words) continue;
      for (const w of ch.words) {
        const wordFixes = fixes[w.name];
        if (wordFixes) {
          if (wordFixes.trans) w.trans = wordFixes.trans;
          defFixedCount++;
          modifiedFiles.add(file);
        }
      }
    }
  }

  console.log(`    已修复 ${defFixedCount} 个释义/词性错误`);
  console.log();

  // ===== 保存修改 =====
  console.log('>>> 保存修改');
  for (const file of modifiedFiles) {
    const fp = path.join(DICT_DIR, file);
    fs.writeFileSync(fp, JSON.stringify(dictData[file], null, 2) + '\n', 'utf-8');
    console.log(`    ✅ 已保存: ${file}`);
  }

  if (cacheModified) {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2) + '\n', 'utf-8');
    console.log(`    ✅ 已更新缓存: ${CACHE_PATH}`);
  }

  console.log();
  console.log('======== 修复完成 ========');
  console.log(`阶段 A - 移除短语音标: ${phraseRemovedCount} 个`);
  console.log(`阶段 B - 修复简化音标: ${totalBFixed}/${needsFix.length} 个`);
  console.log(`  - 缓存命中: ${cacheFixed}`);
  console.log(`  - 智能转换: ${convertFixed}`);
  console.log(`  - API 修复: ${apiFixed}`);
  console.log(`  - API 后转换: ${finalConvertFixed}`);
  console.log(`  - 未修复: ${unFixed.length}`);
  console.log(`阶段 C - 修复释义/词性: ${defFixedCount} 个`);
  console.log(`修改文件数: ${modifiedFiles.size}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
