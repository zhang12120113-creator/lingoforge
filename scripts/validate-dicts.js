const fs = require('fs');
const path = require('path');

const DICTS_DIR = path.join(__dirname, '../src/dictionaries');

// 词库配置（根据实际文件调整）
const DICT_CONFIG = [
  { file: 'junior.json', name: '初中英语词汇', level: 'junior' },
  { file: 'zhongkao.json', name: '中考英语核心词汇', level: 'junior' },
  { file: 'senior.json', name: '高中英语词汇', level: 'senior' },
  { file: 'gaokao.json', name: '高考英语核心词汇', level: 'senior' },
  { file: 'cet4.json', name: '英语4级', level: 'cet4' },
  { file: 'cet4freq.json', name: '英语4级高频', level: 'cet4' },
  { file: 'cet6.json', name: '英语6级', level: 'cet6' },
  { file: 'cet6freq.json', name: '英语6级高频', level: 'cet6' },
  { file: 'tem4.json', name: '英语专四', level: 'tem4' },
  { file: 'tem8.json', name: '英语专八', level: 'tem8' },
  { file: 'ielts.json', name: '雅思词汇', level: 'ielts' },
  { file: 'toefl.json', name: '托福词汇', level: 'toefl' },
  { file: 'sat.json', name: 'SAT词汇', level: 'sat' },
  { file: 'postgraduate.json', name: '考研词汇', level: 'kaoyan' },
  { file: 'programmer.json', name: '程序员常见词汇', level: 'programmer' }
];

// 基于词长的启发式难度规则
const LEVEL_RULES = {
  junior:     { maxLen: 12, warnLen: 10 },
  senior:     { maxLen: 14, warnLen: 12 },
  cet4:       { maxLen: 15, warnLen: 13 },
  cet6:       { maxLen: 16, warnLen: 14 },
  tem4:       { maxLen: 18, warnLen: 15 },
  tem8:       { maxLen: 22, warnLen: 18 },
  ielts:      { maxLen: 20, warnLen: 16 },
  toefl:      { maxLen: 20, warnLen: 16 },
  sat:        { maxLen: 20, warnLen: 16 },
  kaoyan:     { maxLen: 20, warnLen: 16 },
  programmer: { maxLen: 30, warnLen: 20 }
};

// ==================== 工具函数 ====================

function loadDict(config) {
  const fp = path.join(DICTS_DIR, config.file);
  if (!fs.existsSync(fp)) return null;
  try {
    return JSON.parse(fs.readFileSync(fp, 'utf-8'));
  } catch (e) {
    console.error(`解析失败 ${config.file}: ${e.message}`);
    return null;
  }
}

// 兼容两种数据结构：扁平数组 或 章节嵌套对象
function flattenWords(data) {
  if (!data) return [];
  // 如果是 { chapters: [{ words: [...] }, ...] }
  if (data.chapters && Array.isArray(data.chapters)) {
    return data.chapters.flatMap(c => c.words || []);
  }
  // 如果是扁平数组
  if (Array.isArray(data)) {
    if (data.length === 0) return [];
    if (Array.isArray(data[0])) return data.flat();
    return data;
  }
  return [];
}

function getChapterInfo(data) {
  if (!data) return { isNested: false, count: 0 };
  if (data.chapters && Array.isArray(data.chapters)) {
    return {
      isNested: true,
      chapters: data.chapters.length,
      chapterSizes: data.chapters.map((c, i) => ({ chapter: i + 1, size: (c.words || []).length })),
      total: data.chapters.flatMap(c => c.words || []).length
    };
  }
  if (Array.isArray(data)) {
    if (data.length > 0 && Array.isArray(data[0])) {
      return {
        isNested: true,
        chapters: data.length,
        chapterSizes: data.map((c, i) => ({ chapter: i + 1, size: c.length })),
        total: data.flat().length
      };
    }
    return { isNested: false, chapters: 1, chapterSizes: [{ chapter: 1, size: data.length }], total: data.length };
  }
  return { isNested: false, chapters: 0, chapterSizes: [], total: 0 };
}

// ==================== 1. 内部查重 ====================
function checkInternalDuplicates(dictName, words) {
  const seen = new Map(); // word -> firstIndex
  const dups = [];
  words.forEach((item, idx) => {
    const w = item.name?.toString().toLowerCase().trim();
    if (!w) return;
    if (seen.has(w)) {
      dups.push({ word: item.name, firstIndex: seen.get(w), dupIndex: idx });
    } else {
      seen.set(w, idx);
    }
  });
  return dups;
}

// ==================== 2. 词库间查重 ====================
function checkCrossDuplicates(allDicts) {
  const names = Object.keys(allDicts);
  const results = [];
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      const a = names[i], b = names[j];
      const setA = new Set(allDicts[a].map(w => w.name?.toString().toLowerCase().trim()).filter(Boolean));
      const setB = new Set(allDicts[b].map(w => w.name?.toString().toLowerCase().trim()).filter(Boolean));
      const overlap = [];
      setA.forEach(w => { if (setB.has(w)) overlap.push(w); });
      if (overlap.length > 0) {
        results.push({
          dictA: a, dictB: b,
          overlapCount: overlap.length,
          rateA: ((overlap.length / setA.size) * 100).toFixed(2),
          rateB: ((overlap.length / setB.size) * 100).toFixed(2),
          samples: overlap.slice(0, 15)
        });
      }
    }
  }
  return results.sort((x, y) => y.overlapCount - x.overlapCount);
}

// ==================== 3. 合规性与异常检查 ====================
function checkCompliance(config, words) {
  const issues = [];
  const rule = LEVEL_RULES[config.level] || { maxLen: 30, warnLen: 20 };

  // 均匀抽样：最多检查 100 个，最少检查 20 个
  const total = words.length;
  const sampleCount = Math.min(100, Math.max(20, Math.floor(total / 10)));
  const step = Math.floor(total / sampleCount);

  const indices = new Set([0, total - 1]); // 必查首尾
  for (let i = 0; i < total; i += Math.max(1, step)) indices.add(i);

  indices.forEach(idx => {
    const item = words[idx];
    if (!item || typeof item !== 'object') {
      issues.push({ idx, word: '[无效条目]', issue: '条目不是对象', severity: 'error' });
      return;
    }
    const word = item.name?.toString().trim();
    if (!word) {
      issues.push({ idx, word: '[空]', issue: '单词名称为空', severity: 'error' });
      return;
    }

    // 长度异常
    if (word.length > rule.maxLen) {
      issues.push({ idx, word, issue: `单词过长(${word.length}字符)`, severity: 'error' });
    } else if (word.length > rule.warnLen) {
      issues.push({ idx, word, issue: `单词偏长(${word.length}字符)`, severity: 'warning' });
    }

    // 非法字符
    if (/[0-9]/.test(word)) {
      issues.push({ idx, word, issue: '包含数字', severity: 'error' });
    }
    if (/[^a-zA-Z\s\-'\/]/.test(word)) {
      issues.push({ idx, word, issue: '包含异常特殊字符', severity: 'warning' });
    }

    // 释义缺失
    const trans = item.trans;
    const hasTrans = Array.isArray(trans) ? trans.length > 0 : (typeof trans === 'string' && trans.trim().length > 0);
    if (!hasTrans) {
      issues.push({ idx, word, issue: '释义缺失', severity: 'error' });
    }

    // 音标格式检查（兼容 usphone/ukphone 和 us/uk）
    const phone = item.usphone || item.ukphone || item.phone || item.us || item.uk;
    if (phone && typeof phone === 'string') {
      const p = phone.trim();
      // 允许纯音标文本（无斜杠）也作为合法格式，因为很多词库不包斜杠
      if (p && !p.match(/[ɐ-ʯ\/ˈˌ]/)) {
        issues.push({ idx, word, issue: `音标格式异常: ${p}`, severity: 'warning' });
      }
    }
  });

  return issues;
}

// ==================== 主流程 ====================
async function main() {
  console.log('============================================================');
  console.log('           LingoForge 词库验证 & 查重工具 v1.0               ');
  console.log('============================================================\n');

  const allDicts = {};
  const report = {
    timestamp: new Date().toISOString(),
    dicts: [],
    crossDuplicates: [],
    summary: { totalWords: 0, totalInternalDups: 0, totalErrors: 0, totalWarnings: 0 }
  };

  // ---- Phase 1: 逐个检查 ----
  console.log('Phase 1: 加载并检查每个词库...\n');

  for (const cfg of DICT_CONFIG) {
    const rawData = loadDict(cfg);
    if (!rawData) {
      console.log(`跳过: ${cfg.name} (文件不存在)`);
      continue;
    }

    const words = flattenWords(rawData);
    const info = getChapterInfo(rawData);
    allDicts[cfg.name] = words;
    report.summary.totalWords += words.length;

    console.log(`${cfg.name} (${cfg.file})`);
    if (info.isNested) {
      console.log(`   章节数: ${info.chapters} | 总单词: ${info.total}`);
      const badChapters = info.chapterSizes.filter(c => c.size === 0 || c.size > 50);
      if (badChapters.length > 0) {
        console.log(`   异常章节: ${badChapters.map(c => `第${c.chapter}章(${c.size}词)`).join(', ')}`);
      }
    } else {
      console.log(`   总单词: ${info.total}`);
    }

    // 内部查重
    const dups = checkInternalDuplicates(cfg.name, words);
    if (dups.length > 0) {
      console.log(`   内部重复: ${dups.length} 个`);
      dups.slice(0, 5).forEach(d => {
        console.log(`      - "${d.word}" (索引${d.firstIndex} <-> ${d.dupIndex})`);
      });
      if (dups.length > 5) console.log(`      ... 还有 ${dups.length - 5} 个`);
    } else {
      console.log(`   无内部重复`);
    }
    report.summary.totalInternalDups += dups.length;

    // 合规检查
    const issues = checkCompliance(cfg, words);
    const errors = issues.filter(i => i.severity === 'error');
    const warnings = issues.filter(i => i.severity === 'warning');

    if (errors.length > 0) {
      console.log(`   异常: ${errors.length} 个`);
      errors.slice(0, 5).forEach(e => console.log(`      - [${e.idx}] "${e.word}": ${e.issue}`));
      if (errors.length > 5) console.log(`      ... 还有 ${errors.length - 5} 个`);
    }
    if (warnings.length > 0) console.log(`   警告: ${warnings.length} 个`);
    if (errors.length === 0 && warnings.length === 0) console.log(`   合规检查通过`);

    report.summary.totalErrors += errors.length;
    report.summary.totalWarnings += warnings.length;

    report.dicts.push({
      ...cfg,
      wordCount: words.length,
      structure: info,
      internalDups: dups,
      internalDupCount: dups.length,
      errors: errors,
      warnings: warnings,
      errorCount: errors.length,
      warningCount: warnings.length
    });

    console.log('');
  }

  // ---- Phase 2: 词库间查重 ----
  console.log('Phase 2: 词库间重复检查...\n');
  const cross = checkCrossDuplicates(allDicts);

  if (cross.length === 0) {
    console.log('词库间无重复\n');
  } else {
    cross.forEach(c => {
      console.log(`${c.dictA} <-> ${c.dictB}`);
      console.log(`   重叠: ${c.overlapCount} 词 | 占A: ${c.rateA}% | 占B: ${c.rateB}%`);
      console.log(`   示例: ${c.samples.join(', ')}${c.overlapCount > 15 ? ' ...' : ''}`);
      console.log('');
    });
  }
  report.crossDuplicates = cross;

  // ---- Phase 3: 汇总 & 生成报告 ----
  console.log('Phase 3: 生成报告...\n');

  const badDicts = report.dicts
    .filter(d => d.internalDupCount > 0 || d.errorCount > 0)
    .sort((a, b) => (b.internalDupCount + b.errorCount) - (a.internalDupCount + a.errorCount));

  console.log('============================================================');
  console.log('                      检查总结                               ');
  console.log('============================================================');
  console.log(`已检查词库: ${report.dicts.length}`);
  console.log(`总单词数:   ${report.summary.totalWords}`);
  console.log(`内部重复:   ${report.summary.totalInternalDups}`);
  console.log(`严重异常:   ${report.summary.totalErrors}`);
  console.log(`警告:       ${report.summary.totalWarnings}`);
  console.log(`词库间重叠: ${cross.length} 对`);
  console.log('============================================================\n');

  if (badDicts.length > 0) {
    console.log('需要修复的词库:');
    badDicts.forEach(d => {
      const arr = [];
      if (d.internalDupCount > 0) arr.push(`${d.internalDupCount}重复`);
      if (d.errorCount > 0) arr.push(`${d.errorCount}异常`);
      console.log(`   - ${d.name}: ${arr.join(' | ')}`);
    });
    console.log('');
  }

  // 保存 JSON 报告
  const reportPath = path.join(__dirname, '../dict-validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`JSON报告: dict-validation-report.json`);

  // 保存文本摘要
  const txtPath = path.join(__dirname, '../dict-validation-summary.txt');
  const lines = [
    'LingoForge 词库验证报告',
    '======================',
    `时间: ${report.timestamp}`,
    '',
    '【词库概况】',
    ...report.dicts.map(d => `${d.name}: ${d.wordCount}词 | 重复:${d.internalDupCount} | 异常:${d.errorCount} | 警告:${d.warningCount}`),
    '',
    '【词库间重叠 Top10】',
    ...cross.slice(0, 10).map(c => `${c.dictA} <-> ${c.dictB}: ${c.overlapCount}词 (A:${c.rateA}% B:${c.rateB}%)`),
    '',
    '【需修复】',
    ...(badDicts.length ? badDicts.map(d => `${d.name}: ${d.internalDupCount}重复, ${d.errorCount}异常`) : ['无'])
  ];
  fs.writeFileSync(txtPath, lines.join('\n'));
  console.log(`文本摘要: dict-validation-summary.txt`);
}

main().catch(e => { console.error(e); process.exit(1); });
