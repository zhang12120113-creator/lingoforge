import fs from 'fs';

const cnTitles = [
  "职场特权感与道德领导力",
  "招聘中的社交媒体审查",
  "食品标签与缺失声明",
  "绘画作为学习工具",
  "遗传学、智力与歧视",
  "旅游税与过度旅游",
  "公共卫生与肥胖危机",
  "自动化与就业",
  "国籍与文化价值观",
  "失眠与工作文化",
  "有机农业与可持续发展",
  "大众旅游时代的艺术欣赏",
  "植物性饮食与全球营养",
  "空气污染与绿地价值",
  "镜像、模仿与原创性",
  "珊瑚海海洋保护区提案",
  "创造力、艺术教育与人类发展",
  "农业与环境可持续性",
  "大学提前录取决策",
  "工作自尊与动机",
  "联合国自然资源退化环境研究",
  "学生贷款债务减免",
  "音乐制作中的人工智能",
  "人工智能与人类选择",
  "自然拼读教学法",
  "职场监控与监视",
  "数字鸿沟与社交媒体",
  "气候变化怀疑论与常识",
  "广告与儿童",
  "讽刺与爵士：幽默中的隐性敌意",
  "变异性在学习中的作用",
  "核能与环境分歧",
  "恐怖悖论：我们为何追寻恐惧",
  "Instagram脸与数字审美理想",
  "获准与未获准的缺课",
  "追随热情：重新审视职业建议",
  "势利的本质与演变",
  "性别薪酬差距：原因与解决方案",
  "组织变革与模拟器的作用",
  "GDP增长与追求幸福"
];

const filePath = 'src/modules/reading/data/mockArticles4.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Split into lines for processing
const lines = content.split('\n');
const resultLines = [];
let titleIndex = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  resultLines.push(line);

  // Match lines like: title: "Some Title",
  const match = line.match(/^(\s+title:\s*")(.+)(",?\s*)$/);
  if (match) {
    const indent = match[1].match(/^(\s+)/)[1];
    const comma = match[3].includes(',') ? ',' : '';
    const cnTitleLine = `${indent}cnTitle: "${cnTitles[titleIndex]}"${comma}`;
    resultLines.push(cnTitleLine);
    titleIndex++;
  }
}

if (titleIndex !== cnTitles.length) {
  console.error(`Warning: expected ${cnTitles.length} titles, found ${titleIndex}`);
  process.exit(1);
}

fs.writeFileSync(filePath, resultLines.join('\n'), 'utf-8');
console.log(`Successfully added ${titleIndex} cnTitle fields.`);
