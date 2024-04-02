---
icon: vue
title: vue3
---

:::tip
又又是试验版本！
:::


## vue3

```bash
pnpm create vue@latest

√ 请输入项目名称： ... XXX
√ 是否使用 TypeScript 语法？ ... 是
√ 是否启用 JSX 支持？ ... 否
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否
√ 是否引入 Pinia 用于状态管理？ ... 否
√ 是否引入 Vitest 用于单元测试？ ... 否
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 是
√ 是否引入 Prettier 用于代码格式化？ ... 是
√ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) ... 否

  cd XXX
  pnpm install
  pnpm format
  pnpm dev

## 遇到问题：Cannot find module @rollup/rollup-win32-x64-msvc。需要额外安装：
pnpm i @rollup/rollup-win32-x64-msvc

```

[快速上手 | Vue.js](https://cn.vuejs.org/guide/quick-start.html)

## router

```bash
pnpm install vue-router

```

- [安装 | Vue Router](https://v3.router.vuejs.org/zh/installation.html)
- [Vue3 路由 | 菜鸟教程](https://www.runoob.com/vue3/vue3-routing.html)
- [Vue3 之 Router 的理解 - 知乎](https://zhuanlan.zhihu.com/p/659631118)

## echarts

```bash
pnpm i echarts vue-echarts
```

- [vue-echarts | Vue.js component for Apache ECharts™.](https://ecomfe.github.io/vue-echarts/README.zh-Hans.html)
- [Examples - Apache ECharts](https://echarts.apache.org/examples/en/index.html#chart-type-bar)
- [Documentation - Apache ECharts](https://echarts.apache.org/zh/option.html#series-bar)
- [pure-admin-utils-echarts](https://pure-admin-utils.netlify.app/hooks/useECharts/useECharts)
- [Vue3中我是这样玩Echart的 - 知乎](https://zhuanlan.zhihu.com/p/686321538)

## axios

```bash
pnpm install axios
```

```ts
export default defineConfig({
  //...
  server: {
    //代理。避免CORS
    proxy: {
      '/api': {
        target: 'http://localhost:8081/',
        changeOrigin: true
      }
    }
  }
})
```

- [Server Options | Vite](https://vitejs.dev/config/server-options.html#server-cors)
- [Vue 3.0 + vite + axios 出现跨域问题如何解决？ - 知乎](https://www.zhihu.com/question/593673574/answer/2968787413)

## Element plus

:::code-tabs
@tab pnpm安装

```bash
pnpm install element-plus
```

@tab 全量引入main.ts

```ts title='main.ts'
//全量引入ele-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```

@tab 指定编译类型tsconfig.json

```json title='tsconfig.app.json'
{
  "compilerOptions": {
    "types": ["element-plus/global"]
  }
}
```

:::

- [安装 | Element Plus](https://element-plus.org/zh-CN/guide/installation.html)
- [tsconfig.json配置详解_tsconfig.node.json-CSDN博客](https://blog.csdn.net/Mahuicool/article/details/135726692)

```bash
pnpm install @element-plus/icons-vue
```

[Icon 图标 | Element Plus](https://element-plus.org/zh-CN/component/icon.html)

自定义事件参数
[el-select选择器 change事件中传递自定义参数 - 掘金](https://juejin.cn/post/7052163744800964639)
