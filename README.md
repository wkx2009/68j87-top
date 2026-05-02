# wkx2009的边角料工坊


基于 [Fuwari](https://github.com/saicaca/fuwari) 主题修改的个人博客。

[![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen)](https://nodejs.org)
[![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)](https://pnpm.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 与上游 Fuwari 的主要差异

- ✒️ **字体**：替换为 MiSans（小米官方无衬线字体），通过 `misans-webfont` 分包加载
- 🖼️ **背景**：全页面固定背景，支持动态 API 获取 + 多级本地兜底
- 📏 **布局**：页面内容区宽度统一收窄，页脚重构为等宽虚线居中样式
- 📝 **内容许可**：文章采用 CC BY 4.0，代码采用 MIT
- 🎨 **主题色**：调整为蓝紫色调（hue: 250）（网页内可调整）

## 🧱 技术栈

| 类别 | 技术 |
|:---|:---|
| 框架 | [Astro](https://astro.build) |
| 主题 | [Fuwari](https://github.com/saicaca/fuwari) |
| 样式 | [Tailwind CSS](https://tailwindcss.com) |
| 字体 | [MiSans](https://hyperos.mi.com/font/zh/download) + [misans-webfont](https://www.npmjs.com/package/misans-webfont) |
| 搜索 | [Pagefind](https://pagefind.app) |
| 部署 | [Cloudflare Pages](https://pages.cloudflare.com) |

## 🚀 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/wkx2009/68j87-top.git
cd 68j87-top

# 2. 安装依赖（需要 pnpm）
pnpm install

# 3. 启动开发服务器
pnpm dev
# 浏览器访问 http://localhost:4321

# 4. 创建新文章
pnpm new-post "文章标题"

```

## ⚡ 常用命令

```bash
pnpm install 安装依赖
pnpm dev 启动本地开发服务器
pnpm build 构建生产版本到 dist/
pnpm preview 本地预览构建结果
pnpm new-post <文件名> 创建新文章
```
## 📝 文章

```
---
title: 文章标题
published: 2026-05-02
description: 文章简介
image: ./cover.jpg
tags: [标签1, 标签2]
category: 分类
draft: false
lang: zh_CN
---
```

## 📄 许可证

· 博客源码：MIT License（基于 Fuwari 修改的部分遵循上游 MIT 许可）
· 博客内容（src/content/posts/ 下的文章及 public/ 下的图片）：CC BY 4.0

## 🙏 致谢

· 主题原作者：saicaca/fuwari
· 字体提供：小米 MiSans
· AI 辅助：DeepSeek / ChatGPT