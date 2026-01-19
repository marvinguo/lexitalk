<p align="center">
  <a href="https://www.lexitalkai.com/" target="_blank">
    <img width="120"
    src="https://github.com/nicejade//gpt-wordbook/blob/main/public/favicon.svg?raw=true">
  </a>
</p>

<h1 align="center">LexiTalk AI | 以使用为核心的英语学习平台</h1>
<p align="center">从真实语境出发，让英语学习回归“使用”</p>

<div align="center">
  <p>LexiTalk AI（<a href="https://www.lexitalkai.com/" target="_blank">lexitalkai.com</a>）是一个面向真实使用场景的英语学习平台，提供词汇解析、情境表达、播客练习与持续复习路径，帮助学习者在理解中使用英语，而不只是死记硬背。</p>
  <p>本项目受开源项目 <a href="https://github.com/nicejade/gpt-wordbook" target="_blank">GPT Wordbook</a> 启发，进一步落地为可用的实际产品。</p>
</div>

<div align="center">
  <a href="https://www.lexitalkai.com/" target="_blank">
    <strong>🌐 在线访问</strong>
  </a> | 
  <a href="#-项目简介">
    <strong>📖 项目简介</strong>
  </a> | 
  <a href="#-如何使用">
    <strong>🏹 快速开始</strong>
  </a> | 
  <a href="#-如何部署">
    <strong>🚀 部署指南</strong>
  </a> | 
  <a href="#-灵感来源">
    <strong>✨ 灵感来源</strong>
  </a>
</div>

<br>

<div align="center">
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://img.shields.io/badge/node-%3E%3D%2016.0.0-green.svg" alt="Node Version">
  </a>
  <a href="https://github.com/nicejade/gpt-wordbook">
    <img src="https://img.shields.io/github/license/nicejade/gpt-wordbook" alt="LICENSE">
  </a>
  <a href="https://github.com/nicejade/gpt-wordbook/stargazers">
    <img src="https://img.shields.io/github/stars/nicejade/gpt-wordbook?style=social" alt="GitHub Stars">
  </a>
  <a href="https://github.com/nicejade/gpt-wordbook/network/members">
    <img src="https://img.shields.io/github/forks/nicejade/gpt-wordbook?style=social" alt="GitHub Forks">
  </a>
  <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier">
  </a>
  <a href="https://aboutme.lovejade.cn/?utm_source=github.com">
    <img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade">
  </a>
</div>

---

<div align="center">
  <h3>🌍 <a href="README_EN.md">English</a> | 中文</h3>
</div>

## 📖 项目简介

**LexiTalk AI** 是一个强调“可理解输入 + 可输出使用”的英语学习平台，围绕真实语境、词汇体系与练习路径，帮助用户把词汇真正用起来。

### 💡 为什么选择 LexiTalk AI？

- **🤖 AI 驱动**：基于 GPT 生成高质量的词汇与语境解析
- **🎯 真实语境**：通过对话、播客、情境表达提升可用性
- **📚 结构化学习**：词汇网络、例句与复习路径相互衔接
- **🚀 高性能体验**：快速加载、移动端友好
- **🔍 便捷检索**：快速搜索词汇与短语
- **📱 多端一致**：桌面与移动端体验统一

### ✨ 核心特性

- **📖 深度解析**：词义、例句、搭配与语境拆解
- **🎧 播客练习**：可理解输入提升听力与复述能力
- **🧠 结构化记忆**：关联词与复习路径提升长期记忆
- **⚡ 快速搜索**：单词与短语快速定位

### 🎯 适用人群

- **🎓 考试备考者**：考研、托福 (TOEFL)、雅思 (IELTS)、GRE、四六级等各类英语考试
- **💼 职场人士**：需要提升专业英语能力和职场英语应用的从业者
- **🌟 英语爱好者**：对英语语言文化感兴趣，追求深度学习的学习者
- **👨‍🏫 教育工作者**：英语教师、培训师等需要优质教学资源的专业人士

### 🛠️ 技术栈

- **框架**：[Astro](https://astro.build/) - 现代化的静态网站生成器
- **UI 组件**：[Starlight](https://starlight.astro.build/) - Astro 官方文档主题
- **交互组件**：[Svelte](https://svelte.dev/) - 轻量级响应式框架
- **样式方案**：[TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **内容格式**：[MDX](https://mdxjs.com/) - Markdown + JSX，支持丰富的内容展示
- **AI 技术**：[GPT](https://openai.com/) - 用于生成高质量词汇解析内容

## 🧱 项目结构

```bash
gpt-wordbook/
├── public/              # 静态资源（图标、图片等）
│   ├── favicon.svg      # 网站图标
│   └── humans.txt       # 项目贡献者信息
├── src/
│   ├── assets/          # 项目资源文件
│   ├── configs/         # 配置文件
│   ├── content/
│   │   ├── docs/        # 文档内容 (MDX/MD 格式)
│   │   │   ├── about.mdx       # 关于页面
│   │   │   └── words/          # 单词页面目录
│   │   └── config.ts    # 内容集合配置
│   └── env.d.ts         # TypeScript 类型定义
├── scripts/             # 脚本工具
│   └── gptwords.json    # 词汇数据源
├── astro.config.mjs     # Astro 配置文件
├── tailwind.config.mjs  # Tailwind CSS 配置
├── tsconfig.json        # TypeScript 配置
├── package.json         # 项目依赖
└── README.md            # 项目说明文档
```

## 🏹 如何使用？

### 前置要求

- **Node.js**: >= 16.0.0
- **包管理器**: pnpm（推荐）/ npm / yarn

### 克隆项目

```bash
git clone https://github.com/nicejade/gpt-wordbook.git
cd gpt-wordbook
```

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 yarn
yarn install

# 或使用 npm
npm install
```

### 启动开发服务器

```bash
# 使用 pnpm
pnpm start

# 或使用 npm
npm run start

# 或使用 yarn
yarn start
```

开发服务器将在 `http://localhost:6969` 启动。

### 构建生产版本

```bash
# 使用 pnpm
pnpm build
```

构建完成后，静态文件将输出到 `dist/` 目录。

### 本地预览生产版本

```bash
# 使用 pnpm
pnpm preview
```

## 🚀 如何部署？

由于本项目是基于 [Astro](https://astro.build/) 构建的纯静态网站，您可以轻松部署到各种平台。

### 推荐部署平台

#### 1. **Cloudflare Pages**（推荐）

- 免费且不限流量
- 全球边缘网络
- 优秀的性能表现
- 持续集成支持

#### 2. **Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nicejade/gpt-wordbook)

- 零配置部署
- 自动 HTTPS
- 全球 CDN 加速
- 持续集成支持

## ✨ 灵感来源

LexiTalk AI 受开源项目 [GPT Wordbook](https://github.com/nicejade/gpt-wordbook) 启发并发展而来，感谢开源社区的贡献。

#### 3. **GitHub Pages**

```bash
# 修改 astro.config.mjs 中的 site 和 base 配置
# 然后构建并部署
pnpm build
```

#### 4. **Netlify**

- 拖拽式部署
- 自动构建
- 表单处理等额外功能

### 部署步骤（以 Cloudflare Pages 为例）

1. Fork 本项目到你的 GitHub 账号。
2. 在 [Cloudflare 控制台](https://dash.cloudflare.com/) 中，点击 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**。
3. 选择 `gpt-wordbook` 仓库，点击 **Begin setup**。
4. 配置构建设置：
   - **Framework preset**: `Astro`
   - **Build command**: `pnpm build`
   - **Output directory**: `dist`
5. 点击 **Save and Deploy**。
6. 部署完成后，你将获得一个 `*.pages.dev` 域名。

## 🎨 自定义配置

本项目基于 [Starlight](https://starlight.astro.build/) 开发，具有高度的可定制性：

### 主题定制

- **修改配置**：编辑 `astro.config.mjs` 文件，自定义网站标题、描述、社交链接等
- **自定义样式**：通过 CSS 变量或 Tailwind 配置修改主题颜色和样式
- **组件扩展**：支持自定义 Svelte/Astro 组件，扩展功能

### 内容管理

- **添加新词汇**：在 `src/content/docs/words/` 目录下创建 MDX 文件
- **修改页面**：编辑对应的 MDX/MD 文件即可
- **配置导航**：在 `astro.config.mjs` 中配置侧边栏和导航菜单

### 多语言支持

项目内置完善的国际化支持，可以轻松扩展多语言版本。

## 📊 数据来源

本项目的词汇数据由 **GPT** 生成，包含：

- 精准的分析词义
- 地道的列举例句
- 词根、词缀分析
- 发展历史和文化背景
- 单词变形
- 记忆技巧和助记故事

所有数据经过人工审核和优化，确保准确性和实用性。

## 🤝 贡献指南

欢迎各种形式的贡献！无论是：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 完善文档
- 🌍 翻译内容
- ⚙️ 提交代码改进

### 如何贡献

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 💬 反馈与支持

如果你在使用过程中遇到问题或有任何建议，欢迎通过以下方式联系：

- 📧 提交 [Issue](https://github.com/nicejade/gpt-wordbook/issues)
- 💬 参与 [Discussions](https://github.com/nicejade/gpt-wordbook/discussions)
- 🐦 关注作者 [X | Twitter](https://x.com/MarshalXuan)
- 📝 访问作者博客 [晚晴幽草轩](https://www.lovejade.cn/)

## ⭐ Star History

如果这个项目对你有帮助，请考虑给它一个 Star ⭐！

[![Star History Chart](https://api.star-history.com/svg?repos=nicejade/gpt-wordbook&type=Date)](https://star-history.com/#nicejade/gpt-wordbook&Date)

## 🙏 特别致谢

本项目受益于以下优秀的开源技术和社区：

- [Astro](https://astro.build/) & [Starlight](https://starlight.astro.build/) - 提供强大的静态网站生成能力
- [Svelte](https://svelte.dev/) - 轻量级的响应式框架
- [TailwindCSS](https://tailwindcss.com/) - 优雅的样式解决方案
- [OpenAI GPT](https://openai.com/) - 提供高质量的 AI 内容生成能力

感谢所有为开源社区做出贡献的开发者们！

## 📄 开源协议

本项目采用 [MIT License](http://opensource.org/licenses/MIT) 协议开源。

<div align="center">
  <p>用 ❤️ 构建，助力英语学习</p>
  <p>Made with ❤️ by <a href="https://www.lovejade.cn/">nicejade</a></p>
  <p>
    <a href="https://word.lovejade.cn/">在线访问</a> · 
    <a href="https://github.com/nicejade/gpt-wordbook/issues">报告问题</a> · 
    <a href="https://github.com/nicejade/gpt-wordbook/discussions">讨论交流</a>
  </p>
</div>

Copyright (c) 2026-present, [nicejade](https://www.lovejade.cn/).
