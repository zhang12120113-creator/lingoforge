const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const AdmZip = require('adm-zip');

const BASE_URL = 'https://cdn.jsdelivr.net/gh/kajweb/dict@master/book/';
const TMP_DIR = path.resolve(__dirname, './.tmp');
const DICT_DIR = path.resolve(__dirname, '../src/dictionaries');

if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
if (!fs.existsSync(DICT_DIR)) fs.mkdirSync(DICT_DIR, { recursive: true });

const dictionaryMeta = {
  junior:       { name: '初中英语词汇', category: '初中英语', description: '初中阶段必学英语词汇', totalChapters: 15, color: 'bg-green-400' },
  senior:       { name: '高中英语词汇', category: '高中英语', description: '高中阶段必学英语词汇', totalChapters: 20, color: 'bg-teal-500' },
  tem4:         { name: '英语专四',     category: '英语专四', description: '英语专业四级考试核心词汇', totalChapters: 20, color: 'bg-purple-500' },
  tem8:         { name: '英语专八',     category: '英语专八', description: '英语专业八级考试核心词汇', totalChapters: 25, color: 'bg-fuchsia-500' },
  ielts:        { name: '雅思词汇',     category: '雅思',     description: '雅思考试核心词汇', totalChapters: 20, color: 'bg-pink-500' },
  toefl:        { name: '托福词汇',     category: '托福',     description: '托福考试核心词汇', totalChapters: 24, color: 'bg-rose-500' },
  sat:          { name: 'SAT 词汇',     category: 'SAT',      description: 'SAT 考试核心词汇', totalChapters: 20, color: 'bg-orange-500' },
  postgraduate: { name: '考研词汇',     category: '考研',     description: '考研英语核心词汇', totalChapters: 24, color: 'bg-blue-600' },
};

async function fetchWithRetry(url, retries = 3, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { timeout: 120000 });
      if (res.status === 404) return res;
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      if (i === retries - 1) throw err;
      console.log(`   ⚠️ 第${i + 1}次失败，${delay}ms后重试...`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

function convertKajwebLine(lineObj) {
  const wordContent = lineObj.content?.word?.content;
  if (!wordContent) return null;

  const trans = (wordContent.trans || [])
    .map(t => t.tranCn)
    .filter(Boolean);

  return {
    name: lineObj.headWord,
    usphone: wordContent.usphone || '',
    ukphone: wordContent.ukphone || '',
    trans: trans.length > 0 ? trans : [''],
  };
}

function splitIntoChapters(words, totalChapters) {
  const perChapter = Math.max(1, Math.ceil(words.length / totalChapters));
  const chapters = [];
  for (let i = 0; i < words.length; i += perChapter) {
    const chunk = words.slice(i, i + perChapter);
    const chapterNum = chapters.length + 1;
    chapters.push({
      id: `${String(chapterNum).padStart(2, '0')}`,
      name: `Chapter ${chapterNum}`,
      words: chunk,
    });
  }
  return chapters;
}

async function downloadAndBuild(name, zipCandidates) {
  const meta = dictionaryMeta[name];
  if (!meta) {
    console.error(`[${name}] 无元数据定义，跳过`);
    return false;
  }

  for (const zipName of zipCandidates) {
    const url = `${BASE_URL}${zipName}`;
    process.stdout.write(`[${name}] 尝试: ${zipName} ... `);

    const res = await fetchWithRetry(url);
    if (!res.ok) {
      console.log('❌ 下载失败');
      continue;
    }

    const buf = Buffer.from(await res.arrayBuffer());
    const tmpZipPath = path.join(TMP_DIR, `${name}_${Date.now()}.zip`);
    fs.writeFileSync(tmpZipPath, buf);

    try {
      const zip = new AdmZip(tmpZipPath);
      const entries = zip.getEntries().filter(e => e.entryName.endsWith('.json'));
      if (entries.length === 0) {
        console.log('❌ zip 内无 JSON 文件');
        fs.unlinkSync(tmpZipPath);
        continue;
      }

      const text = zip.readAsText(entries[0]);
      const lines = text.split('\n').filter(l => l.trim());

      const words = [];
      for (const line of lines) {
        try {
          const obj = JSON.parse(line);
          const word = convertKajwebLine(obj);
          if (word) words.push(word);
        } catch {
          // skip malformed lines
        }
      }

      if (words.length === 0) {
        console.log('❌ 无有效单词数据');
        fs.unlinkSync(tmpZipPath);
        continue;
      }

      const chapters = splitIntoChapters(words, meta.totalChapters);

      const dictionary = {
        id: name,
        name: meta.name,
        description: meta.description,
        category: meta.category,
        totalChapters: chapters.length,
        chapters,
      };

      const outPath = path.join(DICT_DIR, `${name}.json`);
      fs.writeFileSync(outPath, JSON.stringify(dictionary, null, 2));
      console.log(`✅ 成功 (${words.length} 词, ${chapters.length} 章)`);
      fs.unlinkSync(tmpZipPath);
      return true;
    } catch (e) {
      console.log(`❌ 处理失败: ${e.message}`);
      if (fs.existsSync(tmpZipPath)) fs.unlinkSync(tmpZipPath);
      continue;
    }
  }

  console.error(`\n❌ [${name}] 所有候选文件均失败`);
  return false;
}

(async () => {
  const tasks = [
    { name: 'junior',       files: ['1521164669076_ChuZhongluan_2.zip', '1521164647926_ChuZhong_2.zip', '1521164652700_ChuZhong_3.zip'] },
    { name: 'senior',       files: ['1521164673602_GaoZhongluan_2.zip', '1521164679263_GaoZhong_3.zip'] },
    { name: 'toefl',        files: ['1521164640451_TOEFL_2.zip', '1521164667985_TOEFL_3.zip'] },
    { name: 'ielts',        files: ['1521164624473_IELTSluan_2.zip', '1521164657744_IELTS_2.zip', '1521164666922_IELTS_3.zip'] },
    { name: 'tem4',         files: ['1521164625401_Level4luan_2.zip', '1521164630387_Level4luan_1.zip', '1521164647417_Level4_1.zip', '1521164653685_Level4_2.zip'] },
    { name: 'tem8',         files: ['1521164650006_Level8luan_2.zip', '1521164635290_Level8_1.zip', '1521164663794_Level8_2.zip'] },
    { name: 'sat',          files: ['1521164670910_SAT_2.zip', '1521164636496_SAT_3.zip'] },
    { name: 'postgraduate', files: ['1521164654696_KaoYan_2.zip', '1521164661106_KaoYanluan_1.zip', '1521164658897_KaoYan_3.zip'] },
  ];

  for (const t of tasks) {
    await downloadAndBuild(t.name, t.files);
  }

  console.log('\n🎉 kajweb/dict 下载与转换阶段结束');
})();
