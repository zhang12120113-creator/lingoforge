import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dictDir = path.join(__dirname, '../src/dictionaries');
const backupDir = path.join(__dirname, '../src/dictionaries_backup_run_' + Date.now());

if (!fs.existsSync(dictDir)) {
  throw new Error('未找到词库目录: ' + dictDir);
}

fs.mkdirSync(backupDir, { recursive: true });

const files = fs.readdirSync(dictDir).filter(f => f.endsWith('.json'));
files.forEach(f => {
  fs.copyFileSync(path.join(dictDir, f), path.join(backupDir, f));
});

console.log(`✅ 已备份 ${files.length} 个词库文件到:`);
console.log(`   ${backupDir}`);
console.log(`   如需回滚，手动复制回来即可`);
