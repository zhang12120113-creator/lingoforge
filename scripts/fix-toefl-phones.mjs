import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOEFL_PATH = path.join(__dirname, '..', 'src', 'dictionaries', 'toefl.json');

// 拼写修正映射
const TYPO_FIXES = {
  'eletricity': { correct: 'electricity', usphone: 'ɪˌlekˈtrɪsəti', ukphone: 'ɪˌlekˈtrɪsəti' },
  'misinterprete': { correct: 'misinterpret', usphone: 'ˌmɪsɪnˈtɜːrprɪt', ukphone: 'ˌmɪsɪnˈtɜːprɪt' },
  'datebase': { correct: 'database', usphone: 'ˈdeɪtəbeɪs', ukphone: 'ˈdeɪtəbeɪs' },
  'merchandis': { correct: 'merchandise', usphone: 'ˈmɜːrtʃəndaɪs', ukphone: 'ˈmɜːtʃəndaɪz' },
  'guilde': { correct: 'guild', usphone: 'ɡɪld', ukphone: 'ɡɪld' },
};

// 已知音标的专有名词和罕见词
const KNOWN_PHONES = {
  'Himalaya': { usphone: 'ˌhɪməˈleɪə', ukphone: 'ˌhɪməˈleɪə' },
  'Netherland': { usphone: 'ˈneðərlænd', ukphone: 'ˈneðəlænd' },
  'ppm': { usphone: 'piː piː ˈem', ukphone: 'piː piː ˈem' },
  'nss': { usphone: 'en es ˈes', ukphone: 'en es ˈes' },
  'aie': { usphone: 'eɪ aɪ ˈiː', ukphone: 'eɪ aɪ ˈiː' },
  'eka': { usphone: 'ˈekə', ukphone: 'ˈekə' },
};

// 复合词音标拼接规则
const COMPOUND_RULES = {
  'overirrigation': ['over', 'irrigation'],
  'paleoecologist': ['paleo', 'ecologist'],
  'mudflats': ['mud', 'flats'],
  'nowcasting': ['now', 'casting'],
  'basketmaking': ['basket', 'making'],
  'semimolten': ['semi', 'molten'],
  'overcultivation': ['over', 'cultivation'],
  'leafcutter': ['leaf', 'cutter'],
  'verbalizable': ['verbal', 'izable'],
  'circumstantially': ['circumstantial', 'ly'],
  'cloudlike': ['cloud', 'like'],
  'hydroponically': ['hydroponic', 'ally'],
  'unselective': ['un', 'selective'],
  'geothermally': ['geothermal', 'ly'],
  'untraditional': ['un', 'traditional'],
  'uncarved': ['un', 'carved'],
  'needlelike': ['needle', 'like'],
  'sugarlike': ['sugar', 'like'],
  'unsureness': ['unsure', 'ness'],
  'nonelectronic': ['non', 'electronic'],
  'colorfully': ['colorful', 'ly'],
  'scrubbiness': ['scrubby', 'ness'],
  'proficiently': ['proficient', 'ly'],
  'megafossil': ['mega', 'fossil'],
  'skeletally': ['skeletal', 'ly'],
  'muscularly': ['muscular', 'ly'],
  'plantlike': ['plant', 'like'],
  'homeownership': ['home', 'ownership'],
  'humanlike': ['human', 'like'],
  'oppositely': ['opposite', 'ly'],
  'midcontinent': ['mid', 'continent'],
  'midocean': ['mid', 'ocean'],
  'glasslike': ['glass', 'like'],
  'agriculturally': ['agricultural', 'ly'],
  'hydrologic': ['hydro', 'logic'],
  'prairies': ['prairie', 's'],
};

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

// 从词库中查找词的音标
function findPhoneInDict(data, word) {
  for (const chapter of data.chapters) {
    for (const w of chapter.words) {
      if (w.name === word && (w.usphone || w.ukphone)) {
        return { usphone: w.usphone || '', ukphone: w.ukphone || '' };
      }
    }
  }
  return null;
}

// 生成复合词音标
function buildCompoundPhone(data, parts) {
  const phones = [];
  for (const part of parts) {
    const phone = findPhoneInDict(data, part);
    if (phone && phone.usphone) {
      phones.push(phone.usphone);
    } else {
      return null;
    }
  }
  return { usphone: phones.join(' '), ukphone: phones.join(' ') };
}

async function main() {
  const data = JSON.parse(fs.readFileSync(TOEFL_PATH, 'utf-8'));
  const wordsToFix = [
    'ogallala','Yucatan','Himalaya','beringia','lomas','allende','eka',
    'overirrigation','lumiere','midcontinent','oppositely','nss','glasslike',
    'hydrologic','prairies','paleoecologist','guilde','ppm','mudflats',
    'agriculturally','nowcasting','mesopotamian','basketmaking','weldon',
    'duchenne','semimolten','overcultivation','keplerian','Netherland',
    'eletricity','leafcutter','lvory','verbalizable','circumstantially',
    'cloudlike','hydroponically','loder','unselective','geothermally',
    'untraditional','bergere','misinterprete','uncarved','needlelike',
    'sugarlike','unsureness','datebase','reaumur','nonelectronic',
    'colorfully','scrubbiness','proficiently','rainer','midocean',
    'merchandis','megafossil','skeletally','muscularly','aie','plantlike',
    'homeownership','newberry','sargeant','rarer','humanlike','bryn'
  ];

  const results = { fixed: 0, youdao: 0, compound: 0, failed: [] };

  // 1. 处理拼写错误
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      if (TYPO_FIXES[word.name]) {
        const fix = TYPO_FIXES[word.name];
        console.log(`📝 修正拼写: ${word.name} → ${fix.correct}`);
        word.name = fix.correct;
        word.usphone = fix.usphone;
        word.ukphone = fix.ukphone;
        results.fixed++;
      }
    }
  }

  // 2. 处理已知音标
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      if (KNOWN_PHONES[word.name] && !word.usphone) {
        const phone = KNOWN_PHONES[word.name];
        word.usphone = phone.usphone;
        word.ukphone = phone.ukphone;
        console.log(`📌 已知音标: ${word.name}`);
        results.fixed++;
      }
    }
  }

  // 3. 用有道 API 查询剩余无音标词
  const remaining = [];
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      if (wordsToFix.includes(word.name) && !word.usphone) {
        remaining.push(word);
      }
    }
  }

  console.log(`\n🎯 有道 API 查询 ${remaining.length} 个词...`);
  const BATCH_SIZE = 30;
  const DELAY_MS = 500;

  for (let i = 0; i < remaining.length; i += BATCH_SIZE) {
    const batch = remaining.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(remaining.length / BATCH_SIZE);
    process.stdout.write(`\r  Batch ${batchNum}/${totalBatches} (${i + 1}-${Math.min(i + BATCH_SIZE, remaining.length)})... `);

    const batchResults = await Promise.all(batch.map(w => fetchYoudao(w.name)));

    for (let j = 0; j < batch.length; j++) {
      const word = batch[j];
      const r = batchResults[j];
      if (r.success) {
        word.usphone = r.usphone;
        word.ukphone = r.ukphone;
        results.youdao++;
      }
    }

    if (i + BATCH_SIZE < remaining.length) {
      await sleep(DELAY_MS);
    }
  }
  console.log('');

  // 4. 用复合词规则填充剩余
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      if (wordsToFix.includes(word.name) && !word.usphone && COMPOUND_RULES[word.name]) {
        const parts = COMPOUND_RULES[word.name];
        const phone = buildCompoundPhone(data, parts);
        if (phone) {
          word.usphone = phone.usphone;
          word.ukphone = phone.ukphone;
          console.log(`🔧 复合词: ${word.name} = ${parts.join(' + ')}`);
          results.compound++;
        } else {
          results.failed.push(word.name);
        }
      }
    }
  }

  // 5. 再次检查仍未解决的
  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      if (wordsToFix.includes(word.name) && !word.usphone) {
        if (!results.failed.includes(word.name)) {
          results.failed.push(word.name);
        }
      }
    }
  }

  // 保存
  fs.writeFileSync(TOEFL_PATH, JSON.stringify(data, null, 2));

  console.log(`\n✅ 完成:`);
  console.log(`   拼写修正: ${results.fixed}`);
  console.log(`   有道 API: ${results.youdao}`);
  console.log(`   复合词拼接: ${results.compound}`);
  console.log(`   未解决: ${results.failed.length}`);
  if (results.failed.length > 0) {
    console.log(`   未解决: ${results.failed.join(', ')}`);
  }
}

main().catch(console.error);
