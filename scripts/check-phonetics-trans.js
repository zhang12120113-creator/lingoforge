const fs = require('fs');
const path = require('path');

const DICTS_DIR = path.join(__dirname, '../src/dictionaries');

const DICT_FILES = [
  'junior.json', 'zhongkao.json', 'senior.json', 'gaokao.json',
  'cet4.json', 'cet4freq.json', 'cet6.json', 'cet6freq.json',
  'tem4.json', 'tem8.json', 'ielts.json', 'toefl.json', 'sat.json',
  'postgraduate.json', 'programmer.json'
];

// 中文检测
const HAS_CHINESE = /[一-鿿]/;

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
  // 支持两种字段名: uk/us 和 ukphone/usphone
  let uk = item.uk ?? item.ukphone ?? '';
  let us = item.us ?? item.usphone ?? '';
  if (Array.isArray(uk)) uk = uk.join(' ');
  if (Array.isArray(us)) us = us.join(' ');
  return { uk: String(uk).trim(), us: String(us).trim() };
}

function getTrans(item) {
  const t = item.trans;
  if (Array.isArray(t)) return t.join('; ');
  return String(t ?? '').trim();
}

function checkPhones(word, uk, us) {
  const issues = [];

  if (uk === '' && us === '') {
    issues.push({ type: 'missing', desc: '英式和美式音标均缺失' });
    return issues;
  }

  for (const label of ['uk', 'us']) {
    const phone = label === 'uk' ? uk : us;
    if (phone === '') {
      issues.push({ type: 'missing_half', desc: `${label === 'uk' ? '英式' : '美式'}音标缺失` });
      continue;
    }

    // 包含中文
    if (HAS_CHINESE.test(phone)) {
      issues.push({ type: 'chinese', desc: `${label}音标包含中文字符: "${phone}"` });
    }

    // 外有方括号（常见错误：把释义格式套到音标上）
    if (/^\[.*\]$/.test(phone)) {
      issues.push({ type: 'bracket', desc: `${label}音标外加了方括号: "${phone}"` });
    }

    // 包含斜杠（可能是音标符号被误处理，或多余的/）
    // 但 // 包裹音标是标准写法，这里检查的是音标字符串内部的单斜杠
    if (/^\/|[^/]\/[^/]|\/$/.test(phone) && !/^\/.*\/$/.test(phone)) {
      issues.push({ type: 'slash', desc: `${label}音标包含异常斜杠: "${phone}"` });
    }

    // 包含数字
    if (/\d/.test(phone)) {
      issues.push({ type: 'digit', desc: `${label}音标包含数字: "${phone}"` });
    }

    // 包含分号（可能是多个音标未正确分隔）
    if (/；/.test(phone)) {
      issues.push({ type: 'semicolon_cn', desc: `${label}音标包含中文分号: "${phone}"` });
    }

    // 音标字段内容疑似释义（把释义填到音标里了）
    if (HAS_CHINESE.test(phone) && phone.length > 5) {
      issues.push({ type: 'trans_in_phone', desc: `${label}音标字段疑似释义: "${phone}"` });
    }
  }

  return issues;
}

function checkTrans(word, trans) {
  const issues = [];

  if (trans === '') {
    issues.push({ type: 'missing', desc: '释义缺失' });
    return issues;
  }

  // 释义为空格或仅标点
  if (/^[\s\p{P}]*$/u.test(trans)) {
    issues.push({ type: 'empty_like', desc: `释义内容为空或仅标点: "${trans}"` });
  }

  // trans 字段内容疑似音标（把音标填到释义里了）
  // 检查：不包含中文，且以音标常见字符开头
  if (!HAS_CHINESE.test(trans) && /^['"ˌːɑæɔəɪʊʌθðŋʃʒ]/.test(trans)) {
    issues.push({ type: 'phone_in_trans', desc: `释义字段疑似音标: "${trans}"` });
  }

  // trans 字段包含音标符号和中文混合（可能是音标和释义混在一起了）
  if (HAS_CHINESE.test(trans) && /['"ˌːɑæɔəɪʊʌθðŋʃʒ]/.test(trans)) {
    // 进一步判断：如果包含 IPA 字符和中文，且长度较短，可能是混入了
    // 这里放宽条件，仅当同时有明显的音标模式和中文时才报告
    if (trans.includes('ˈ') || trans.includes('ˌ') || trans.includes('ə') || trans.includes('ɪ') || trans.includes('æ')) {
      issues.push({ type: 'mixed_phone_trans', desc: `释义中疑似混入了音标: "${trans}"` });
    }
  }

  // 释义包含拼音式分段（如 "(da,s,i,te,ne,i,sheng)"）
  if (/\([a-zA-Z],/.test(trans) && trans.includes(',')) {
    issues.push({ type: 'pinyin_like', desc: `释义中包含拼音式音标分段: "${trans}"` });
  }

  // 释义中有连续多个逗号分隔的英文音标片段
  if (/[a-zA-Z],{2,}[a-zA-Z]/.test(trans) && HAS_CHINESE.test(trans)) {
    issues.push({ type: 'fragments', desc: `释义中包含碎片化音标: "${trans}"` });
  }

  return issues;
}

function main() {
  const allResults = [];
  let totalWords = 0;
  let totalMissingPhones = 0;
  let totalPhoneIssues = 0;
  let totalTransIssues = 0;

  for (const file of DICT_FILES) {
    const data = loadDict(file);
    if (!data) continue;

    const words = flattenWords(data);
    const dictName = data.name || file;
    totalWords += words.length;

    const dictIssues = {
      name: dictName,
      file,
      words: words.length,
      phoneIssues: [],
      transIssues: []
    };

    for (const w of words) {
      const wordName = w.name?.toString().trim() || '[空]';
      const { uk, us } = getPhones(w);
      const trans = getTrans(w);

      const phoneIssues = checkPhones(wordName, uk, us);
      const transIssues = checkTrans(wordName, trans);

      if (phoneIssues.length > 0) {
        totalPhoneIssues += phoneIssues.length;
        if (phoneIssues.some(i => i.type === 'missing')) totalMissingPhones++;
        dictIssues.phoneIssues.push({
          word: wordName,
          chapter: w.chapter,
          chapterIndex: w.chapterIndex,
          uk,
          us,
          issues: phoneIssues
        });
      }

      if (transIssues.length > 0) {
        totalTransIssues += transIssues.length;
        dictIssues.transIssues.push({
          word: wordName,
          chapter: w.chapter,
          chapterIndex: w.chapterIndex,
          trans,
          issues: transIssues
        });
      }
    }

    allResults.push(dictIssues);
  }

  // 打印摘要
  console.log('============================================================');
  console.log('     词库音标 + 释义 质量检查报告 v2                          ');
  console.log('============================================================\n');

  for (const r of allResults) {
    const phoneMissing = r.phoneIssues.filter(p => p.issues.some(i => i.type === 'missing')).length;
    const phoneOther = r.phoneIssues.length - phoneMissing;

    console.log(`${r.name} (${r.words} 词)`);
    console.log(`  音标问题: ${r.phoneIssues.length} 个 (缺失 ${phoneMissing}, 格式/内容 ${phoneOther})`);
    console.log(`  释义问题: ${r.transIssues.length} 个`);

    if (r.phoneIssues.length > 0) {
      console.log('  音标问题示例:');
      for (const pi of r.phoneIssues.slice(0, 5)) {
        const issueStr = pi.issues.map(i => i.desc).join('; ');
        console.log(`    [${pi.word}] uk="${pi.uk}" us="${pi.us}" -> ${issueStr}`);
      }
      if (r.phoneIssues.length > 5) console.log(`    ... 还有 ${r.phoneIssues.length - 5} 个`);
    }

    if (r.transIssues.length > 0) {
      console.log('  释义问题示例:');
      for (const ti of r.transIssues.slice(0, 5)) {
        const issueStr = ti.issues.map(i => i.desc).join('; ');
        console.log(`    [${ti.word}] "${ti.trans}" -> ${issueStr}`);
      }
      if (r.transIssues.length > 5) console.log(`    ... 还有 ${r.transIssues.length - 5} 个`);
    }

    console.log('');
  }

  console.log('============================================================');
  console.log('【汇总】');
  console.log(`总单词数: ${totalWords}`);
  console.log(`音标完全缺失: ${totalMissingPhones} 个单词`);
  console.log(`音标格式/内容问题: ${totalPhoneIssues - totalMissingPhones} 处`);
  console.log(`释义问题: ${totalTransIssues} 处`);
  console.log('============================================================');

  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalWords,
      totalMissingPhones,
      totalPhoneFormatIssues: totalPhoneIssues - totalMissingPhones,
      totalTransIssues
    },
    dictionaries: allResults.map(r => ({
      name: r.name,
      file: r.file,
      words: r.words,
      phoneIssueCount: r.phoneIssues.length,
      transIssueCount: r.transIssues.length,
      phoneIssues: r.phoneIssues,
      transIssues: r.transIssues
    }))
  };

  const reportPath = path.join(__dirname, '../reports/phonetics-trans-check-report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n详细报告已保存: ${reportPath}`);
}

main();
