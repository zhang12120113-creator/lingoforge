import fs from 'fs';
import path from 'path';

const DICT_DIR = 'src/dictionaries';
const QWERTY_DIR = 'scripts/dict-data/qwerty';

// ─── helpers ───

function loadDict(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveDict(filePath, dict) {
  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2) + '\n', 'utf8');
}

function getWords(dict) {
  const words = [];
  for (const ch of dict.chapters || []) {
    for (const w of ch.words || []) words.push(w);
  }
  return words;
}

function setWords(dict, words) {
  dict.chapters = [];
  const chunkSize = 25;
  for (let i = 0; i < words.length; i += chunkSize) {
    dict.chapters.push({
      id: dict.chapters.length,
      name: `第 ${dict.chapters.length + 1} 章`,
      words: words.slice(i, i + chunkSize)
    });
  }
  dict.totalChapters = dict.chapters.length;
  dict.totalWords = words.length;
}

function normalizeWord(w) {
  const out = { name: w.name };
  // phonetic
  if (w.usphone !== undefined) out.usphone = w.usphone;
  else if (w.us !== undefined) out.usphone = w.us;
  if (w.ukphone !== undefined) out.ukphone = w.ukphone;
  else if (w.uk !== undefined) out.ukphone = w.uk;
  // trans
  if (Array.isArray(w.trans)) out.trans = w.trans;
  else if (typeof w.trans === 'string') out.trans = [w.trans];
  else out.trans = [];
  return out;
}

function wordKey(w) {
  return (w.name || '').toLowerCase().trim();
}

function rebuildDict(dict, words) {
  const normWords = words.map(normalizeWord);
  setWords(dict, normWords);
  return dict;
}

// ─── 1. fix junior / zhongkao ───

function fixJuniorZhongkao() {
  console.log('\n=== 修复 junior / zhongkao ===');
  const junior = loadDict(path.join(DICT_DIR, 'junior.json'));
  const zhongkao = loadDict(path.join(DICT_DIR, 'zhongkao.json'));

  const juniorWords = getWords(junior);
  console.log('junior 原词数:', juniorWords.length);
  console.log('zhongkao 原词数:', getWords(zhongkao).length);

  // 从 junior 中选取词长<=8且按字母序靠前的800词作为中考高频
  const sorted = [...juniorWords].sort((a, b) => {
    const lenA = (a.name || '').length;
    const lenB = (b.name || '').length;
    if (lenA !== lenB) return lenA - lenB;
    return (a.name || '').localeCompare(b.name || '');
  });
  const selected = sorted.slice(0, 800);

  // 保持原有 zhongkao 的顶层结构
  const newZhongkao = { ...zhongkao, chapters: [] };
  rebuildDict(newZhongkao, selected);
  saveDict(path.join(DICT_DIR, 'zhongkao.json'), newZhongkao);
  console.log('新 zhongkao 词数:', newZhongkao.totalWords);
  console.log('新 zhongkao 章节数:', newZhongkao.totalChapters);
}

// ─── 2. fix senior / gaokao ───

function fixSeniorGaokao() {
  console.log('\n=== 修复 senior / gaokao ===');
  const senior = loadDict(path.join(DICT_DIR, 'senior.json'));
  const gaokao = loadDict(path.join(DICT_DIR, 'gaokao.json'));

  console.log('senior 原词数:', getWords(senior).length);
  console.log('gaokao 原词数:', getWords(gaokao).length);

  // 用 Qwerty GaoKao_3500 替换 senior
  const qwertySenior = loadDict(path.join(QWERTY_DIR, 'GaoKao_3500.json'));
  console.log('Qwerty GaoKao_3500 词数:', qwertySenior.length);

  const newSenior = { ...senior, chapters: [] };
  rebuildDict(newSenior, qwertySenior);
  saveDict(path.join(DICT_DIR, 'senior.json'), newSenior);
  console.log('新 senior 词数:', newSenior.totalWords);

  // 用 Qwerty GaoKaoZhenTiHeXinGaoPin 替换 gaokao
  const qwertyGaokao = loadDict(path.join(QWERTY_DIR, 'GaoKaoZhenTiHeXinGaoPin.json'));
  console.log('Qwerty GaoKaoZhenTiHeXinGaoPin 词数:', qwertyGaokao.length);

  const newGaokao = { ...gaokao, chapters: [] };
  rebuildDict(newGaokao, qwertyGaokao);
  saveDict(path.join(DICT_DIR, 'gaokao.json'), newGaokao);
  console.log('新 gaokao 词数:', newGaokao.totalWords);
}

// ─── 3. fix CET4 / CET6 ───

function fixCET() {
  console.log('\n=== 修复 CET4 / CET6 ===');
  const cet4 = loadDict(path.join(DICT_DIR, 'cet4.json'));
  const cet6 = loadDict(path.join(DICT_DIR, 'cet6.json'));
  const cet4freq = loadDict(path.join(DICT_DIR, 'cet4freq.json'));
  const cet6freq = loadDict(path.join(DICT_DIR, 'cet6freq.json'));

  const cet4Words = getWords(cet4).map(normalizeWord);
  const cet6Words = getWords(cet6).map(normalizeWord);
  console.log('CET4 词数:', cet4Words.length);
  console.log('CET6 词数:', cet6Words.length);

  // 构建映射
  const cet4Map = new Map();
  for (const w of cet4Words) cet4Map.set(wordKey(w), w);

  const cet6Map = new Map();
  for (const w of cet6Words) cet6Map.set(wordKey(w), w);

  // CET6-only 词
  const cet6Only = [];
  for (const w of cet6Words) {
    if (!cet4Map.has(wordKey(w))) cet6Only.push(w);
  }
  console.log('CET6-only 词数:', cet6Only.length);

  // 新 CET6 = CET4 + CET6-only
  const newCET6Words = [...cet4Words, ...cet6Only];
  console.log('新 CET6 词数:', newCET6Words.length);

  const newCET6 = { ...cet6, chapters: [] };
  rebuildDict(newCET6, newCET6Words);
  saveDict(path.join(DICT_DIR, 'cet6.json'), newCET6);

  // 新 CET6freq：从新 CET6 中取前1500词
  const newCET6freqWords = newCET6Words.slice(0, 1500);
  const newCET6freq = { ...cet6freq, chapters: [] };
  rebuildDict(newCET6freq, newCET6freqWords);
  saveDict(path.join(DICT_DIR, 'cet6freq.json'), newCET6freq);
  console.log('新 CET6freq 词数:', newCET6freq.totalWords);

  // 统一 CET4 和 CET4freq 格式
  const newCET4 = { ...cet4, chapters: [] };
  rebuildDict(newCET4, cet4Words);
  saveDict(path.join(DICT_DIR, 'cet4.json'), newCET4);

  const cet4freqWords = getWords(cet4freq).map(normalizeWord);
  const newCET4freq = { ...cet4freq, chapters: [] };
  rebuildDict(newCET4freq, cet4freqWords);
  saveDict(path.join(DICT_DIR, 'cet4freq.json'), newCET4freq);
}

// ─── 4. expand IELTS ───

function fixIELTS() {
  console.log('\n=== 扩充 IELTS ===');
  const ielts = loadDict(path.join(DICT_DIR, 'ielts.json'));
  const qwertyIELTS = loadDict(path.join(QWERTY_DIR, 'IELTS_3_T.json'));

  const currentWords = getWords(ielts).map(normalizeWord);
  const qwertyWords = qwertyIELTS.map(normalizeWord);
  console.log('当前 IELTS 词数:', currentWords.length);
  console.log('Qwerty IELTS 词数:', qwertyWords.length);

  // 合并去重，Qwerty 的释义优先
  const merged = new Map();
  for (const w of currentWords) merged.set(wordKey(w), w);
  for (const w of qwertyWords) merged.set(wordKey(w), w);

  const mergedWords = Array.from(merged.values());
  console.log('合并后 IELTS 词数:', mergedWords.length);

  const newIELTS = { ...ielts, chapters: [] };
  rebuildDict(newIELTS, mergedWords);
  saveDict(path.join(DICT_DIR, 'ielts.json'), newIELTS);
}

// ─── 5. update meta.js ───

function updateMeta() {
  console.log('\n=== 更新 meta.js ===');
  const metaPath = path.join(DICT_DIR, 'meta.js');
  let content = fs.readFileSync(metaPath, 'utf8');

  const dicts = ['junior', 'zhongkao', 'senior', 'gaokao', 'cet4', 'cet4freq', 'cet6', 'cet6freq', 'ielts'];
  for (const id of dicts) {
    const dict = loadDict(path.join(DICT_DIR, id + '.json'));
    const regex = new RegExp(`(id: '${id}',.*?)totalChapters: \d+, totalWords: \d+`, 's');
    content = content.replace(regex, `$1totalChapters: ${dict.totalChapters}, totalWords: ${dict.totalWords}`);
    console.log(`${id}: totalChapters=${dict.totalChapters}, totalWords=${dict.totalWords}`);
  }

  fs.writeFileSync(metaPath, content, 'utf8');
}

// ─── main ───

fixJuniorZhongkao();
fixSeniorGaokao();
fixCET();
fixIELTS();
updateMeta();

console.log('\n✅ 词库修复完成！');
