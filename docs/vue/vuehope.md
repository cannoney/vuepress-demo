---
icon: vue
title: vuepress
---

::: tip 友情提示
这是vuepress的试验版本
:::

## 依赖说明

| 组件                | 说明   |
|---------------------|------|
| vue~3~                | √    |
| vuepress~2~           | √    |
| vite                | 打包工具 |
| vuepress-theme-hope | 主题   |
| typescript          | 脚本   |
| @vue/repl          | vue交互演示   |
| @vuepress/plugin-search         | 搜索   |

> - [table to md](https://tableconvert.com/zh-cn/markdown-generator)

## 创建项目

```shell
# 手动方式。 等同于命令行： pnpm create vuepress-theme-hope xxx

## 1、创建并进入项目目录
mkdir vuepress-demo && cd vuepress-demo

## 2、包初始化 （package.json） -- 待补充 scripts
pnpm init

## 3、安装vuepress 和 vue
pnpm install -D vuepress@next vue

## 安装 vite 和 theme
pnpm install -D @vuepress/bundler-vite@next vuepress-theme-hope

## 4、创建主页
mkdir -p docs/.vuepress && echo '# Hello VuePress' > docs/index.md

## 5、创建配置文件 -- 待补充
touch docs/.vuepress/config.ts

## 6、启动
pnpm docs:dev

## 7、访问 http://localhost:8080
```

- 打包脚本 `package.json`

```json
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

- 配置文件 `docs/.vuepress/config.ts`

```ts
import {viteBundler} from '@vuepress/bundler-vite'
import {hopeTheme} from 'vuepress-theme-hope'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
  base: '/',

  title: 'vue docs',
  description: 'demo',

  //打包工具
  bundler: viteBundler(),
  //主题
  theme: hopeTheme({
    logo: '/cat.png',
    favicon: '/favicon.ico',
    //启用图标
    iconAssets: 'iconfont',
    //顶部导航栏（居中显示）
    navbar: [
      '/'
    ]
  })
});
```

## 目录结构 todo

```text
├─ docs
│  ├─ .vuepress
│  │  └─ config.ts (配置文件)
│  └─ index.md (首页)
├─ .gitignore
└─ package.json
```

> - 生成tree格式结构: [Folder Explorer tool](https://github.com/d2-projects/folder-explorer/releases)

## 部署 todo

:::tabs
@tab github部署

github | repos | setting | pages

- [GitHub Pages 文档](https://docs.github.com/zh/pages)
- [GitHub Actions 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [Deploy to GitHub Pages · Actions · GitHub Marketplace · GitHubgit-commitgit-commit](https://github.com/marketplace/actions/deploy-to-github-pages)

@tab GitHub Actions 自定义工作流

```yaml
<!-- @include: ../../.github/workflows/deploy-docs.yml -->
```

:::

## Vue演示

:::code-tabs
@tab pnpm安装

```bash
pnpm add -D @vue/repl
```

@tab config主题中启用

```ts title='docs/.vuepress/config.ts'
  //插件
  plugins: {
    mdEnhance: {
      //启动代码块
      codetabs: true,
      //启动vue交互演示
      vuePlayground: true
    }
  }
```

:::

::: vue-playground Vue 交互演示

@file App.vue

```vue
<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>

<script setup>
import { ref } from "vue";

const msg = ref("demo");
</script>
```

:::

## 搜索插件

:::code-tabs
@tab pnpm安装

```bash
pnpm i -D @vuepress/plugin-search@next
```

@tab config主题中启用

```ts title='docs/.vuepress/config.ts'
  //插件
  plugins: {
    //搜索
    search: {
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10
    }
  }
```

:::

- 热键 `s`

> - [主题插件 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/plugins/intro.html)
> - [search | VuePress 生态系统](https://ecosystem.vuejs.press/zh/plugins/search.html)

## 小技巧

### 提示

```text
:::{info | note | tip | warning | caution | details} TEXT
XXXX
:::
```

> - [提示容器 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/markdown/hint.html)
> - [MdEnhance 插件配置 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html#hint)

### router

> 站内的每一个文件夹下的 README.md 或者 index.md 文件都会被 ==自动编译== 为 index.html，对应的链接将被视为 /。

## 参考

- [介绍 | VuePress](https://v2.vuepress.vuejs.org/zh/guide/introduction.html)
- [指南 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/)
