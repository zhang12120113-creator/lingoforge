// scripts/fix-missing-dicts.js
const fs = require('fs');
const path = require('path');
const https = require('https');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DICT_DIR = path.join(PROJECT_ROOT, 'src', 'dictionaries');
if (!fs.existsSync(DICT_DIR)) fs.mkdirSync(DICT_DIR, { recursive: true });

// ==================== GitHub API 工具 ====================
async function fetchGitHubFile(owner, repo, pathInRepo) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${pathInRepo}`;
  return new Promise((resolve, reject) => {
    https.get(apiUrl, { timeout: 30000, headers: { 'User-Agent': 'fix-missing-dicts' } }, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`GitHub API Status ${res.statusCode}`));
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.content) {
            const decoded = Buffer.from(json.content, 'base64').toString('utf8');
            resolve(JSON.parse(decoded));
          } else {
            reject(new Error('API 响应中未包含 content 字段'));
          }
        } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

// ==================== 格式转换 ====================
function splitChapters(list, chunkSize = 25) {
  const chapters = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    chapters.push({
      id: chapters.length + 1,
      name: `章节${numberToChinese(Math.floor(i / chunkSize) + 1)}`,
      words: list.slice(i, i + chunkSize)
    });
  }
  return chapters;
}

function numberToChinese(num) {
  const cn = ['零','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十'];
  return num <= 30 ? cn[num] : `第${num}章`;
}

function normalizeItWord(item) {
  let transArr = [];
  if (Array.isArray(item.trans)) {
    transArr = item.trans.map(t => typeof t === 'string' ? t : '').filter(Boolean);
  }
  return {
    name: item.name || item.word || '',
    trans: transArr.length ? transArr : ['暂无释义'],
    ukphone: item.ukphone || '',
    usphone: item.usphone || ''
  };
}

// ==================== 主流程 ====================
async function main() {
  // 1. 中考英语 = 本地 junior.json 改名
  {
    console.log('\n📦 处理词库：中考英语 (zhongkao)');
    const srcPath = path.join(DICT_DIR, 'junior.json');
    const dict = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));
    dict.id = 'zhongkao';
    dict.name = '中考英语核心词汇';
    dict.description = '中考英语高频核心词汇';
    dict.category = '初中英语';
    dict.totalWords = dict.chapters.reduce((s, c) => s + c.words.length, 0);
    const outPath = path.join(DICT_DIR, 'zhongkao.json');
    fs.writeFileSync(outPath, JSON.stringify(dict, null, 2), 'utf-8');
    console.log(`  ✅ 已保存：${outPath}（${dict.totalWords} 词, ${dict.totalChapters} 章）`);
  }

  // 2. 高考英语 = 本地 senior.json 改名
  {
    console.log('\n📦 处理词库：高考英语 (gaokao)');
    const srcPath = path.join(DICT_DIR, 'senior.json');
    const dict = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));
    dict.id = 'gaokao';
    dict.name = '高考英语核心词汇';
    dict.description = '高考英语高频核心词汇';
    dict.category = '高中英语';
    dict.totalWords = dict.chapters.reduce((s, c) => s + c.words.length, 0);
    const outPath = path.join(DICT_DIR, 'gaokao.json');
    fs.writeFileSync(outPath, JSON.stringify(dict, null, 2), 'utf-8');
    console.log(`  ✅ 已保存：${outPath}（${dict.totalWords} 词, ${dict.totalChapters} 章）`);
  }

  // 3. 程序员常用词 = qwerty-learner itVocabulary.json
  {
    console.log('\n📦 处理词库：程序员常用词 (programmer)');
    try {
      const rawData = await fetchGitHubFile('RealKai42', 'qwerty-learner', 'public/dicts/itVocabulary.json');
      console.log(`  ✅ GitHub 下载成功，原始条数：${rawData.length}`);

      const words = [];
      const seen = new Set();
      for (const item of rawData) {
        const word = normalizeItWord(item);
        if (!word.name || seen.has(word.name.toLowerCase())) continue;
        seen.add(word.name.toLowerCase());
        words.push(word);
      }
      console.log(`  📝 去重后单词数：${words.length}`);

      const chapters = splitChapters(words, 25);
      const dict = {
        id: 'programmer',
        name: '程序员常见词汇',
        description: '程序员工作中高频使用的英语单词',
        category: '程序员英语',
        totalChapters: chapters.length,
        totalWords: words.length,
        chapters
      };

      const outPath = path.join(DICT_DIR, 'programmer.json');
      fs.writeFileSync(outPath, JSON.stringify(dict, null, 2), 'utf-8');
      console.log(`  ✅ 已保存：${outPath}（${dict.totalWords} 词, ${dict.totalChapters} 章）`);
    } catch (e) {
      console.error(`  🛑 programmer 词库获取失败：${e.message}`);
    }
  }

  console.log('\n🎉 词库修复完成！');
}

main().catch(console.error);
