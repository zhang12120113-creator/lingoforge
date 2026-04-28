import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICTS_DIR = path.join(__dirname, '..', 'src', 'dictionaries');
const REPORT_PATH = path.join(__dirname, '..', 'reports', 'dictionary-check-report.json');
const STANDARDS_DIR = path.join(__dirname, '..', 'standards');

// ==================== 标准词汇表来源 ====================
const STANDARD_SOURCES = {
  'cet4': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/CET4_edited.txt',
  'cet6': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/CET6_edited.txt',
  'gaokao': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/Highschool_edited.txt',
  'zhongkao': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/%E4%B8%AD%E8%80%83%E8%8B%B1%E8%AF%AD%E8%AF%8D%E6%B1%87%E8%A1%A8.txt',
  'toefl': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/TOEFL.txt',
  'postgraduate': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/NPEE_Wordlist.txt',
  'tem4': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/%E8%8B%B1%E8%AF%AD%E4%B8%93%E4%B8%9A%E5%9B%9B%E5%85%AB%E7%BA%A7%E8%AF%8D%E6%B1%87%E8%A1%A8.txt',
  'tem8': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/%E8%8B%B1%E8%AF%AD%E4%B8%93%E4%B8%9A%E5%9B%9B%E5%85%AB%E7%BA%A7%E8%AF%8D%E6%B1%87%E8%A1%A8.txt',
  'junior': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/%E4%B8%AD%E8%80%83%E8%8B%B1%E8%AF%AD%E8%AF%8D%E6%B1%87%E8%A1%A8.txt',
  'senior': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/%E5%8F%B0%E7%81%A3%E9%AB%98%E4%B8%AD%E8%8B%B1%E6%96%87%E5%8F%83%E8%80%83%E8%AF%9E%E5%BD%99%E8%A1%A8.txt',
  'ielts': null,
  'sat': null,
  'programmer': null,
  'cet4freq': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/CET4_edited.txt',
  'cet6freq': 'https://raw.githubusercontent.com/mahavivo/english-wordlists/master/CET6_edited.txt'
};

// ==================== 下载工具 ====================
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res2) => {
          if (res2.statusCode !== 200) {
            reject(new Error(`HTTP ${res2.statusCode}`));
            return;
          }
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

function downloadFromGitHubAPI(fileName, dest) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://api.github.com/repos/mahavivo/english-wordlists/contents/${encodeURIComponent(fileName)}`;
    https.get(apiUrl, { headers: { 'User-Agent': 'typing-word-validator' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.content) {
            const decoded = Buffer.from(json.content.replace(/\n/g, ''), 'base64').toString('utf-8');
            fs.writeFileSync(dest, decoded);
            resolve();
          } else {
            reject(new Error(json.message || 'No content in API response'));
          }
        } catch (err) {
          reject(new Error(`Failed to parse API response: ${err.message}`));
        }
      });
    }).on('error', reject);
  });
}

async function ensureStandard(dictName) {
  const standardPath = path.join(STANDARDS_DIR, `${dictName}-standard.txt`);
  if (fs.existsSync(standardPath)) return standardPath;

  const url = STANDARD_SOURCES[dictName];
  if (!url) return null;

  try {
    if (!fs.existsSync(STANDARDS_DIR)) fs.mkdirSync(STANDARDS_DIR, { recursive: true });
    console.log(`  ⬇️ 下载 ${dictName} 标准词汇表...`);
    await downloadFile(url, standardPath);
    console.log(`  ✅ 已下载: ${standardPath}`);
    return standardPath;
  } catch (err) {
    console.error(`  ⚠️ 直接下载失败: ${err.message}`);
    try {
      const fileName = decodeURIComponent(url.split('/master/')[1]);
      await downloadFromGitHubAPI(fileName, standardPath);
      console.log(`  ✅ GitHub API 下载成功`);
      return standardPath;
    } catch (apiErr) {
      console.error(`  ❌ GitHub API 也失败: ${apiErr.message}`);
      return null;
    }
  }
}

function loadStandardWords(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return new Set(
    content.split('\n')
      .map(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return '';
        const word = trimmed.split(/[\t\s]/)[0].toLowerCase().replace(/[^a-z0-9\-]/g, '');
        return word;
      })
      .filter(word => word.length > 0)
  );
}

// ==================== 数据读取 ====================
function getWords(data) {
  const words = [];
  if (data.chapters) {
    for (const chapter of data.chapters) {
      if (chapter.words) {
        let idx = 0;
        for (const word of chapter.words) {
          words.push({ ...word, _chapterId: chapter.id, _index: idx++ });
        }
      }
    }
  }
  return words;
}

function getDictNameFromPath(filePath) {
  return path.basename(filePath, '.json');
}

// ==================== 格式正确性检查 ====================

// 检查单词名称是否合理（英文字母、连字符、撇号、空格、句点、数字）
function checkWordValidity(word) {
  const issues = [];
  if (!word) return issues;

  // 基本格式：允许字母、连字符、撇号、空格、句点、数字
  const validPattern = /^[a-zA-Z0-9\-'.\s]+$/;
  if (!validPattern.test(word)) {
    // 检查是否包含中文字符
    if (/[一-鿿]/.test(word)) {
      issues.push({ type: 'invalid_word_chinese', message: `单词包含中文字符: "${word}"` });
    } else if (/[^a-zA-Z0-9\-'.\s]/.test(word)) {
      issues.push({ type: 'invalid_word_chars', message: `单词包含异常字符: "${word}"` });
    }
  }

  // 长度检查
  if (word.length > 40) {
    issues.push({ type: 'invalid_word_long', message: `单词过长(${word.length}字符): "${word}"` });
  }

  return issues;
}

// 检查音标格式是否合理
function checkPhoneValidity(phone, label) {
  const issues = [];
  if (!phone) return issues;

  const str = String(phone).trim();

  // 音标应该包含一些IPA符号（至少包含一个元音标记）
  const hasVowel = /[iɪeæɑɒɔoʊuəɜʌɛɪaɔoʊaʊɔɪɪəʊəɛəɑɒɝɚ]/.test(str);
  if (!hasVowel && str.length > 0) {
    issues.push({ type: 'invalid_phone_no_vowel', message: `${label} 未检测到元音音标: "${str}"` });
  }

  // 音标中不应该有中文字符
  if (/[一-鿿]/.test(str)) {
    issues.push({ type: 'invalid_phone_chinese', message: `${label} 包含中文字符: "${str}"` });
  }

  // 音标长度合理性
  if (str.length > 60) {
    issues.push({ type: 'invalid_phone_long', message: `${label} 过长(${str.length}字符): "${str}"` });
  }

  return issues;
}

// 检查释义格式是否合理
function checkTransValidity(trans) {
  const issues = [];
  if (!trans) return [{ type: 'invalid_trans_empty', message: '释义为空' }];

  const strs = Array.isArray(trans) ? trans : [trans];
  const allEmpty = strs.every(s => !s || (typeof s === 'string' && s.trim() === ''));
  if (allEmpty) {
    issues.push({ type: 'invalid_trans_empty', message: '释义为空数组或全空字符串' });
    return issues;
  }

  for (const s of strs) {
    if (!s || typeof s !== 'string') continue;
    const trimmed = s.trim();

    // 释义不应该全是乱码/无意义字符
    if (/^[\d\s\p{P}]*$/u.test(trimmed) && trimmed.length > 0) {
      issues.push({ type: 'invalid_trans_gibberish', message: `释义疑似无意义: "${trimmed}"` });
    }
  }

  return issues;
}

// ==================== 单个词库验证 ====================
function validateDictionary(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  const words = getWords(data);

  const errors = [];
  const nameMap = new Map(); // name -> [{chapter, index}]

  words.forEach((item) => {
    const pos = `章节${item._chapterId} 第${item._index + 1}条`;

    // 1. 必填字段检查
    if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
      errors.push({ pos, type: 'missing_name', message: '缺少 name 字段或为空' });
    }

    const hasTrans = item.trans && (
      (typeof item.trans === 'string' && item.trans.trim() !== '') ||
      (Array.isArray(item.trans) && item.trans.length > 0 && item.trans.some(t => t && typeof t === 'string' && t.trim() !== ''))
    );
    if (!hasTrans) {
      errors.push({ pos, type: 'missing_trans', message: '缺少 trans 字段或为空', name: item.name });
    }

    const hasPhone = (item.uk && String(item.uk).trim() !== '') ||
                     (item.us && String(item.us).trim() !== '') ||
                     (item.ukphone && String(item.ukphone).trim() !== '') ||
                     (item.usphone && String(item.usphone).trim() !== '');
    if (!hasPhone) {
      errors.push({ pos, type: 'missing_phone', message: '缺少音标 (uk/us/ukphone/usphone)', name: item.name });
    }

    // 2. 格式正确性检查
    if (item.name) {
      const wordIssues = checkWordValidity(item.name.trim());
      for (const wi of wordIssues) {
        errors.push({ pos, type: wi.type, message: wi.message, name: item.name });
      }
    }

    if (item.uk) {
      const pi = checkPhoneValidity(item.uk, 'uk');
      for (const i of pi) errors.push({ pos, type: i.type, message: i.message, name: item.name });
    }
    if (item.us) {
      const pi = checkPhoneValidity(item.us, 'us');
      for (const i of pi) errors.push({ pos, type: i.type, message: i.message, name: item.name });
    }
    if (item.ukphone) {
      const pi = checkPhoneValidity(item.ukphone, 'ukphone');
      for (const i of pi) errors.push({ pos, type: i.type, message: i.message, name: item.name });
    }
    if (item.usphone) {
      const pi = checkPhoneValidity(item.usphone, 'usphone');
      for (const i of pi) errors.push({ pos, type: i.type, message: i.message, name: item.name });
    }

    const transIssues = checkTransValidity(item.trans);
    for (const ti of transIssues) {
      errors.push({ pos, type: ti.type, message: ti.message, name: item.name });
    }

    // 3. 收集查重数据
    if (item.name) {
      const key = item.name.toLowerCase().trim();
      if (!nameMap.has(key)) nameMap.set(key, []);
      nameMap.get(key).push({ chapter: item._chapterId, index: item._index + 1 });
    }
  });

  const duplicates = [];
  for (const [name, locations] of nameMap.entries()) {
    if (locations.length > 1) {
      duplicates.push({ name, count: locations.length, positions: locations });
    }
  }

  return {
    total: words.length,
    errors,
    duplicates,
    hasIssues: errors.length > 0 || duplicates.length > 0
  };
}

// ==================== 级别合规检查 ====================
function validateLevel(filePath, standardWords) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  const words = getWords(data);

  const suspicious = [];
  const covered = new Set();

  words.forEach((item, index) => {
    if (!item.name) return;
    // 与 loadStandardWords 保持一致的清理规则，避免撇号等字符导致匹配失败
    const key = item.name.toLowerCase().trim().replace(/[^a-z0-9\-]/g, '');
    const rawKey = item.name.toLowerCase().trim();

    if (!standardWords.has(key)) {
      suspicious.push({ word: item.name, chapter: item._chapterId, index: item._index + 1 });
    } else {
      covered.add(key);
    }
  });

  const missingInStandard = [];
  for (const w of standardWords) {
    if (!covered.has(w)) missingInStandard.push(w);
  }

  return {
    total: words.length,
    suspicious,
    suspiciousCount: suspicious.length,
    missingInStandard: missingInStandard.slice(0, 50),
    missingCount: missingInStandard.length,
    // 合规率 = 词库中有多少比例的单词在标准表中
    complianceRate: words.length === 0 ? '0.0' : ((covered.size / words.length) * 100).toFixed(1)
    // 覆盖率 = 标准表中有多少比例的单词被词库覆盖（仅供参考）
    // standardCoverage: standardWords.size === 0 ? '0.0' : ((covered.size / standardWords.size) * 100).toFixed(1)
  };
}

// ==================== 主流程 ====================
async function main() {
  console.log('============================================================');
  console.log('     TypingWord 词库全面质量检查工具                        ');
  console.log('============================================================\n');

  if (!fs.existsSync(path.dirname(REPORT_PATH))) {
    fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  }

  const dictFiles = fs.readdirSync(DICTS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => path.join(DICTS_DIR, f))
    .sort();

  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalDicts: dictFiles.length,
      totalWords: 0,
      totalErrors: 0,
      totalDuplicates: 0,
      checkedLevels: 0,
      totalSuspicious: 0
    },
    dictionaries: []
  };

  for (const filePath of dictFiles) {
    const dictName = getDictNameFromPath(filePath);
    const relativePath = path.relative(process.cwd(), filePath);

    console.log(`📚 检查词库: ${dictName}`);

    // 1. 基础质量检查
    const result = validateDictionary(filePath);
    report.summary.totalWords += result.total;
    report.summary.totalErrors += result.errors.length;
    report.summary.totalDuplicates += result.duplicates.length;

    // 2. 级别合规检查
    let levelResult = null;
    const standardPath = await ensureStandard(dictName);
    if (standardPath) {
      const standardWords = loadStandardWords(standardPath);
      levelResult = validateLevel(filePath, standardWords);
      report.summary.checkedLevels++;
      report.summary.totalSuspicious += levelResult.suspiciousCount;
      const icon = levelResult.suspiciousCount === 0 ? '✅' : '⚠️';
      console.log(`   ${icon} 级别合规: ${levelResult.suspiciousCount} 个可疑单词 | 合规率 ${levelResult.complianceRate}%`);
    } else {
      console.log(`   ⏭️ 级别合规: 无标准词汇表，跳过`);
    }

    // 打印错误摘要
    if (result.errors.length > 0) {
      const typeCount = {};
      for (const e of result.errors) {
        typeCount[e.type] = (typeCount[e.type] || 0) + 1;
      }
      const summaryStr = Object.entries(typeCount)
        .map(([t, c]) => `${t}(${c})`)
        .join(', ');
      console.log(`   ⚠️ 质量问题: ${result.errors.length} 个 (${summaryStr})`);

      // 打印前5个示例
      const uniqueTypes = new Set();
      const samples = [];
      for (const e of result.errors) {
        if (!uniqueTypes.has(e.type)) {
          uniqueTypes.add(e.type);
          samples.push(e);
        }
        if (samples.length >= 5) break;
      }
      for (const s of samples) {
        console.log(`      - [${s.pos}] ${s.message}`);
      }
      if (result.errors.length > 5) {
        console.log(`      ... 还有 ${result.errors.length - samples.length} 个`);
      }
    } else {
      console.log(`   ✅ 字段完整性: 无问题`);
    }

    if (result.duplicates.length > 0) {
      console.log(`   ⚠️ 内部重复: ${result.duplicates.length} 个单词`);
      for (const d of result.duplicates.slice(0, 5)) {
        const posStr = d.positions.map(p => `章节${p.chapter}[${p.index}]`).join(', ');
        console.log(`      - "${d.name}" 出现在: ${posStr}`);
      }
      if (result.duplicates.length > 5) {
        console.log(`      ... 还有 ${result.duplicates.length - 5} 个`);
      }
    } else {
      console.log(`   ✅ 内部重复: 无`);
    }

    console.log('');

    report.dictionaries.push({
      name: dictName,
      file: relativePath,
      totalWords: result.total,
      errors: result.errors,
      errorCount: result.errors.length,
      duplicates: result.duplicates,
      duplicateCount: result.duplicates.length,
      levelCheck: levelResult ? {
        suspiciousCount: levelResult.suspiciousCount,
        complianceRate: levelResult.complianceRate + '%',
        suspicious: levelResult.suspicious.slice(0, 20),
        missingCount: levelResult.missingCount
      } : { status: 'skipped', reason: '无标准词汇表' }
    });
  }

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log('='.repeat(60));
  console.log('【检查汇总】');
  console.log('='.repeat(60));
  console.log(`词库数量: ${report.summary.totalDicts}`);
  console.log(`总单词数: ${report.summary.totalWords}`);
  console.log(`质量问题: ${report.summary.totalErrors} 个 ${report.summary.totalErrors > 0 ? '⚠️' : '✅'}`);
  console.log(`内部重复: ${report.summary.totalDuplicates} 个 ${report.summary.totalDuplicates > 0 ? '⚠️' : '✅'}`);
  console.log(`级别检查: ${report.summary.checkedLevels}/${report.summary.totalDicts} 个词库`);
  console.log(`级别可疑: ${report.summary.totalSuspicious} 个 ${report.summary.totalSuspicious > 0 ? '⚠️' : '✅'}`);
  console.log(`\n📄 详细报告已保存: ${REPORT_PATH}`);
}

main().catch(console.error);
