const fs = require('fs');
const path = require('path');

const DICTS_DIR = path.join(__dirname, '../src/dictionaries');

const DICT_FILES = [
  'junior.json', 'zhongkao.json', 'senior.json', 'gaokao.json',
  'cet4.json', 'cet4freq.json', 'cet6.json', 'cet6freq.json',
  'tem4.json', 'tem8.json', 'ielts.json', 'toefl.json', 'sat.json',
  'postgraduate.json', 'programmer.json'
];

// ============ 修复规则 ============

function fixPhoneField(value) {
  if (!value || typeof value !== 'string') return value;
  let v = value;

  // 1. 中文分号 → 英文分号
  v = v.replace(/；/g, ';');

  // 2. 移除外层方括号（但保留内部内容）
  // 如 [ˈbʌtn] → ˈbʌtn
  if (/^\[.*\]$/.test(v)) {
    v = v.slice(1, -1);
  }

  // 3. 统一分隔符：多个音标变体用 ; 分隔，去除多余空格
  v = v.replace(/\s*;\s*/g, '; ').trim();

  return v;
}

function fixTransArray(transArray) {
  if (!Array.isArray(transArray)) return transArray;
  return transArray.map(item => fixTransString(item));
}

function fixTransString(str) {
  if (!str || typeof str !== 'string') return str;
  let s = str;

  // minute 等词：释义末尾混入音标，形如 "... [maɪˈnjuːt; US -ˈnuːt; maɪˋnut]"
  // 匹配 " [音标内容]" 或末尾的音标块
  s = s.replace(/\s*\[[maɪˈˌːɑæɔəɪʊʌθðŋʃʒa-zA-Z\s,;US\.\-ˋ]+\]$/g, '');

  return s;
}

function processDict(data, fileName) {
  if (!data || !Array.isArray(data.chapters)) return data;

  let modified = false;

  for (const ch of data.chapters) {
    if (!Array.isArray(ch.words)) continue;

    for (const w of ch.words) {
      const wordName = w.name?.toString().trim() || '';

      // === 修复音标字段 ===
      const phoneFields = ['uk', 'us', 'ukphone', 'usphone'];
      for (const field of phoneFields) {
        if (w[field] != null) {
          const original = Array.isArray(w[field]) ? w[field].join(' ') : String(w[field]);
          const fixed = fixPhoneField(original);
          if (fixed !== original) {
            w[field] = fixed;
            modified = true;
            console.log(`[${fileName}] ${wordName}: ${field} "${original}" -> "${fixed}"`);
          }
        }
      }

      // === 修复释义字段 ===
      if (w.trans != null) {
        if (Array.isArray(w.trans)) {
          const originalArr = [...w.trans];
          w.trans = fixTransArray(w.trans);
          // 额外：移除释义末尾的空字符串
          w.trans = w.trans.filter(s => s && String(s).trim() !== '');
          if (JSON.stringify(originalArr) !== JSON.stringify(w.trans)) {
            modified = true;
            console.log(`[${fileName}] ${wordName}: trans cleaned`);
          }
        } else {
          const original = String(w.trans);
          const fixed = fixTransString(original);
          if (fixed !== original) {
            w.trans = fixed;
            modified = true;
            console.log(`[${fileName}] ${wordName}: trans "${original}" -> "${fixed}"`);
          }
        }
      }

      // === 特殊处理：CET6 associate/protest/survey ===
      if (fileName === 'cet6.json') {
        if (wordName === 'associate') {
          // trans: "[v] 把…联系在一起；使联合，结合；交往\t[ə'səuʃiət]; [adj]  副的; [n] 伙伴，同事"
          // 移除 \t[ə'səuʃiət]; 这部分
          if (typeof w.trans === 'string') {
            const orig = w.trans;
            w.trans = w.trans.replace(/\t\[ə'səuʃiət\];?/g, '');
            if (w.trans !== orig) {
              modified = true;
              console.log(`[${fileName}] ${wordName}: trans "${orig}" -> "${w.trans}"`);
            }
          }
        }
        if (wordName === 'protest') {
          // trans: "[v] ['prəutest]; [n]  抗议， 反对"
          if (typeof w.trans === 'string') {
            const orig = w.trans;
            w.trans = w.trans.replace(/\['prəutest\];?/g, '');
            if (w.trans !== orig) {
              modified = true;
              console.log(`[${fileName}] ${wordName}: trans "${orig}" -> "${w.trans}"`);
            }
          }
        }
        if (wordName === 'survey') {
          // trans: "[v]  俯瞰， 眺望； 全面审视， 调查； 测量， 勘定; [n] [sə'veɪ]"
          if (typeof w.trans === 'string') {
            const orig = w.trans;
            w.trans = w.trans.replace(/\[sə'veɪ\]/g, '');
            if (w.trans !== orig) {
              modified = true;
              console.log(`[${fileName}] ${wordName}: trans "${orig}" -> "${w.trans}"`);
            }
          }
        }
      }

      // === 程序员词库：清理拼音式音标分段 ===
      if (fileName === 'programmer.json') {
        if (Array.isArray(w.trans)) {
          const origArr = [...w.trans];
          w.trans = w.trans.map(item => {
            if (typeof item !== 'string') return item;
            // 匹配 "(e,ke,run,si)" 等拼音式分段
            // 也匹配 "(a,pe,dei,te)" 等
            return item.replace(/\s*\([a-zA-Z,]+\)\s*$/g, '').trim();
          }).filter(s => s && String(s).trim() !== '');
          if (JSON.stringify(origArr) !== JSON.stringify(w.trans)) {
            modified = true;
            console.log(`[${fileName}] ${wordName}: removed pinyin-like fragments`);
          }
        } else if (typeof w.trans === 'string') {
          const orig = w.trans;
          w.trans = w.trans.replace(/\s*\([a-zA-Z,]+\)\s*$/g, '').trim();
          if (w.trans !== orig) {
            modified = true;
            console.log(`[${fileName}] ${wordName}: trans "${orig}" -> "${w.trans}"`);
          }
        }
      }
    }
  }

  return { data, modified };
}

function main() {
  let totalModified = 0;

  for (const file of DICT_FILES) {
    const fp = path.join(DICTS_DIR, file);
    if (!fs.existsSync(fp)) {
      console.log(`跳过不存在: ${file}`);
      continue;
    }

    const raw = fs.readFileSync(fp, 'utf-8');
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      console.error(`解析失败 ${file}: ${e.message}`);
      continue;
    }

    const { data: fixedData, modified } = processDict(data, file);
    if (modified) {
      fs.writeFileSync(fp, JSON.stringify(fixedData, null, 2) + '\n', 'utf-8');
      totalModified++;
      console.log(`✅ 已保存: ${file}`);
    } else {
      console.log(`⏭️ 无修改: ${file}`);
    }
  }

  console.log(`\n======== 完成 ========`);
  console.log(`共修改 ${totalModified} 个文件`);
}

main();
