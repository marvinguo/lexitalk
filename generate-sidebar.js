import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 生成按字母分组的侧边栏配置
 * 性能优化版本：只显示字母索引，不显示 8000+ 单词详情
 * 
 * 优化策略：
 * 1. 侧边栏只显示 A-Z 字母链接到索引页
 * 2. 减少 HTML 体积，提升页面加载速度
 * 3. 每个字母索引页单独展示该字母下的所有单词
 */

const wordsDir = path.resolve(__dirname, './src/content/docs/words');
const indexDir = path.resolve(__dirname, './src/content/docs/words-index');

/**
 * 读取所有单词文件并按首字母分组
 */
function getGroupedWords(verbose = false) {
  if (!fs.existsSync(wordsDir)) {
    if (verbose) console.error(`错误：找不到目录 ${wordsDir}`);
    return {};
  }

  // 读取所有 .mdx 文件
  const files = fs.readdirSync(wordsDir)
    .filter(file => file.endsWith('.mdx'))
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  if (verbose) console.log(`找到 ${files.length} 个单词文件`);

  // 按首字母分组
  const groupedWords = {};
  
  for (const file of files) {
    const fileName = file.replace('.mdx', '');
    const filePath = path.join(wordsDir, file);
    
    // 读取文件的 frontmatter 以获取 title
    let displayName = fileName;
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      if (data.title) {
        displayName = data.title;
      }
    } catch (error) {
      if (verbose) console.warn(`警告：无法读取文件 ${file} 的 frontmatter`);
    }
    
    // 获取第一个字符并转为大写
    const firstChar = displayName.charAt(0).toUpperCase();
    
    // 只处理 A-Z 的字母
    if (/^[A-Z]$/.test(firstChar)) {
      if (!groupedWords[firstChar]) {
        groupedWords[firstChar] = [];
      }
      groupedWords[firstChar].push({ fileName, displayName });
    } else {
      // 非字母开头的放到特殊分组
      if (!groupedWords['#']) {
        groupedWords['#'] = [];
      }
      groupedWords['#'].push({ fileName, displayName });
    }
  }

  return groupedWords;
}

/**
 * 生成简化的侧边栏配置（只显示字母索引）
 */
function generateSidebarConfig(verbose = false) {
  const groupedWords = getGroupedWords(verbose);
  
  // 生成简化的侧边栏：只显示字母索引
  const sidebarConfig = [
    {
      label: '📖 单词索引',
      items: []
    }
  ];
  
  // 按字母顺序生成字母索引链接
  const letters = Object.keys(groupedWords).sort();
  
  for (const letter of letters) {
    const words = groupedWords[letter];
    const label = letter === '#' ? '符号/数字' : letter;
    
    sidebarConfig[0].items.push({
      label: `${label} (${words.length} 词)`,
      link: `/words-index/${letter.toLowerCase()}/`
    });
  }

  if (verbose) {
    console.log(`生成了简化的侧边栏配置，包含 ${letters.length} 个字母分组`);
  }

  return sidebarConfig;
}

/**
 * 生成字母索引页面
 */
function generateIndexPages(verbose = false) {
  const groupedWords = getGroupedWords(verbose);
  
  // 确保索引目录存在
  if (!fs.existsSync(indexDir)) {
    fs.mkdirSync(indexDir, { recursive: true });
  }
  
  const letters = Object.keys(groupedWords).sort();
  
  for (const letter of letters) {
    const words = groupedWords[letter];
    const label = letter === '#' ? '符号/数字' : letter;
    const fileName = letter.toLowerCase() === '#' ? 'special' : letter.toLowerCase();
    const filePath = path.join(indexDir, `${fileName}.mdx`);
    
    // 生成索引页面内容
    const content = `---
title: ${label} - 单词索引
description: ${label} 开头的所有单词列表（共 ${words.length} 个）
sidebar:
  hidden: false
  order: ${letter === '#' ? 999 : letter.charCodeAt(0)}
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## ${label} 开头的单词

共收录 **${words.length}** 个单词

<div style="columns: 2; column-gap: 2rem; margin-top: 2rem;">

${words.map(word => `- [${word.displayName}](/words/${word.fileName}/)`).join('\n')}

</div>

---

<div style="text-align: center; margin-top: 3rem;">
  <a href="/words-index/a/" style="margin: 0 0.5rem;">A</a>
  <a href="/words-index/b/" style="margin: 0 0.5rem;">B</a>
  <a href="/words-index/c/" style="margin: 0 0.5rem;">C</a>
  <a href="/words-index/d/" style="margin: 0 0.5rem;">D</a>
  <a href="/words-index/e/" style="margin: 0 0.5rem;">E</a>
  <a href="/words-index/f/" style="margin: 0 0.5rem;">F</a>
  <a href="/words-index/g/" style="margin: 0 0.5rem;">G</a>
  <a href="/words-index/h/" style="margin: 0 0.5rem;">H</a>
  <a href="/words-index/i/" style="margin: 0 0.5rem;">I</a>
  <a href="/words-index/j/" style="margin: 0 0.5rem;">J</a>
  <a href="/words-index/k/" style="margin: 0 0.5rem;">K</a>
  <a href="/words-index/l/" style="margin: 0 0.5rem;">L</a>
  <a href="/words-index/m/" style="margin: 0 0.5rem;">M</a>
  <a href="/words-index/n/" style="margin: 0 0.5rem;">N</a>
  <a href="/words-index/o/" style="margin: 0 0.5rem;">O</a>
  <a href="/words-index/p/" style="margin: 0 0.5rem;">P</a>
  <a href="/words-index/q/" style="margin: 0 0.5rem;">Q</a>
  <a href="/words-index/r/" style="margin: 0 0.5rem;">R</a>
  <a href="/words-index/s/" style="margin: 0 0.5rem;">S</a>
  <a href="/words-index/t/" style="margin: 0 0.5rem;">T</a>
  <a href="/words-index/u/" style="margin: 0 0.5rem;">U</a>
  <a href="/words-index/v/" style="margin: 0 0.5rem;">V</a>
  <a href="/words-index/w/" style="margin: 0 0.5rem;">W</a>
  <a href="/words-index/x/" style="margin: 0 0.5rem;">X</a>
  <a href="/words-index/y/" style="margin: 0 0.5rem;">Y</a>
  <a href="/words-index/z/" style="margin: 0 0.5rem;">Z</a>
</div>
`;
    
    fs.writeFileSync(filePath, content, 'utf-8');
    
    if (verbose) {
      console.log(`✓ 生成索引页: ${fileName}.mdx (${words.length} 个单词)`);
    }
  }
  
  if (verbose) {
    console.log(`\n成功生成 ${letters.length} 个字母索引页面`);
  }
}

// 当作为模块导入时，不输出日志；当直接运行时，输出详细日志
const isDirectRun = import.meta.url === `file://${process.argv[1]}`;

if (isDirectRun) {
  console.log('🚀 开始生成侧边栏配置和索引页面...\n');
  generateIndexPages(true);
  console.log('\n📊 生成侧边栏配置...\n');
}

const sidebarConfig = generateSidebarConfig(isDirectRun);

export default sidebarConfig;
export { getGroupedWords, generateIndexPages };

