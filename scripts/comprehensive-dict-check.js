import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '../src/dictionaries');
const REPORTS_DIR = path.join(__dirname, '../reports');

const DICT_FILES = [
  { file: 'junior.json', id: 'junior', name: '初中英语词汇', standardWords: 2000, note: '中考大纲约1800-2000词' },
  { file: 'zhongkao.json', id: 'zhongkao', name: '中考英语核心词汇', standardWords: null, note: '高频核心，无统一标准' },
  { file: 'senior.json', id: 'senior', name: '高中英语词汇', standardWords: 3500, note: '高考旧版大纲3500词' },
  { file: 'gaokao.json', id: 'gaokao', name: '高考英语核心词汇', standardWords: null, note: '高频核心，无统一标准' },
  { file: 'cet4.json', id: 'cet4', name: '英语4级', standardWords: 4500, note: 'CET-4大纲约4000-4500词' },
  { file: 'cet4freq.json', id: 'cet4freq', name: '英语4级高频', standardWords: null, note: '高频 subset' },
  { file: 'cet6.json', id: 'cet6', name: '英语6级', standardWords: 5500, note: 'CET-6大纲约5500词' },
  { file: 'cet6freq.json', id: 'cet6freq', name: '英语6级高频', standardWords: null, note: '高频 subset' },
  { file: 'tem4.json', id: 'tem4', name: '英语专四', standardWords: 6500, note: 'TEM-4约6000-7000词' },
  { file: 'tem8.json', id: 'tem8', name: '英语专八', standardWords: 12000, note: 'TEM-8约10000-13000词' },
  { file: 'ielts.json', id: 'ielts', name: '雅思词汇', standardWords: 7000, note: '雅思核心约6000-8000词' },
  { file: 'toefl.json', id: 'toefl', name: '托福词汇', standardWords: 9000, note: '托福约8000-10000词' },
  { file: 'sat.json', id: 'sat', name: 'SAT词汇', standardWords: 12000, note: 'SAT约10000-15000词' },
  { file: 'postgraduate.json', id: 'postgraduate', name: '考研词汇', standardWords: 5500, note: '考研大纲约5500词' },
  { file: 'programmer.json', id: 'programmer', name: '程序员常见词汇', standardWords: null, note: '无官方标准' },
];

// ========== 工具函数 ==========

function loadDict(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    console.error(`❌ 解析失败 ${path.basename(filePath)}: ${e.message}`);
    return null;
  }
}

function flattenWords(data) {
  if (!data || !Array.isArray(data.chapters)) return [];
  const result = [];
  data.chapters.forEach((ch, cIdx) => {
    if (Array.isArray(ch.words)) {
      ch.words.forEach((w, wIdx) => {
        result.push({ ...w, chapter: cIdx + 1, chapterIndex: wIdx });
      });
    }
  });
  return result;
}

function getPhones(item) {
  let uk = item.uk ?? item.ukphone ?? '';
  let us = item.us ?? item.usphone ?? '';
  if (Array.isArray(uk)) uk = uk.join(' ');
  if (Array.isArray(us)) us = us.join(' ');
  return { uk: String(uk).trim(), us: String(us).trim() };
}

function getTrans(item) {
  const t = item.trans;
  if (Array.isArray(t)) return t;
  if (typeof t === 'string') return [t];
  return [];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ========== 模块 A: 元数据一致性 ==========

function checkMetaConsistency(dictData, metaEntry) {
  const issues = [];
  const actualChapters = dictData.chapters?.length ?? 0;
  const actualWords = flattenWords(dictData).length;

  if (metaEntry.totalChapters !== actualChapters) {
    issues.push({
      type: 'meta_chapter_mismatch',
      message: `meta.js 声明 ${metaEntry.totalChapters} 章，实际 ${actualChapters} 章`,
      declared: metaEntry.totalChapters,
      actual: actualChapters
    });
  }
  if (metaEntry.totalWords !== actualWords) {
    issues.push({
      type: 'meta_word_mismatch',
      message: `meta.js 声明 ${metaEntry.totalWords} 词，实际 ${actualWords} 词`,
      declared: metaEntry.totalWords,
      actual: actualWords
    });
  }

  // 与官方标准对比
  if (dictData.standardWords !== null && dictData.standardWords > 0) {
    const diff = actualWords - dictData.standardWords;
    const diffPercent = ((diff / dictData.standardWords) * 100).toFixed(1);
    if (Math.abs(diff) > dictData.standardWords * 0.3) {
      issues.push({
        type: 'word_count_deviation',
        message: `单词数与官方标准偏差较大: 实际${actualWords} vs 标准${dictData.standardWords} (${diffPercent}%)`,
        standard: dictData.standardWords,
        actual: actualWords,
        diff,
        diffPercent
      });
    }
  }

  return { actualChapters, actualWords, issues };
}

// ========== 模块 B: 完整性扫描 ==========

function checkCompleteness(words) {
  const issues = [];
  for (const w of words) {
    const wordName = w.name?.toString().trim();

    // 空单词名
    if (!wordName || wordName === '') {
      issues.push({
        chapter: w.chapter,
        index: w.chapterIndex,
        word: '[空]',
        type: 'empty_name',
        message: '单词名称为空'
      });
      continue;
    }

    // 空音标
    const { uk, us } = getPhones(w);
    if (uk === '' && us === '') {
      issues.push({
        chapter: w.chapter,
        index: w.chapterIndex,
        word: wordName,
        type: 'empty_phone',
        message: '英式+美式音标均为空'
      });
    } else if (uk === '') {
      issues.push({
        chapter: w.chapter,
        index: w.chapterIndex,
        word: wordName,
        type: 'empty_ukphone',
        message: '英式音标为空'
      });
    } else if (us === '') {
      issues.push({
        chapter: w.chapter,
        index: w.chapterIndex,
        word: wordName,
        type: 'empty_usphone',
        message: '美式音标为空'
      });
    }

    // 空释义
    const trans = getTrans(w);
    if (!trans || trans.length === 0) {
      issues.push({
        chapter: w.chapter,
        index: w.chapterIndex,
        word: wordName,
        type: 'empty_trans',
        message: '释义数组为空或缺失'
      });
    } else {
      // trans 中的空字符串元素
      const emptyTransItems = trans
        .map((t, i) => ({ text: t, idx: i }))
        .filter(({ text }) => typeof text !== 'string' || text.trim() === '');
      if (emptyTransItems.length > 0) {
        issues.push({
          chapter: w.chapter,
          index: w.chapterIndex,
          word: wordName,
          type: 'empty_trans_item',
          message: `释义数组中有 ${emptyTransItems.length} 个空元素`,
          indices: emptyTransItems.map(x => x.idx)
        });
      }
    }
  }
  return issues;
}

// ========== 模块 C: 词库内重复检测 ==========

function checkDuplicates(words) {
  const seen = new Map();
  const duplicates = [];

  words.forEach((w) => {
    const name = w.name?.toString().toLowerCase().trim();
    if (!name) return;

    if (seen.has(name)) {
      const first = seen.get(name);
      duplicates.push({
        word: w.name,
        firstChapter: first.chapter,
        firstIndex: first.index,
        dupChapter: w.chapter,
        dupIndex: w.chapterIndex
      });
    } else {
      seen.set(name, { chapter: w.chapter, index: w.chapterIndex });
    }
  });

  return duplicates;
}

// ========== 模块 D: 音标格式校验 ==========

const IPA_VOWELS = /[ɑæɔəɪʊʌɛɜɒœʏɐɵiueoɔaɑɛ]/i;
const IPA_CONSONANTS = /[θðŋʃʒʤʧpbtdkgfvszmnlrwjh]/i;
const HAS_CHINESE = /[一-鿿]/;
const HAS_NUMBER = /\d/;

function checkPhoneFormat(wordName, uk, us) {
  const issues = [];

  // 跳过空音标（已在完整性检查中报告）
  if (uk === '' && us === '') return issues;

  for (const [label, phone] of [['uk', uk], ['us', us]]) {
    if (phone === '') continue;

    // 含中文
    if (HAS_CHINESE.test(phone)) {
      issues.push({
        label,
        type: 'phone_has_chinese',
        message: `${label}音标包含中文字符`,
        value: phone
      });
    }

    // 含数字
    if (HAS_NUMBER.test(phone)) {
      issues.push({
        label,
        type: 'phone_has_number',
        message: `${label}音标包含数字`,
        value: phone
      });
    }

    // 外有方括号（常见错误：把释义格式套到音标上）
    if (/^\[.*\]$/.test(phone)) {
      issues.push({
        label,
        type: 'phone_has_brackets',
        message: `${label}音标外加了方括号`,
        value: phone
      });
    }

    // 异常斜杠（非 // 包裹）
    if (/^\/|[^/]\/[^/]|\/$/.test(phone) && !/^\/.*\/$/.test(phone)) {
      issues.push({
        label,
        type: 'phone_has_bad_slash',
        message: `${label}音标包含异常斜杠`,
        value: phone
      });
    }

    // 检测元音缺失（音标中应包含至少一个元音符号）
    // 注意：部分音标写法可能用不同符号，这里做宽松检查
    const hasVowelLike = /[ɑæɔəɪʊʌɛɜɒœʏɐɵiueoɔaɛɑ]/i.test(phone);
    const hasStressMark = /[ˈˌ]/.test(phone);
    if (!hasVowelLike && hasStressMark) {
      issues.push({
        label,
        type: 'phone_no_vowel',
        message: `${label}音标未检测到元音符号（可能使用了非标准IPA或音标错误）`,
        value: phone
      });
    }

    // 释义内容混入音标字段（含中文且长度>5）
    if (HAS_CHINESE.test(phone) && phone.length > 5) {
      issues.push({
        label,
        type: 'phone_looks_like_trans',
        message: `${label}音标字段疑似释义`,
        value: phone
      });
    }
  }

  return issues;
}

function checkTransFormat(wordName, transArr) {
  const issues = [];
  const transStr = transArr.join('; ');

  // 释义为空已在完整性检查中报告
  if (!transArr || transArr.length === 0) return issues;

  for (let i = 0; i < transArr.length; i++) {
    const t = transArr[i];
    if (typeof t !== 'string') {
      issues.push({
        idx: i,
        type: 'trans_not_string',
        message: `释义第${i + 1}项不是字符串: ${typeof t}`,
        value: String(t)
      });
      continue;
    }

    const trimmed = t.trim();

    // 仅标点/空格
    if (/^[\s\p{P}]*$/u.test(trimmed)) {
      issues.push({
        idx: i,
        type: 'trans_empty_like',
        message: `释义第${i + 1}项为空或仅标点`,
        value: trimmed
      });
    }
  }

  // 释义字段疑似音标（不含中文，且以音标常见字符开头）
  if (!HAS_CHINESE.test(transStr) && /^['"ˌːɑæɔəɪʊʌθðŋʃʒ]/.test(transStr)) {
    issues.push({
      type: 'trans_looks_like_phone',
      message: '释义字段疑似音标',
      value: transStr
    });
  }

  // 释义中混入音标（同时含IPA和中文）
  if (HAS_CHINESE.test(transStr) && /['"ˌːɑæɔəɪʊʌθðŋʃʒ]/.test(transStr)) {
    if (transStr.includes('ˈ') || transStr.includes('ˌ') || transStr.includes('ə') || transStr.includes('ɪ') || transStr.includes('æ')) {
      issues.push({
        type: 'trans_mixed_phone',
        message: '释义中疑似混入了音标',
        value: transStr
      });
    }
  }

  return issues;
}

function checkWordNameFormat(wordName) {
  const issues = [];
  if (!wordName || wordName === '') return issues;

  // 包含等号（如 "bike = bicycle"）
  if (/=/.test(wordName)) {
    issues.push({ type: 'name_has_equals', message: '单词名包含等号', value: wordName });
  }
  // 包含斜杠（如 "grey / gray"）
  if (/\//.test(wordName) && !wordName.startsWith('/')) {
    issues.push({ type: 'name_has_slash', message: '单词名包含斜杠', value: wordName });
  }
  // 包含 & 符号
  if (/&/.test(wordName)) {
    issues.push({ type: 'name_has_ampersand', message: '单词名包含 & 符号', value: wordName });
  }
  // 过长
  if (wordName.length > 30) {
    issues.push({ type: 'name_too_long', message: `单词名过长(${wordName.length}字符)`, value: wordName });
  }

  return issues;
}

// ========== 模块 E: Free Dictionary API 验证 ==========

const API_BASE = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const API_DELAY_MS = 300; // 请求间隔，避免限流
const API_MAX_RETRIES = 3;

async function fetchDictionary(word, retries = 0) {
  const cleanWord = word.toLowerCase().trim();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(`${API_BASE}/${encodeURIComponent(cleanWord)}`, {
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (res.status === 404) {
      return { found: false, word: cleanWord, reason: 'not_found' };
    }
    if (!res.ok) {
      if (retries < API_MAX_RETRIES) {
        await sleep(500 * (retries + 1));
        return fetchDictionary(word, retries + 1);
      }
      return { found: false, word: cleanWord, reason: `http_${res.status}` };
    }

    const data = await res.json();
    return { found: true, word: cleanWord, data };
  } catch (err) {
    if (retries < API_MAX_RETRIES) {
      await sleep(500 * (retries + 1));
      return fetchDictionary(word, retries + 1);
    }
    return { found: false, word: cleanWord, reason: err.name === 'AbortError' ? 'timeout' : 'error', error: err.message };
  }
}

function extractApiPhones(entry) {
  const ukPhones = [];
  const usPhones = [];
  if (entry.phonetics) {
    for (const p of entry.phonetics) {
      if (p.text) {
        if (p.audio?.includes('-uk.') || p.audio?.includes('_uk_')) {
          ukPhones.push(p.text);
        } else if (p.audio?.includes('-us.') || p.audio?.includes('_us_')) {
          usPhones.push(p.text);
        } else {
          // 无音频标识，默认加入
          ukPhones.push(p.text);
          usPhones.push(p.text);
        }
      }
    }
  }
  return {
    uk: ukPhones.length > 0 ? ukPhones[0] : null,
    us: usPhones.length > 0 ? usPhones[0] : null
  };
}

function extractApiMeanings(entry) {
  const meanings = [];
  if (entry.meanings) {
    for (const m of entry.meanings) {
      if (m.definitions) {
        for (const d of m.definitions) {
          meanings.push(d.definition);
        }
      }
    }
  }
  return meanings;
}

async function runApiValidation(wordsToCheck, onProgress) {
  const results = [];
  let processed = 0;

  for (const item of wordsToCheck) {
    const res = await fetchDictionary(item.name);
    processed++;

    const record = {
      word: item.name,
      chapter: item.chapter,
      index: item.chapterIndex,
      apiFound: res.found,
      apiReason: res.reason
    };

    if (res.found && res.data && res.data.length > 0) {
      const entry = res.data[0];
      const apiPhones = extractApiPhones(entry);
      const apiMeanings = extractApiMeanings(entry);

      record.apiUkPhone = apiPhones.uk;
      record.apiUsPhone = apiPhones.us;
      record.apiMeanings = apiMeanings.slice(0, 5); // 只取前5个释义

      // 与本地对比（宽松匹配：只要本地音标非空，就不报不匹配，因为IPA变体太多）
      const { uk, us } = getPhones(item);
      record.localUkPhone = uk || null;
      record.localUsPhone = us || null;
    }

    results.push(record);
    if (onProgress) onProgress(processed, wordsToCheck.length, item.name);
    await sleep(API_DELAY_MS);
  }

  return results;
}

// ========== 主流程 ==========

async function main() {
  console.log('='.repeat(70));
  console.log('     词库全面质量检查工具');
  console.log('     检查项: 元数据一致性 | 空值 | 重复 | 音标格式 | API验证');
  console.log('='.repeat(70));

  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  // 读取 meta.js
  let metaData = [];
  try {
    // 用简单文本解析提取关键信息（避免import ESM模块的复杂性）
    const metaPath = path.join(__dirname, '../src/dictionaries/meta.js');
    const metaRaw = fs.readFileSync(metaPath, 'utf-8');
    const dictMetaMatch = metaRaw.match(/dictionaryMeta\s*=\s*(\[[\s\S]*?\]);/);
    if (dictMetaMatch) {
      metaData = JSON.parse(dictMetaMatch[1].replace(/'/g, '"').replace(/(\w+):/g, '"$1":').replace(/,\s*]/g, ']').replace(/,\s*}/g, '}'));
    }
  } catch (e) {
    console.warn(`⚠️ 无法解析 meta.js: ${e.message}`);
  }

  const dictResults = [];
  let grandTotalWords = 0;
  let grandTotalIssues = 0;
  let grandTotalDuplicates = 0;

  // === 本地检查阶段 ===
  for (const cfg of DICT_FILES) {
    const filePath = path.join(DICTS_DIR, cfg.file);
    const data = loadDict(filePath);
    if (!data) {
      console.log(`\n❌ 无法加载: ${cfg.name}`);
      continue;
    }

    const words = flattenWords(data);
    grandTotalWords += words.length;

    console.log(`\n📖 ${cfg.name} (${words.length} 词)`);

    // 模块 A: 元数据一致性
    const metaEntry = metaData.find(m => m.id === cfg.id) || { totalChapters: data.totalChapters, totalWords: data.totalWords };
    const metaCheck = checkMetaConsistency(data, { ...metaEntry, standardWords: cfg.standardWords });

    // 模块 B: 完整性
    const completenessIssues = checkCompleteness(words);

    // 模块 C: 重复
    const duplicates = checkDuplicates(words);

    // 模块 D: 音标/释义/单词名格式
    const formatIssues = [];
    for (const w of words) {
      const wordName = w.name?.toString().trim() || '';
      const { uk, us } = getPhones(w);
      const trans = getTrans(w);

      const phoneIssues = checkPhoneFormat(wordName, uk, us);
      const transIssues = checkTransFormat(wordName, trans);
      const nameIssues = checkWordNameFormat(wordName);

      if (phoneIssues.length > 0 || transIssues.length > 0 || nameIssues.length > 0) {
        formatIssues.push({
          chapter: w.chapter,
          index: w.chapterIndex,
          word: wordName,
          phoneIssues,
          transIssues,
          nameIssues
        });
      }
    }

    const totalIssues = metaCheck.issues.length + completenessIssues.length + duplicates.length + formatIssues.length;
    grandTotalIssues += totalIssues;
    grandTotalDuplicates += duplicates.length;

    console.log(`   元数据问题: ${metaCheck.issues.length} 个`);
    console.log(`   完整性问题: ${completenessIssues.length} 个`);
    console.log(`   重复单词: ${duplicates.length} 个`);
    console.log(`   格式问题: ${formatIssues.length} 个`);
    console.log(`   总计问题: ${totalIssues} 个`);

    // 打印详情（限制数量）
    if (metaCheck.issues.length > 0) {
      metaCheck.issues.slice(0, 3).forEach(i => console.log(`     [META] ${i.message}`));
    }
    if (completenessIssues.length > 0) {
      completenessIssues.slice(0, 5).forEach(i => console.log(`     [${i.word}] ${i.message}`));
      if (completenessIssues.length > 5) console.log(`     ... 还有 ${completenessIssues.length - 5} 个`);
    }
    if (duplicates.length > 0) {
      const uniqueDups = [...new Set(duplicates.map(d => d.word))];
      console.log(`     重复词: ${uniqueDups.slice(0, 10).join(', ')}${uniqueDups.length > 10 ? ' ...' : ''}`);
    }
    if (formatIssues.length > 0) {
      formatIssues.slice(0, 5).forEach(i => {
        const desc = [...i.phoneIssues, ...i.transIssues, ...i.nameIssues].map(x => x.message).join('; ');
        console.log(`     [${i.word}] ${desc}`);
      });
      if (formatIssues.length > 5) console.log(`     ... 还有 ${formatIssues.length - 5} 个`);
    }

    dictResults.push({
      id: cfg.id,
      name: cfg.name,
      file: cfg.file,
      standardWords: cfg.standardWords,
      note: cfg.note,
      actualWords: words.length,
      actualChapters: metaCheck.actualChapters,
      metaIssues: metaCheck.issues,
      completenessIssues,
      duplicates,
      formatIssues,
      totalIssues
    });
  }

  // === API 验证阶段（抽样 + 问题单词优先） ===
  console.log('\n' + '='.repeat(70));
  console.log('     Free Dictionary API 验证阶段');
  console.log('='.repeat(70));

  const apiSampleSizePerDict = 200;
  const allApiWords = [];

  for (const dr of dictResults) {
    const filePath = path.join(DICTS_DIR, dr.file);
    const data = loadDict(filePath);
    const words = flattenWords(data);

    // 优先选择：已有问题的单词 + 随机抽样
    const problemWords = new Set();
    for (const i of dr.completenessIssues) problemWords.add(i.word);
    for (const i of dr.formatIssues) problemWords.add(i.word);

    const problemWordList = words.filter(w => problemWords.has(w.name?.toString().trim()));
    const remainingSlots = Math.max(0, apiSampleSizePerDict - problemWordList.length);

    // 均匀抽样
    const step = remainingSlots > 0 ? Math.max(1, Math.floor(words.length / remainingSlots)) : 1;
    const sampled = [];
    for (let i = 0; i < words.length && sampled.length < remainingSlots; i += step) {
      const w = words[i];
      if (!problemWords.has(w.name?.toString().trim())) {
        sampled.push(w);
      }
    }

    const toCheck = [...problemWordList, ...sampled].slice(0, apiSampleSizePerDict);
    console.log(`\n📖 ${dr.name}: API验证 ${toCheck.length} 词 (问题${problemWordList.length} + 抽样${sampled.length})`);

    const apiResults = await runApiValidation(toCheck, (done, total, currentWord) => {
      if (done % 50 === 0 || done === total) {
        process.stdout.write(`\r   进度: ${done}/${total}`);
      }
    });
    process.stdout.write('\n');

    // 分析 API 结果
    const notFound = apiResults.filter(r => !r.apiFound);
    const found = apiResults.filter(r => r.apiFound);

    console.log(`   API 找到: ${found.length} | 未找到: ${notFound.length}`);
    if (notFound.length > 0) {
      console.log(`   未找到示例: ${notFound.slice(0, 10).map(r => r.word).join(', ')}${notFound.length > 10 ? ' ...' : ''}`);
    }

    dr.apiValidation = {
      checkedCount: apiResults.length,
      foundCount: found.length,
      notFoundCount: notFound.length,
      notFoundWords: notFound.map(r => r.word),
      details: apiResults
    };
  }

  // === 汇总报告 ===
  console.log('\n' + '='.repeat(70));
  console.log('     检查汇总');
  console.log('='.repeat(70));

  for (const dr of dictResults) {
    const apiNF = dr.apiValidation?.notFoundCount ?? 0;
    const apiTotal = dr.apiValidation?.checkedCount ?? 0;
    console.log(`${dr.name}: ${dr.actualWords}词 | 问题${dr.totalIssues} | 重复${dr.duplicates.length} | API未找到${apiNF}/${apiTotal}`);
  }

  console.log(`\n总计: ${grandTotalWords} 词 | 问题 ${grandTotalIssues} | 重复 ${grandTotalDuplicates}`);

  const finalReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalDicts: dictResults.length,
      totalWords: grandTotalWords,
      totalIssues: grandTotalIssues,
      totalDuplicates: grandTotalDuplicates
    },
    standards: DICT_FILES.reduce((acc, cfg) => {
      acc[cfg.id] = { standard: cfg.standardWords, note: cfg.note };
      return acc;
    }, {}),
    dictionaries: dictResults
  };

  const reportPath = path.join(REPORTS_DIR, 'comprehensive-dict-check-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(finalReport, null, 2));
  console.log(`\n📄 详细报告已保存: ${reportPath}`);

  // 生成 TXT 摘要
  const summaryLines = [];
  summaryLines.push('词库全面质量检查报告');
  summaryLines.push(`生成时间: ${new Date().toLocaleString('zh-CN')}`);
  summaryLines.push(`总词库数: ${dictResults.length}`);
  summaryLines.push(`总单词数: ${grandTotalWords}`);
  summaryLines.push(`总问题数: ${grandTotalIssues}`);
  summaryLines.push(`总重复数: ${grandTotalDuplicates}`);
  summaryLines.push('');

  for (const dr of dictResults) {
    summaryLines.push(`--- ${dr.name} (${dr.file}) ---`);
    summaryLines.push(`  实际单词: ${dr.actualWords} | 官方标准: ${dr.standardWords ?? 'N/A'} | ${dr.note}`);
    if (dr.metaIssues.length > 0) {
      summaryLines.push(`  元数据问题 (${dr.metaIssues.length}):`);
      dr.metaIssues.forEach(i => summaryLines.push(`    - ${i.message}`));
    }
    if (dr.completenessIssues.length > 0) {
      summaryLines.push(`  完整性问题 (${dr.completenessIssues.length}):`);
      dr.completenessIssues.slice(0, 10).forEach(i => summaryLines.push(`    - [${i.word}] ${i.message}`));
      if (dr.completenessIssues.length > 10) summaryLines.push(`    ... 还有 ${dr.completenessIssues.length - 10} 个`);
    }
    if (dr.duplicates.length > 0) {
      summaryLines.push(`  重复单词 (${dr.duplicates.length}):`);
      const dupWords = [...new Set(dr.duplicates.map(d => d.word))];
      summaryLines.push(`    ${dupWords.join(', ')}`);
    }
    if (dr.formatIssues.length > 0) {
      summaryLines.push(`  格式问题 (${dr.formatIssues.length}):`);
      dr.formatIssues.slice(0, 10).forEach(i => {
        const desc = [...i.phoneIssues, ...i.transIssues, ...i.nameIssues].map(x => x.message).join('; ');
        summaryLines.push(`    - [${i.word}] ${desc}`);
      });
      if (dr.formatIssues.length > 10) summaryLines.push(`    ... 还有 ${dr.formatIssues.length - 10} 个`);
    }
    if (dr.apiValidation) {
      summaryLines.push(`  API验证: ${dr.apiValidation.checkedCount}词 | 找到${dr.apiValidation.foundCount} | 未找到${dr.apiValidation.notFoundCount}`);
      if (dr.apiValidation.notFoundWords.length > 0) {
        summaryLines.push(`  API未找到: ${dr.apiValidation.notFoundWords.slice(0, 20).join(', ')}${dr.apiValidation.notFoundWords.length > 20 ? ' ...' : ''}`);
      }
    }
    summaryLines.push('');
  }

  const summaryPath = path.join(REPORTS_DIR, 'comprehensive-dict-check-summary.txt');
  fs.writeFileSync(summaryPath, summaryLines.join('\n'));
  console.log(`📄 摘要报告已保存: ${summaryPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
