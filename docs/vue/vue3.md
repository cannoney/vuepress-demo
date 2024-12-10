---
icon: vue
title: vue3
---

:::tip
开始一点点搭建前后端项目啦~
:::

曲曲折折好些天，所幸最后成了~~~

教程参考：

- [你的第一个前端入门项目，保姆级教程！Vue3 用户中心网站开发\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1MHSMYvEJq/)
- [尚硅谷 Vue3 入门到实战，最新版 vue3+TypeScript 前端开发教程\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Za4y1r7KE)
- [Pure Admin 保姆级文档](https://pure-admin.cn/)

## 前端技术选型

| 组件                                                                                         | 说明           | 备注       |
| -------------------------------------------------------------------------------------------- | -------------- | ---------- |
| [Vue3](https://cn.vuejs.org/guide/quick-start.html)                                          | 前端框架       | 组合式     |
| [Type Script](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html) | 脚本           | 初始已包含 |
| [Vite](https://cn.vite.dev/guide/)                                                           | 构建工具       | 初始已包含 |
| [ESLint](https://eslint.org/docs/latest/use/getting-started)                                 | 代码检查工具   | 初始已包含 |
| [Prettier](https://prettier.io/docs/en/)                                                     | 代码格式化工具 | 初始已包含 |
| [Router](https://router.vuejs.org/zh/guide/)                                                 | 网页路由       | 初始已包含 |
| [Pinia](https://pinia.vuejs.org/zh/introduction.html)                                        | 全局状态管理   | 初始已包含 |
| [Ant Design Vue](https://antdv.com/components/overview-cn)                                   | UI 组件库      |            |
| [Axios](https://www.axios-http.cn/docs/intro)                                                | 网络请求库     |            |
| [Mitt](https://github.com/developit/mitt)                                                    | 组件通信       |            |
| [Particles](https://www.npmjs.com/package/@tsparticles/vue3)                                 | 粒子背景       |            |

## 本地环境

| 组件                                      | 说明        | 备注               |
| ----------------------------------------- | ----------- | ------------------ |
| [Node.js](https://nodejs.org/zh-cn)       | JS 运行环境 | V20+               |
| [NPNM](https://pnpm.io/zh/motivation)     | 包管理器    | `pnpm self-update` |
| [VS Code](https://code.visualstudio.com/) | IDE         |                    |

## 项目初始化

:::code-tabs
@tab pnpm 安装

```bash
pnpm create vue@latest
```

@tab 本地执行及选择

```txt

pnpm create vue@latest

选择：
√ Project name: ... app-vue
√ Add TypeScript? ... Yes
√ Add JSX Support? ...  No
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... Yes
√ Add Vitest for Unit Testing? ... No
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? » Yes
√ Add Prettier for code formatting? ... Yes

cd app-vue
pnpm install
pnpm format
pnpm dev
```

:::

## Ant Design Vue

:::code-tabs
@tab 安装

```bash
pnpm i ant-design-vue
pnpm i @ant-design/icons-vue
```

@tab 全量引入 main.ts

```ts title='main.ts'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

app.use(Antd);
```

:::

## 配置中文

:::code-tabs
@tab 设置 local 属性 - App.vue

```vue
<template>
  <a-config-provider :locale="zhCN">
    <MainLayout />
  </a-config-provider>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
</script>
```

:::

- [Ant Design Vue — ConfigProvider](https://antdv.com/components/config-provider/#ConfigProvider)
- [ant-design-vue 设置成中文-CSDN 博客](https://blog.csdn.net/Amy_cx/article/details/136191423)

## router

:::code-tabs
@tab 安装 -- 脚手架已包含忽略

```bash
pnpm i vue-router
```

:::

- [入门 | Vue Router](https://router.vuejs.org/zh/guide/)
- [安装 | Vue Router](https://v3.router.vuejs.org/zh/installation.html)
- [Vue3 路由 | 菜鸟教程](https://www.runoob.com/vue3/vue3-routing.html)
- [Vue3 之 Router 的理解 - 知乎](https://zhuanlan.zhihu.com/p/659631118)

## axios

:::code-tabs
@tab 安装

```bash
pnpm i axios
```

@tab pnpm 跨域配置

```ts
export default defineConfig({
  //...
  server: {
    //代理。避免CORS
    proxy: {
      "/api": {
        target: "http://localhost:8081/",
        changeOrigin: true,
      },
    },
  },
});
```

:::

- [Server Options | Vite](https://vitejs.dev/config/server-options.html#server-cors)
- [Vue 3.0 + vite + axios 出现跨域问题如何解决？ - 知乎](https://www.zhihu.com/question/593673574/answer/2968787413)

## 刷新后导航菜单保持当前选中

```
//菜单的属性key就是路径，如 key: '/user'
const current = ref<string[]>(['/'])
//导航菜单点击跳转
const router = useRouter()
const menuClicked = ({ key }: { key: string }) => {
  console.log(key)
  router.push({
    path: key,
  })
}
//刷新页面后选中与路径对应的菜单
router.afterEach((to) => {
  current.value = [to.path]
})
```

## 状态管理

:::code-tabs
@tab 定义规则 - store/useXXXStore.ts

```ts
export const useUserStore = defineStore("user", () => {
  const currentUser = ref({} as User);

  //获取当前用户
  const getCurrentUser = async () => {
    const user = await getLoginedUser();
    if (user) {
      setCurrentUser(user);
    }
    return currentUser;
  };

  //存储用户
  const setCurrentUser = (user: User) => {
    currentUser.value = user;
  };

  return { getCurrentUser, setCurrentUser, currentUser };
});
```

## 导航栏获取用户状态（保持响应式）

```vue
<template>
  <div v-if="currentUser.userName">
    {{ currentUser.userName }}
  </div>
  <div v-else>
    <a-button type="primary">登录</a-button>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from "vue";
import { useUserStore } from "@/stores/useUserStore";
const currentUser = toRef(useUserStore(), "currentUser");
</script>
```

## 权限校验

:::code-tabs
@tab 定义规则 - auth/access.ts

```ts
import router from "@/router";
import { useUserStore } from "@/stores/useUserStore";
import { message } from "ant-design-vue";

//全局权限校验
router.beforeEach((to, from, next) => {
  //当前用户
  const { currentUser } = useUserStore();
  //要访问的地址
  const toUrl = to.fullPath;
  if (toUrl.startsWith("/user")) {
    if (!currentUser || currentUser.role != "1") {
      message.error("没有权限");
      //跳转到登录页面
      next(`/login?bl=${toUrl}`);
      return;
    }
  }
  //继续执行原来的操作
  next();
});
```

@tab 全局引入 - main.ts

```ts
import "./auth/access";
```

:::

## App.vue 获取当前路径

> 因为异步组件的初始化时机不同，直接获取得到的路径始终是`/`。需要监听路由变化

```ts
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
//监听路由获取真正的当前路径
watch(
  () => route,
  (newVal, oldVal) => {
    //初始化时oldVal=undefined，newVal.path=/ 需要跳过
    if (oldVal) {
      console.log("got path", route.path);
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
```

- [【vue3】获取当前页面路由的四种方法\_vue3 获取当前路由-CSDN 博客](https://blog.csdn.net/qq_38974163/article/details/121762708)
- [vue-router: 在 App.vue 中获取不到正确的路由？当我访问本地项目 localhost:8080/#/home - 掘金](https://juejin.cn/post/6844904148408745997)

## 点击复制

:::code-tabs
@tab 安装

```bash
pnpm i vue-clipboard3
```

@tab 定义 - utils/copyer.ts

```ts
import useClipboard from "vue-clipboard3";
import { message } from "ant-design-vue";

const { toClipboard } = useClipboard();
const copy = async (msg: string) => {
  try {
    await toClipboard(msg);
    message.success("Copied!");
  } catch (err) {
    console.error("copy failed", msg, err);
    message.error("Ooops! Copy Failed!");
  }
};
export default copy;
```

@tab 自定义组件 - tools/ACopy.vue

```vue
<template>
  <CopyOutlined @click="copy(msg)" class="acopy" />
</template>

<script lang="ts" setup name="acopy">
import copy from "@/utils/copyer";
import { CopyOutlined } from "@ant-design/icons-vue";

//复制的内容是父组件传递的。使用defineProps来接收
const { msg } = defineProps(["msg"]);
</script>
```

@tab 业务使用 - xxx.vue

```vue
<ACopy :msg="record.name" />

import ACopy from '../tools/ACopy.vue'
```

:::

- [Vue3 复制 copy 功能实现（vue-clipboard3) - 掘金](https://juejin.cn/post/7163174628393746468)

## 组间通信

:::code-tabs
@tab 安装

```bash
pnpm i mitt
```

@tab 定义 - utils/emitter.ts

```ts
//引入mitt
import mitt, { type Emitter } from "mitt";

type Events = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

//调用mitt，得到emitter。可以：绑定事件、触发事件、解绑事件
const emitter: Emitter<Events> = mitt<Events>();

//暴露
export default emitter;
```

@tab 全局引入 - main.ts

```ts
import emitter from "@/utils/emitter";
```

@tab 业务使用 - hooks/useXXX.ts

```ts
//订阅者
emitter.on("send-toy", (val: any) => {
  toya.value = val;
});
//组件卸载的时候解绑事件
onUnmounted(() => {
  emitter.off("send-toy");
});

//发布者
emitter.emit("send-toy", toyb);
```

:::

- [Vue3 中的常见组件通信之 mitt_vue mitt-CSDN 博客](https://blog.csdn.net/m0_63165331/article/details/139483192)
- [vue3+ts 中使用 mitt 跨组件通信报错-CSDN 博客](https://blog.csdn.net/ThisEqualThis/article/details/128478261)

## 粒子背景

:::code-tabs
@tab 安装

```bash
pnpm i @tsparticles/vue3 tsparticles
```

@tab 全局引入 - main.ts

```ts
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  },
});
```

@tab 业务使用 - xxx.vue

```vue
<template>
  <div id="single-page">
    <vue-particles id="lizibg" :options="liziOption" />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
const liziOption = {
  background: {
    color: {
      value: "#3daeb7",
    },
  },
  fpsLimit: 200,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.5,
        size: 40,
      },
      push: {
        quantity: 5,
      },
      repulse: {
        distance: 100,
        duration: 0.5,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
</script>
```

@tab 配合设置毛玻璃背景 --xxx.css

```css
.frosted {
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
}
```

:::

注： _particles.vue3 2.12.0 deprecated_

- [从零开始 Vue3+element-plus+particles 实现绝美登录、注册页面\_从 0 开始 vue3 登录注册-CSDN 博客](https://blog.csdn.net/qq_64734490/article/details/143454244)
- [@tsparticles/vue3 - npm](https://www.npmjs.com/package/@tsparticles/vue3)
- [HTML 和 CSS 来实现毛玻璃效果（Glassmorphism）\_css 玻璃 div-CSDN 博客](https://blog.csdn.net/hulinhulin/article/details/132428711)
- [Glassmorphism CSS Generator | SquarePlanet | SquarePlanet](https://hype4.academy/tools/glassmorphism-generator)

## echarts

```bash
pnpm i echarts
```

- [vue-echarts | Vue.js component for Apache ECharts™.](https://ecomfe.github.io/vue-echarts/README.zh-Hans.html)
- [Examples - Apache ECharts](https://echarts.apache.org/examples/en/index.html#chart-type-bar)
- [Documentation - Apache ECharts](https://echarts.apache.org/zh/option.html#series-bar)
- [pure-admin-utils-echarts](https://pure-admin-utils.netlify.app/hooks/useECharts/useECharts)
- [Vue3 中我是这样玩 Echart 的 - 知乎](https://zhuanlan.zhihu.com/p/686321538)
- [DataV.GeoAtlas 地理小工具系列](https://datav.aliyun.com/portal/school/atlas/area_selector)
- [前后端都要懂一点的 GIS](https://www.yuque.com/datav/datav-cool/swteb8)
- [中国地图数据集 | GeoJSON](https://geojson.cn/data/atlas/china)
- [记一次优化 echarts 中的南海诸岛显示 - 谢书怜 - 博客园](https://www.cnblogs.com/wilsunson/p/17865990.html)
- [geojson.io | powered by Mapbox](https://geojson.io/)

## 其他站点

- [今日诗词开放接口 - 今日诗词 - 诗词实时智能推荐](https://www.jinrishici.com/doc/#json)
- [快速上手 | G2Plot](https://g2plot.antv.antgroup.com/manual/getting-started)
- 渐变色：[免费的渐变背景 CSS3 样式 | oulu.me](https://color.oulu.me/)
- [大书屋知识导航 - 发现有价值的知识产品](https://www.dashuwu.com/)
- 行星数据接口：[SBDB API](https://ssd-api.jpl.nasa.gov/doc/sbdb.html)
- [全国普通高等学校名单 - 中华人民共和国教育部政府门户网站](https://hudong.moe.gov.cn/qggxmd/)
- [色轮\_色环\_色彩搭配 - Canva 可画](https://www.canva.cn/colors/color-wheel/)
- [调色板中美丽的颜色组合，配色方案 — Gradients.app](https://gradients.app/zh/colorpalette)
- [DataV.GeoAtlas 地理小工具系列](https://datav.aliyun.com/portal/school/atlas/area_selector)
- [前后端都要懂一点的 GIS](https://www.yuque.com/datav/datav-cool/swteb8)
