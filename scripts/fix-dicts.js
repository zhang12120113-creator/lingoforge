import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dictDir = path.join(__dirname, '../src/dictionaries');
const CHUNK = 25;

const dictMap = {
  '初中英语词汇': 'junior.json',
  '中考英语核心词汇': 'zhongkao.json',
  '高中英语词汇': 'senior.json',
  '高考英语核心词汇': 'gaokao.json',
  '英语4级': 'cet4.json',
  '英语4级高频': 'cet4freq.json',
  '英语6级': 'cet6.json',
  '英语6级高频': 'cet6freq.json',
  '英语专四': 'tem4.json',
  '英语专八': 'tem8.json',
  '雅思词汇': 'ielts.json',
  '托福词汇': 'toefl.json',
  'SAT词汇': 'sat.json',
  '考研词汇': 'postgraduate.json',
  '程序员常见词汇': 'programmer.json',
};

function loadDict(name) {
  const file = path.join(dictDir, dictMap[name]);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf-8'));
  return null;
}

function saveDict(name, data) {
  const file = path.join(dictDir, dictMap[name]);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log(`   💾 已保存: ${path.basename(file)}`);
}

function getAllWords(data) {
  if (!data || !Array.isArray(data.chapters)) return [];
  const words = [];
  for (const ch of data.chapters) {
    if (Array.isArray(ch.words)) words.push(...ch.words);
  }
  return words;
}

function rechunk(words, chapterTemplate) {
  const chapters = [];
  for (let i = 0; i < words.length; i += CHUNK) {
    const chunk = words.slice(i, i + CHUNK);
    chapters.push({
      id: Math.floor(i / CHUNK) + 1,
      name: chapterTemplate.replace('{id}', Math.floor(i / CHUNK) + 1),
      words: chunk
    });
  }
  return chapters;
}

function cleanWords(words) {
  // 删除无效条目（无 name 或无释义）
  words = words.filter(w => {
    if (!w.name || !w.name.trim()) return false;
    if (!w.trans) return false;
    if (Array.isArray(w.trans)) {
      return w.trans.length > 0 && w.trans.some(t => t && t.trim());
    }
    return String(w.trans).trim() !== '';
  });

  // 删除超长词和短语
  words = words.filter(w => {
    const n = w.name.trim();
    if (n.length > 25) return false;
    if (n.includes(' ') && n.length > 15) return false;
    return true;
  });

  // 内部去重（保留第一个）
  const seen = new Set();
  words = words.filter(w => {
    const key = w.name.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return words;
}

// ========== 1. 全量基础清洗 ==========
function cleanAll() {
  console.log(`\n🧹 全量词库基础清洗`);
  for (const [name, file] of Object.entries(dictMap)) {
    const data = loadDict(name);
    if (!data) continue;

    let words = getAllWords(data);
    const before = words.length;

    words = cleanWords(words);

    if (before !== words.length) {
      console.log(`   ${name}: ${before} → ${words.length} (清洗 ${before - words.length})`);
      const template = data.chapters[0]?.name?.includes('章节') ? '章节{id}' : '第 {id} 章';
      data.chapters = rechunk(words, template);
      data.totalChapters = data.chapters.length;
      saveDict(name, data);
    }
  }
}

// ========== 2. 专四专项修复 ==========
function fixTem4() {
  console.log(`\n🔧 修复: 英语专四`);
  const tem4Data = loadDict('英语专四');
  const tem8Data = loadDict('英语专八');
  const cet6Data = loadDict('英语6级');

  if (!tem4Data || !tem8Data) {
    console.log('   ❌ 未找到专四或专八词库');
    return;
  }

  let words = getAllWords(tem4Data);
  const before = words.length;

  // 基础清洗
  words = cleanWords(words);

  // 构建专八、六级词集合
  const tem8Words = cleanWords(getAllWords(tem8Data));
  const cet6Words = cleanWords(getAllWords(cet6Data));
  const tem8Set = new Set(tem8Words.map(w => w.name.toLowerCase().trim()));
  const cet6Set = new Set(cet6Words.map(w => w.name.toLowerCase().trim()));

  // 先尝试删除与专八重叠的词
  let afterTem8 = words.filter(w => !tem8Set.has(w.name.toLowerCase().trim()));
  console.log(`   删除与专八重叠: ${words.length - afterTem8.length} 词`);

  // 再删除与六级重叠的词
  let afterCet6 = afterTem8.filter(w => !cet6Set.has(w.name.toLowerCase().trim()));
  console.log(`   删除与六级重叠: ${afterTem8.length - afterCet6.length} 词`);

  // 保底策略：如果结果过少，说明重叠率极高，采用子集策略
  const tem8Size = tem8Set.size;
  const minThreshold = Math.floor(tem8Size * 0.3);

  if (afterCet6.length < minThreshold) {
    console.log(`   ⚠️ 删除后仅剩 ${afterCet6.length} 词，重叠率极高，启用保底策略`);

    // 策略：保留"专四独有" + "专四∩专八但不∩六级"的词
    const notInTem8 = words.filter(w => !tem8Set.has(w.name.toLowerCase().trim()));
    const inTem8NotCet6 = words.filter(w => {
      const key = w.name.toLowerCase().trim();
      return tem8Set.has(key) && !cet6Set.has(key);
    });

    afterCet6 = [...notInTem8, ...inTem8NotCet6];
    console.log(`   保底候选: ${notInTem8.length}(独有) + ${inTem8NotCet6.length}(专八共有不六级) = ${afterCet6.length}`);

    // 如果还超过目标，截取到专八的 ~70%
    const targetSize = Math.floor(tem8Size * 0.7);
    if (afterCet6.length > targetSize) {
      afterCet6 = afterCet6.slice(0, targetSize);
      console.log(`   截取到目标规模: ${afterCet6.length} 词`);
    }
  }

  words = afterCet6;
  console.log(`   结果: ${before} → ${words.length} 词 (删除 ${before - words.length})`);

  // 保存
  const template = tem4Data.chapters[0]?.name?.includes('章节') ? '章节{id}' : '第 {id} 章';
  tem4Data.chapters = rechunk(words, template);
  tem4Data.totalChapters = tem4Data.chapters.length;
  saveDict('英语专四', tem4Data);
}

// ========== 3. 重新核对章节数 ==========
function rechunkAll() {
  console.log(`\n📐 章节数核对 (${CHUNK}词/章)`);
  for (const [name, file] of Object.entries(dictMap)) {
    const data = loadDict(name);
    if (!data) continue;

    const words = getAllWords(data);
    const chapters = Math.ceil(words.length / CHUNK);

    // 如果章节结构不一致或超出，重新分章
    const needsRechunk = data.chapters.some(ch => ch.words.length > CHUNK) ||
                         data.totalChapters !== chapters;

    if (needsRechunk) {
      const template = data.chapters[0]?.name?.includes('章节') ? '章节{id}' : '第 {id} 章';
      data.chapters = rechunk(words, template);
      data.totalChapters = data.chapters.length;
      saveDict(name, data);
    }

    console.log(`   ${name}: ${words.length} 词 / ${CHUNK} = ${data.totalChapters} 章`);
  }
}

// 执行
cleanAll();
fixTem4();
rechunkAll();
console.log(`\n✅ 修复完成。请运行 npm run dev 本地验证`);
