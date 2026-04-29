const fs = require('fs');
const path = require('path');

const DICTS_DIR = path.join(__dirname, '../src/dictionaries');

const DICT_FILES = [
  'junior.json', 'zhongkao.json', 'senior.json', 'gaokao.json',
  'cet4.json', 'cet4freq.json', 'cet6.json', 'cet6freq.json',
  'tem4.json', 'tem8.json', 'ielts.json', 'toefl.json', 'sat.json',
  'postgraduate.json', 'programmer.json'
];

const CACHE_FILE = path.join(__dirname, '../.youdao-phonetics-cache.json');

// 保守的英式 IPA -> 美式 IPA 转换
function ukToUs(phone) {
  if (!phone) return phone;
  return phone
    .replace(/\(r\)/g, 'r')           // 英式 (r) -> 美式 r
    .replace(/ɒ/g, 'ɑː')              // ɒ -> ɑː (hot, got)
    .replace(/əʊ/g, 'oʊ')             // əʊ -> oʊ (know, show)
    .replace(/eə/g, 'er')             // eə -> er (hair, care)
    .replace(/ɪə/g, 'ɪr')             // ɪə -> ɪr (near, here)
    .replace(/ʊə/g, 'ʊr');            // ʊə -> ʊr (tour, pure)
}

// 保守的美式 IPA -> 英式 IPA 转换
function usToUk(phone) {
  if (!phone) return phone;
  return phone
    .replace(/oʊ/g, 'əʊ')             // oʊ -> əʊ
    .replace(/ɑːr/g, 'ɑː')            // ɑːr -> ɑː (car, star) — 保守：只替换 ɑːr
    .replace(/ɜːr/g, 'ɜː')            // ɜːr -> ɜː (bird, word)
    .replace(/ɔːr/g, 'ɔː')            // ɔːr -> ɔː (more, door)
    .replace(/er\b/g, 'eə')           // er(词尾) -> eə
    .replace(/ɪr\b/g, 'ɪə')           // ɪr(词尾) -> ɪə
    .replace(/ʊr\b/g, 'ʊə');          // ʊr(词尾) -> ʊə
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

function main() {
  const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8')) : {};
  const dictData = {};
  const modifiedFiles = new Set();
  let totalFilled = 0;

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

        let changed = false;

        // 1. 优先用有道缓存补全缺失侧
        const cached = cache[word];
        if (cached) {
          if (!uk && cached.ukphone) {
            w[fields.uk] = cached.ukphone;
            console.log(`[${file}] ${word}: ${fields.uk} "" -> "${cached.ukphone}" (youdao)`);
            changed = true;
          }
          if (!us && cached.usphone) {
            w[fields.us] = cached.usphone;
            console.log(`[${file}] ${word}: ${fields.us} "" -> "${cached.usphone}" (youdao)`);
            changed = true;
          }
        }

        // 2. 智能转换补全
        const newUk = (w[fields.uk] ?? '').toString().trim();
        const newUs = (w[fields.us] ?? '').toString().trim();

        if (!newUk && newUs) {
          const converted = usToUk(newUs);
          w[fields.uk] = converted;
          console.log(`[${file}] ${word}: ${fields.uk} "" -> "${converted}" (us->uk)`);
          changed = true;
        }
        if (!newUs && newUk) {
          const converted = ukToUs(newUk);
          w[fields.us] = converted;
          console.log(`[${file}] ${word}: ${fields.us} "" -> "${converted}" (uk->us)`);
          changed = true;
        }

        if (changed) {
          totalFilled++;
          modifiedFiles.add(file);
        }
      }
    }
  }

  // 保存修改的文件
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

main();
