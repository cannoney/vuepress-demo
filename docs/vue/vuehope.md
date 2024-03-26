---
icon: vue
title: vuepress + theme-hope
---

::: tip 友情提示
这是vuepress的试验版本
:::

## 依赖说明

| 组件                | 说明   |
|---------------------|------|
| vue <Badge text="v3" /> | √    |
| vuepress <Badge text="v2" /> | √    |
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

## 部署

:::tabs
@tab github部署

1. 项目中添加自定义工作流： `.github/workflows/deploy-docs.yml`
1. Setting | GitHub Pages | deploy from branch：gh-pages
1. 配置base=repo。[发布后的站点](https://cannoney.github.io/vuepress-demo/)

- [部署项目 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/get-started/deploy.html) [部署 | VuePress](https://vuejs.press/zh/guide/deployment.html#github-pages)
- [GitHub Pages 文档](https://docs.github.com/zh/pages)
- [GitHub Actions 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [一篇带你用 VuePress + Github Pages 搭建博客 - 掘金](https://juejin.cn/post/7041134607869149215)

@tab GitHub Actions 自定义工作流

```yaml
<!-- @include: ../../.github/workflows/deploy-docs.yml -->
```

:::

- 注意工作流中的action版本：(@v{major-version})
:::info ！！！

> deploy-gh-pages  
> Node.js 16 actions are deprecated. Please update the following actions to use Node.js 20: actions/checkout@v3, pnpm/action-setup@v2, actions/setup-node@v3. For more information see: [GitHub Actions: Transitioning from Node 16 to Node 20](https://github.blog/changelog/2023-09-22-github-actions-transitioning-from-node-16-to-node-20/).

 ==检查版本==

- 安装PNPM `pnpm/action-setup@v3`: [GitHub - pnpm/action-setup](https://github.com/pnpm/action-setup)
- 安装NODE `actions/setup-node@v4`: [GitHub - actions/setup-node](https://github.com/actions/setup-node)
- 检出分支 `actions/checkout@v4`: [GitHub - actions/checkout](https://github.com/actions/checkout)
- 部署 `JamesIves/github-pages-deploy-action@v4`: [GitHub - JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)    [Deploy to GitHub Pages · Actions · GitHub Marketplace](https://github.com/marketplace/actions/deploy-to-github-pages)

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

## 自定义样式

:::info

样式文件：`docs/.vuepress/styles/index.scss`

```scss
//导航栏：站点名称
.vp-site-name {
  font-style: italic;
  //字体渐变色
  background-image: linear-gradient(to right, violet, var(--theme-color-dark));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

- [样式配置 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/style.html#index-scss)
- [字体渐变色](https://segmentfault.com/a/1190000012797252)

:::

## 自定义组件

<hd2 icon='activity'>显示标题2组件</hd2>
<hd2>显示默认图标</hd2>

:::code-tabs
@tab 定义组件  `.vuepress/components/hd2.vue`

```vue
<template>
  <h2 class="hd2">
    <span class="icon iconfont icon-leaf"></span>
    <slot></slot>
  </h2>
</template>
```

@tab 客户端配置 `.vuepress/client.ts`

```ts
import { defineClientConfig } from 'vuepress/client'
import hd2 from './components/hd2.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("hd2", hd2);
  }
})
```

@tab md页面引用

```md
<hd2>显示标题2组件</hd2>
```

:::

:::caution 问题
自定义的h2标签不能被识别为toc目录了 ！！！ :scream: :cry:
:::

- [全局组件 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/component/global.html#%E9%80%9A%E8%BF%87-clientconfigfile-%E6%B3%A8%E5%86%8C)
- [人物 Emoji | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/cookbook/markdown/emoji/people.html)

pnpm i -D @vuepress/plugin-register-components@next

## 小技巧

### 提示

> - [提示容器 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/markdown/hint.html)
> - [MdEnhance 插件配置 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html#hint)

### router

> 站内的每一个文件夹下的 README.md 或者 index.md 文件都会被 ==自动编译== 为 index.html，对应的链接将被视为 /。

## 参考

- [介绍 | VuePress](https://v2.vuepress.vuejs.org/zh/guide/introduction.html)
- [指南 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/)
