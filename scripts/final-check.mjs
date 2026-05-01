import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dictDir = path.join(__dirname, '..', 'src', 'dictionaries');

function loadDict(name) {
  return JSON.parse(fs.readFileSync(path.join(dictDir, `${name}.json`), 'utf-8'));
}

// 1. 检查 CET4Freq 和 CET6Freq 是否真的完全相同
console.log('=== CET4Freq vs CET6Freq 全量对比 ===');
const c4f = loadDict('cet4freq');
const c6f = loadDict('cet6freq');
let identical = true;
for (let ci = 0; ci < Math.min(c4f.chapters.length, c6f.chapters.length); ci++) {
  const ch4 = c4f.chapters[ci];
  const ch6 = c6f.chapters[ci];
  if (ch4.words.length !== ch6.words.length) {
    identical = false;
    console.log(`  章节${ci} 单词数不同: ${ch4.words.length} vs ${ch6.words.length}`);
    break;
  }
  for (let wi = 0; wi < ch4.words.length; wi++) {
    const w4 = ch4.words[wi];
    const w6 = ch6.words[wi];
    if (w4.name !== w6.name || w4.usphone !== w6.usphone || w4.ukphone !== w6.ukphone) {
      identical = false;
      console.log(`  差异 [${ci}][${wi}]: c4=${JSON.stringify(w4).slice(0,60)} c6=${JSON.stringify(w6).slice(0,60)}`);
      if (ci > 3) break;
    }
  }
  if (!identical && ci > 3) break;
}
console.log(`  完全相同: ${identical}`);

// 2. 检查音标中的常见问题
console.log('\n=== 常见音标问题检查 ===');
const dicts = ['cet4', 'cet6', 'gaokao', 'ielts', 'senior', 'zhongkao', 'cet4freq', 'cet6freq'];
const suspiciousPhones = [];
for (const d of dicts) {
  const data = loadDict(d);
  for (const ch of data.chapters) {
    for (const w of ch.words) {
      for (const field of ['usphone', 'ukphone']) {
        const p = w[field];
        if (!p || typeof p !== 'string') continue;
        // 检查是否包含数字（音标不应该有数字）
        if (/\d/.test(p) && !/CD|VCD/.test(w.name)) {
          suspiciousPhones.push(`[${d}][${w.name}] ${field} contains number: "${p}"`);
        }
        // 检查是否有中文字符
        if (/[一-鿿]/.test(p)) {
          suspiciousPhones.push(`[${d}][${w.name}] ${field} contains Chinese: "${p}"`);
        }
        // 检查是否异常长
        if (p.length > 50) {
          suspiciousPhones.push(`[${d}][${w.name}] ${field} too long (${p.length}): "${p}"`);
        }
        // 检查是否有连续多个空格
        if (/  +/.test(p)) {
          suspiciousPhones.push(`[${d}][${w.name}] ${field} has multiple spaces: "${p}"`);
        }
        // 检查是否同时包含英美音标特征（可能是合并的）
        if (p.includes(';') || p.includes(',')) {
          // 多个变体音标，记录但不视为错误
        }
      }
    }
  }
}
console.log(`  可疑音标数: ${suspiciousPhones.length}`);
for (const s of suspiciousPhones.slice(0, 20)) console.log(`    ${s}`);

// 3. 检查释义中的问题
console.log('\n=== 释义问题检查 ===');
const suspiciousTrans = [];
for (const d of dicts) {
  const data = loadDict(d);
  for (const ch of data.chapters) {
    for (const w of ch.words) {
      if (!Array.isArray(w.trans)) continue;
      for (const t of w.trans) {
        if (typeof t !== 'string') {
          suspiciousTrans.push(`[${d}][${w.name}] trans is not string: ${JSON.stringify(t)}`);
          continue;
        }
        // 检查释义是否纯英文（应该有中文）
        if (!/[一-鿿]/.test(t) && !/^\[[a-z]+\]/i.test(t)) {
          suspiciousTrans.push(`[${d}][${w.name}] trans has no Chinese: "${t.slice(0,60)}"`);
        }
        // 检查是否有明显乱码
        if (/[�ï¿½]/.test(t)) {
          suspiciousTrans.push(`[${d}][${w.name}] trans has garbage chars: "${t.slice(0,60)}"`);
        }
      }
    }
  }
}
console.log(`  可疑释义词数: ${suspiciousTrans.length}`);
for (const s of suspiciousTrans.slice(0, 20)) console.log(`    ${s}`);

// 4. 检查 SENIOR 中异常单词的释义
console.log('\n=== Senior 异常单词释义 ===');
const senior = loadDict('senior');
const badWords = ['ballpoint = ballpoint pen', 'bike = bicycle', 'dad = daddy', 'disk =disc',
  "does doesn't = does not", 'drier =dryer', 'exam = examination', 'fridge =refrigerator',
  'grandma = grandmother', 'grandpa = grandfather', 'grey / gray', 'gym =gymnasium',
  'Lost & Found', 'madam/ madame', 'mathematics =math / maths', 'Mom =Mum',
  'mommy = mummy', 'phone = telephone', 'photo =photograph', 'pop = popular',
  'VCD = versatile compact disk'];
for (const ch of senior.chapters) {
  for (const w of ch.words) {
    if (badWords.includes(w.name)) {
      console.log(`  [${w.name}] usphone=${w.usphone}, ukphone=${w.ukphone}, trans=${JSON.stringify(w.trans)}`);
    }
  }
}

// 5. 检查每个词典的 totalWords 和实际单词数是否一致
console.log('\n=== 单词数一致性检查 ===');
for (const d of dicts) {
  const data = loadDict(d);
  let actual = 0;
  for (const ch of data.chapters) actual += ch.words.length;
  const diff = actual - (data.totalWords || 0);
  if (diff !== 0) {
    console.log(`  ${d}: declared=${data.totalWords}, actual=${actual}, diff=${diff > 0 ? '+' : ''}${diff}`);
  }
}

// 6. 检查 chapter id 是否连续
console.log('\n=== 章节 ID 连续性检查 ===');
for (const d of dicts) {
  const data = loadDict(d);
  const ids = data.chapters.map(c => c.id).sort((a,b) => a-b);
  let missing = [];
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] !== i) missing.push(i);
  }
  if (missing.length > 0) {
    console.log(`  ${d}: missing chapter ids: ${missing.slice(0,10).join(', ')}`);
  }
}
