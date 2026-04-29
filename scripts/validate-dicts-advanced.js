const fs = require('fs');
const path = require('path');

const DICTS_DIR = path.join(__dirname, '../src/dictionaries');

// 词库配置：按难度从低到高排列（level 数字越大越难）
const DICT_CONFIG = [
  { file: 'junior.json', name: '初中英语词汇', level: 1, category: 'general' },
  { file: 'zhongkao.json', name: '中考英语核心词汇', level: 2, category: 'general' },
  { file: 'senior.json', name: '高中英语词汇', level: 3, category: 'general' },
  { file: 'gaokao.json', name: '高考英语核心词汇', level: 4, category: 'general' },
  { file: 'cet4.json', name: '英语4级', level: 5, category: 'general' },
  { file: 'cet4freq.json', name: '英语4级高频', level: 5, category: 'general' },
  { file: 'cet6.json', name: '英语6级', level: 6, category: 'general' },
  { file: 'cet6freq.json', name: '英语6级高频', level: 6, category: 'general' },
  { file: 'tem4.json', name: '英语专四', level: 7, category: 'general' },
  { file: 'tem8.json', name: '英语专八', level: 8, category: 'general' },
  { file: 'ielts.json', name: '雅思词汇', level: 8, category: 'general' },
  { file: 'toefl.json', name: '托福词汇', level: 8, category: 'general' },
  { file: 'sat.json', name: 'SAT词汇', level: 9, category: 'general' },
  { file: 'postgraduate.json', name: '考研词汇', level: 9, category: 'general' },
  { file: 'programmer.json', name: '程序员常见词汇', level: 10, category: 'tech' }
];

// ==================== 工具函数 ====================

function flattenWords(data) {
  if (!data || !Array.isArray(data.chapters)) return [];
  return data.chapters.flatMap(ch => Array.isArray(ch.words) ? ch.words : []);
}

function loadDict(cfg) {
  const fp = path.join(DICTS_DIR, cfg.file);
  if (!fs.existsSync(fp)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(fp, 'utf-8'));
    return { raw, words: flattenWords(raw), cfg };
  } catch (e) {
    console.error(`解析失败 ${cfg.file}: ${e.message}`);
    return null;
  }
}

// ==================== 1. 内部查重 ====================
function checkInternalDuplicates(dictData) {
  const { words, cfg } = dictData;
  const seen = new Map();
  const duplicates = [];

  const isNested = dictData.raw && Array.isArray(dictData.raw.chapters);

  if (isNested) {
    let flatIndex = 0;
    dictData.raw.chapters.forEach((chapter, cIdx) => {
      const chapterWords = Array.isArray(chapter.words) ? chapter.words : [];
      chapterWords.forEach((item, idx) => {
        const w = item.name?.toString().toLowerCase().trim();
        if (!w) return;
        if (seen.has(w)) {
          const first = seen.get(w);
          duplicates.push({
            word: item.name,
            firstChapter: first.chapter,
            firstIndex: first.index,
            dupChapter: cIdx + 1,
            dupIndex: idx,
            dupFlatIndex: flatIndex
          });
        } else {
          seen.set(w, { chapter: cIdx + 1, index: idx, flatIndex });
        }
        flatIndex++;
      });
    });
  } else {
    words.forEach((item, idx) => {
      const w = item.name?.toString().toLowerCase().trim();
      if (!w) return;
      if (seen.has(w)) {
        const first = seen.get(w);
        duplicates.push({
          word: item.name,
          firstIndex: first.index,
          dupIndex: idx
        });
      } else {
        seen.set(w, { index: idx });
      }
    });
  }

  return duplicates;
}

// ==================== 2. 词库间层级合规检查 ====================
function checkLevelCompliance(allDicts) {
  const names = Object.keys(allDicts);
  const results = [];

  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      const low = allDicts[names[i]];
      const high = allDicts[names[j]];

      if (low.cfg.level >= high.cfg.level) continue;
      if (low.cfg.category !== high.cfg.category) continue;

      const levelDiff = high.cfg.level - low.cfg.level;
      const threshold = levelDiff === 1 ? 60 : levelDiff === 2 ? 35 : levelDiff === 3 ? 15 : 5;

      const lowSet = new Set(low.words.map(w => w.name?.toString().toLowerCase().trim()).filter(Boolean));
      const highSet = new Set(high.words.map(w => w.name?.toString().toLowerCase().trim()).filter(Boolean));

      let overlap = 0;
      const samples = [];
      lowSet.forEach(w => {
        if (highSet.has(w)) {
          overlap++;
          if (samples.length < 8) samples.push(w);
        }
      });

      const rate = (overlap / lowSet.size * 100).toFixed(2);

      results.push({
        lowDict: low.cfg.name,
        highDict: high.cfg.name,
        levelDiff,
        overlap,
        lowTotal: lowSet.size,
        rate,
        threshold,
        samples,
        isBad: parseFloat(rate) > threshold
      });
    }
  }

  return results.sort((a, b) => b.overlap - a.overlap);
}

// ==================== 3. 基础质量检查 ====================
function checkBasicQuality(words) {
  const issues = [];
  const sampleSize = Math.min(100, words.length);
  const step = Math.max(1, Math.floor(words.length / sampleSize));

  for (let i = 0; i < words.length; i += step) {
    const item = words[i];
    const word = item.name?.toString().trim();

    if (!word) {
      issues.push({ idx: i, word: '[空]', issue: '单词名称为空', type: 'error' });
      continue;
    }

    if (/\d/.test(word)) {
      issues.push({ idx: i, word, issue: '包含数字', type: 'error' });
    }

    const trans = item.trans;
    const hasTrans = Array.isArray(trans) ? trans.length > 0 : (typeof trans === 'string' && trans.trim().length > 0);
    if (!hasTrans) {
      issues.push({ idx: i, word, issue: '释义缺失', type: 'error' });
    }

    if (word.length > 25) {
      issues.push({ idx: i, word, issue: `超长(${word.length}字符)`, type: 'warning' });
    }
  }

  return issues;
}

// ==================== 4. 词频难度检查（可选） ====================
let wordfreq = null;
try {
  wordfreq = require('wordfreq');
} catch (e) {
  // 未安装则跳过
}

function checkFrequency(dictName, words) {
  if (!wordfreq) return { enabled: false, issues: [] };

  const ranges = {
    '初中英语词汇': [3.8, 7],
    '中考英语核心词汇': [3.5, 7],
    '高中英语词汇': [3.2, 6.5],
    '高考英语核心词汇': [3.0, 6.5],
    '英语4级': [2.8, 6],
    '英语4级高频': [2.8, 6],
    '英语6级': [2.5, 5.8],
    '英语6级高频': [2.5, 5.8],
    '英语专四': [2.2, 5.5],
    '英语专八': [2.0, 5.5],
    '雅思词汇': [2.0, 5.5],
    '托福词汇': [2.0, 5.5],
    'SAT词汇': [1.8, 5],
    '考研词汇': [1.8, 5],
  };

  const range = ranges[dictName];
  if (!range) return { enabled: true, issues: [] };

  const [minZipf, maxZipf] = range;
  const issues = [];
  const step = Math.max(1, Math.floor(words.length / 80));

  for (let i = 0; i < words.length; i += step) {
    const word = words[i].name?.toString().trim();
    if (!word || word.includes(' ') || word.includes('-')) continue;

    const info = wordfreq.info(word.toLowerCase());
    if (!info || !info.zipf) {
      issues.push({ word, issue: '词频库未收录（极罕见/专有词）', zipf: 0, severity: 'warning' });
      continue;
    }

    const zipf = info.zipf;
    if (zipf < minZipf) {
      issues.push({ word, issue: `词频过低(zipf=${zipf.toFixed(2)})，可能过难`, zipf, severity: 'warning' });
    }
  }

  return { enabled: true, issues };
}

// ==================== 主流程 ====================
function main() {
  console.log('============================================================');
  console.log('     LingoForge 词库查重 + 合规性检查工具 v2.0              ');
  console.log('============================================================\n');

  const allDicts = {};
  const loadedConfigs = [];

  for (const cfg of DICT_CONFIG) {
    const data = loadDict(cfg);
    if (!data) {
      console.log(`跳过: ${cfg.name} (文件不存在)`);
      continue;
    }
    allDicts[cfg.name] = data;
    loadedConfigs.push(cfg);
    console.log(`${cfg.name}: ${data.words.length} 词`);
  }

  if (loadedConfigs.length === 0) {
    console.log('没有加载到任何词库，请检查路径');
    return;
  }

  console.log('');

  // ===== 一、内部查重 =====
  console.log('【一、内部查重检查】');
  console.log('-'.repeat(50));
  let totalDups = 0;
  const dictsWithDups = [];

  for (const [name, data] of Object.entries(allDicts)) {
    const dups = checkInternalDuplicates(data);
    if (dups.length > 0) {
      totalDups += dups.length;
      dictsWithDups.push({ name, count: dups.length, dups });
      console.log(`\n${name}: ${dups.length} 个重复`);
      dups.slice(0, 5).forEach(d => {
        if (d.firstChapter !== undefined) {
          console.log(`   - "${d.word}" 章节${d.firstChapter}[${d.firstIndex}] <-> 章节${d.dupChapter}[${d.dupIndex}]`);
        } else {
          console.log(`   - "${d.word}" [${d.firstIndex}] <-> [${d.dupIndex}]`);
        }
      });
      if (dups.length > 5) console.log(`   ... 还有 ${dups.length - 5} 个`);
    } else {
      console.log(`${name}: 无重复`);
    }
  }

  // ===== 二、层级合规检查 =====
  console.log('\n【二、词库层级合规检查】');
  console.log('说明: 检查低级词库是否混入过多高级词汇');
  console.log('-'.repeat(50));

  const levelResults = checkLevelCompliance(allDicts);
  const badLevels = levelResults.filter(r => r.isBad);

  if (badLevels.length === 0) {
    console.log('所有词库层级关系正常\n');
  } else {
    badLevels.forEach(r => {
      console.log(`\n${r.lowDict} -> ${r.highDict} (难度差${r.levelDiff}级)`);
      console.log(`   重叠: ${r.overlap}/${r.lowTotal} 词 (${r.rate}%) | 阈值: ${r.threshold}%`);
      console.log(`   示例: ${r.samples.join(', ')}`);
    });
    console.log('');
  }

  // ===== 三、基础质量检查 =====
  console.log('【三、基础质量检查（抽样）】');
  console.log('-'.repeat(50));

  for (const [name, data] of Object.entries(allDicts)) {
    const issues = checkBasicQuality(data.words);
    const errors = issues.filter(i => i.type === 'error');
    const warnings = issues.filter(i => i.type === 'warning');

    if (errors.length > 0 || warnings.length > 0) {
      console.log(`\n${name}: ${errors.length} 错误, ${warnings.length} 警告`);
      errors.slice(0, 3).forEach(e => console.log(`   [${e.idx}] "${e.word}": ${e.issue}`));
      warnings.slice(0, 2).forEach(w => console.log(`   [${w.idx}] "${w.word}": ${w.issue}`));
    } else {
      console.log(`${name}: 基础质量正常`);
    }
  }

  // ===== 四、词频难度检查（可选） =====
  console.log('\n【四、词频难度检查（可选）】');
  console.log('-'.repeat(50));

  if (!wordfreq) {
    console.log('未安装 wordfreq，跳过词频检查');
    console.log('   如需启用，执行: cd scripts && npm install wordfreq');
  } else {
    for (const [name, data] of Object.entries(allDicts)) {
      if (data.cfg.category === 'tech') {
        console.log(`${name}: 跳过专业词汇`);
        continue;
      }
      const result = checkFrequency(name, data.words);
      const warnings = result.issues.filter(i => i.severity === 'warning');
      if (warnings.length > 0) {
        console.log(`\n${name}: ${warnings.length} 个可疑单词`);
        warnings.slice(0, 5).forEach(w => {
          console.log(`   - ${w.word}: ${w.issue}`);
        });
      } else {
        console.log(`${name}: 词频正常`);
      }
    }
  }

  // ===== 汇总报告 =====
  console.log('\n' + '='.repeat(60));
  console.log('【检查汇总】');
  console.log('='.repeat(60));
  console.log(`已检查词库: ${loadedConfigs.length} 个`);
  console.log(`内部重复: ${totalDups} 个 ${totalDups > 0 ? 'X' : 'OK'}`);
  console.log(`层级异常: ${badLevels.length} 对 ${badLevels.length > 0 ? 'X' : 'OK'}`);
  console.log(`词频检查: ${wordfreq ? '已执行' : '未启用'}`);

  if (totalDups > 0) {
    console.log('\n发现重复单词，建议运行去重脚本修复');
  }

  const report = {
    timestamp: new Date().toISOString(),
    internalDuplicates: dictsWithDups.map(d => ({ dict: d.name, count: d.count, words: d.dups.map(x => x.word) })),
    levelCompliance: levelResults,
    summary: {
      totalDicts: loadedConfigs.length,
      totalInternalDups: totalDups,
      badLevelPairs: badLevels.length
    }
  };

  const reportPath = path.join(__dirname, '../dict-check-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n详细报告已保存: dict-check-report.json`);
}

try {
  main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
