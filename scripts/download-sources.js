const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const BASE_URL = 'https://raw.githubusercontent.com/KyleBing/english-vocabulary/master/json_original/json-sentence/';
const RAW_DIR = path.resolve(__dirname, './dict-data');

if (!fs.existsSync(RAW_DIR)) fs.mkdirSync(RAW_DIR, { recursive: true });

// 带重试的 fetch（解决 raw.githubusercontent.com 连接重置）
async function fetchWithRetry(url, retries = 3, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { timeout: 30000 });
      if (res.status === 404) return res; // 直接返回，让上层判断结束
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      if (i === retries - 1) throw err;
      console.log(`   第${i + 1}次失败: ${err.message}，${delay}ms后重试...`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

// 下载并合并分块文件（如 CET4_1.json + CET4_2.json + CET4_3.json）
async function downloadAndMerge(name, baseFile) {
  const chunks = [];
  let part = 1;
  let hasChunks = false;

  while (true) {
    const chunkName = `${baseFile}_${part}.json`;
    const url = `${BASE_URL}${chunkName}`;

    console.log(`[${name}] 尝试: ${chunkName}`);
    const res = await fetchWithRetry(url);

    if (res.status === 404) {
      if (part === 1) break; // 没有分块，去试单文件
      break; // 分块结束
    }

    hasChunks = true;
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error(`${chunkName} JSON解析失败`);
      throw e;
    }

    const arr = Array.isArray(data) ? data : (data.words || []);
    chunks.push(...arr);
    console.log(`   ${chunkName}: ${arr.length} 条`);
    part++;
  }

  // 如果没有分块，尝试下载单文件（如 IELTS.json）
  if (!hasChunks) {
    const singleName = `${baseFile}.json`;
    const url = `${BASE_URL}${singleName}`;
    console.log(`[${name}] 尝试单文件: ${singleName}`);
    const res = await fetchWithRetry(url);

    if (!res.ok) throw new Error(`${baseFile} 无分块也无单文件`);

    const text = await res.text();
    const data = JSON.parse(text);
    const arr = Array.isArray(data) ? data : (data.words || []);
    chunks.push(...arr);
    console.log(`   ${singleName}: ${arr.length} 条`);
  }

  // 保存合并后的文件
  const outPath = path.join(RAW_DIR, `${name}.json`);
  fs.writeFileSync(outPath, JSON.stringify(chunks, null, 2));
  console.log(`[${name}] 合并完成: ${chunks.length} 条 -> ${outPath}\n`);
}

// ==================== 执行 ====================
(async () => {
  const tasks = [
    { name: 'cet4',   base: 'CET4' },     // 会下载 CET4_1 + CET4_2 + CET4_3...
    { name: 'cet6',   base: 'CET6' },     // 会下载 CET6_1 + CET6_2...
    { name: 'ielts',  base: 'IELTS' },    // 可能单文件
    { name: 'toefl',  base: 'TOEFL' },    // 可能单文件
    { name: 'tem4',   base: 'TEM4' },     // 专四
    { name: 'tem8',   base: 'TEM8' },     // 专八
    { name: 'senior', base: 'Senior' },   // 高中（高考共用）
    { name: 'junior', base: 'Junior' },   // 初中（中考共用）
  ];

  for (const t of tasks) {
    try {
      await downloadAndMerge(t.name, t.base);
    } catch (e) {
      console.error(`[${t.name}] 失败:`, e.message);
    }
  }

  console.log('全部下载与合并任务结束');
})();
