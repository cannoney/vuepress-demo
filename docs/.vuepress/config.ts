import {viteBundler} from '@vuepress/bundler-vite'
import {hopeTheme} from 'vuepress-theme-hope'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
  //application context
  base: '/vuepress-demo/',

  title: 'vue docs',
  description: 'demo',
  //中文
  lang: 'zh-CN',

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
      '/',
      {
        text: '指南',
        icon: 'stack',
        link: '/guide'
      }
    ],
    // //侧边栏（不设置默认加载所有的更好呀，后期再配置吧）
    // sidebar: {
    //   "/": [
    //     {
    //       text: 'Vue',
    //       prefix: 'vue/',
    //       children: ['vuehope']
    //     }
    //   ]
    // },
    //插件
    plugins: {
      //搜索
      search: {
        isSearchable: (page) => page.path !== "/",
        maxSuggestions: 10
      },
      //markdown增强插件
      mdEnhance: {
        //启动代码块
        codetabs: true,
        //启动vue交互演示
        vuePlayground: true,
        //选项卡
        tabs: true,
        //上下角标 (^x^ ~x~)
        sup: true,
        sub: true,
        //标记( ==xx== )
        mark: true,
        //导入文件
        include: true
      },
      //内置组件
      components: {
        components: ['BiliBili']
      }
    }

  })
});