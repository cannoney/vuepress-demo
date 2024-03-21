import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as v,c as m,a as n,b as s,d as e,w as a,e as c}from"./app-Cxk0i_Z5.js";const k={},b=c('<div class="hint-container tip"><p class="hint-container-title">友情提示</p><p>这是vuepress的试验版本</p></div><h2 id="依赖说明" tabindex="-1"><a class="header-anchor" href="#依赖说明"><span>依赖说明</span></a></h2><table><thead><tr><th>组件</th><th>说明</th></tr></thead><tbody><tr><td>vue<sub>3</sub></td><td>√</td></tr><tr><td>vuepress<sub>2</sub></td><td>√</td></tr><tr><td>vite</td><td>打包工具</td></tr><tr><td>vuepress-theme-hope</td><td>主题</td></tr><tr><td>typescript</td><td>脚本</td></tr><tr><td>@vue/repl</td><td>vue交互演示</td></tr><tr><td>@vuepress/plugin-search</td><td>搜索</td></tr></tbody></table>',3),h={href:"https://tableconvert.com/zh-cn/markdown-generator",target:"_blank",rel:"noopener noreferrer"},g=c(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 手动方式。 等同于命令行： pnpm create vuepress-theme-hope xxx</span>

<span class="token comment">## 1、创建并进入项目目录</span>
<span class="token function">mkdir</span> vuepress-demo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> vuepress-demo

<span class="token comment">## 2、包初始化 （package.json） -- 待补充 scripts</span>
<span class="token function">pnpm</span> init

<span class="token comment">## 3、安装vuepress 和 vue</span>
<span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next vue

<span class="token comment">## 安装 vite 和 theme</span>
<span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next vuepress-theme-hope

<span class="token comment">## 4、创建主页</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> docs/.vuepress <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/index.md

<span class="token comment">## 5、创建配置文件 -- 待补充</span>
<span class="token function">touch</span> docs/.vuepress/config.ts

<span class="token comment">## 6、启动</span>
<span class="token function">pnpm</span> docs:dev

<span class="token comment">## 7、访问 http://localhost:8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>打包脚本 <code>package.json</code></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置文件 <code>docs/.vuepress/config.ts</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>viteBundler<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>hopeTheme<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-hope&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>defineUserConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>

  title<span class="token operator">:</span> <span class="token string">&#39;vue docs&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">//打包工具</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">//主题</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;/cat.png&#39;</span><span class="token punctuation">,</span>
    favicon<span class="token operator">:</span> <span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//启用图标</span>
    iconAssets<span class="token operator">:</span> <span class="token string">&#39;iconfont&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//顶部导航栏（居中显示）</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;/&#39;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录结构-todo" tabindex="-1"><a class="header-anchor" href="#目录结构-todo"><span>目录结构 todo</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.ts (配置文件)
│  └─ index.md (首页)
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),_={href:"https://github.com/d2-projects/folder-explorer/releases",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"部署-todo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署-todo"},[n("span",null,"部署 todo")])],-1),y=n("p",null,"github | repos | setting | pages",-1),x={href:"https://docs.github.com/zh/pages",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/marketplace/actions/deploy-to-github-pages",target:"_blank",rel:"noopener noreferrer"},j=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml","data-title":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[s(`
`),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Deploy Docs

`),n("span",{class:"token comment"},"# trigger"),s(`
`),n("span",{class:"token key atrule"},"on"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"push"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"branches"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# make sure this is the branch you are using"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(` main

`),n("span",{class:"token key atrule"},"permissions"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"contents"),n("span",{class:"token punctuation"},":"),s(` write

`),n("span",{class:"token key atrule"},"jobs"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"deploy-gh-pages"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# os env"),s(`
    `),n("span",{class:"token key atrule"},"runs-on"),n("span",{class:"token punctuation"},":"),s(" ubuntu"),n("span",{class:"token punctuation"},"-"),s(`latest
    `),n("span",{class:"token key atrule"},"steps"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Checkout
        `),n("span",{class:"token key atrule"},"uses"),n("span",{class:"token punctuation"},":"),s(` actions/checkout@v3
        `),n("span",{class:"token key atrule"},"with"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"fetch-depth"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"0"),s(`
          `),n("span",{class:"token comment"},"# if your docs needs submodules, uncomment the following line"),s(`
          `),n("span",{class:"token comment"},"# submodules: true"),s(`

      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Install pnpm
        `),n("span",{class:"token key atrule"},"uses"),n("span",{class:"token punctuation"},":"),s(" pnpm/action"),n("span",{class:"token punctuation"},"-"),s(`setup@v2
        `),n("span",{class:"token key atrule"},"with"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"run_install"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
          `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"8"),s(`


      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Setup Node.js
        `),n("span",{class:"token key atrule"},"uses"),n("span",{class:"token punctuation"},":"),s(" actions/setup"),n("span",{class:"token punctuation"},"-"),s(`node@v3
        `),n("span",{class:"token key atrule"},"with"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"node-version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"20"),s(`
          `),n("span",{class:"token key atrule"},"cache"),n("span",{class:"token punctuation"},":"),s(` pnpm

      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Build Docs
        `),n("span",{class:"token key atrule"},"env"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"NODE_OPTIONS"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),s(`max_old_space_size=8192
        `),n("span",{class:"token key atrule"},"run"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),s(`
          pnpm run docs`),n("span",{class:"token punctuation"},":"),s(`build
          `),n("span",{class:"token punctuation"},">"),s(` docs/.vuepress/dist/.nojekyll

      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` Deploy Docs
        `),n("span",{class:"token key atrule"},"uses"),n("span",{class:"token punctuation"},":"),s(" JamesIves/github"),n("span",{class:"token punctuation"},"-"),s("pages"),n("span",{class:"token punctuation"},"-"),s("deploy"),n("span",{class:"token punctuation"},"-"),s(`action@v4
        `),n("span",{class:"token key atrule"},"with"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token comment"},"# This is the branch where the docs are deployed to"),s(`
          `),n("span",{class:"token key atrule"},"branch"),n("span",{class:"token punctuation"},":"),s(" gh"),n("span",{class:"token punctuation"},"-"),s(`pages
          `),n("span",{class:"token key atrule"},"folder"),n("span",{class:"token punctuation"},":"),s(` docs/.vuepress/dist

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("h2",{id:"vue演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue演示"},[n("span",null,"Vue演示")])],-1),D=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @vue/repl
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"docs/.vuepress/config.ts"},[n("pre",{class:"language-typescript"},[n("code",null,[s("  "),n("span",{class:"token comment"},"//插件"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"//启动代码块"),s(`
      codetabs`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"//启动vue交互演示"),s(`
      vuePlayground`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h2",{id:"搜索插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索插件"},[n("span",null,"搜索插件")])],-1),V=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @vuepress/plugin-search@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"docs/.vuepress/config.ts"},[n("pre",{class:"language-typescript"},[n("code",null,[s("  "),n("span",{class:"token comment"},"//插件"),s(`
  plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"//搜索"),s(`
    search`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function-variable function"},"isSearchable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("page"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" page"),n("span",{class:"token punctuation"},"."),s("path "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},'"/"'),n("span",{class:"token punctuation"},","),s(`
      maxSuggestions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("ul",null,[n("li",null,[s("热键 "),n("code",null,"s")])],-1),C={href:"https://theme-hope.vuejs.press/zh/config/plugins/intro.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://ecosystem.vuejs.press/zh/plugins/search.html",target:"_blank",rel:"noopener noreferrer"},H=c(`<h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧"><span>小技巧</span></a></h2><h3 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>:::{info | note | tip | warning | caution | details} TEXT
XXXX
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),X={href:"https://theme-hope.vuejs.press/zh/guide/markdown/hint.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html#hint",target:"_blank",rel:"noopener noreferrer"},G=n("h3",{id:"router",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#router"},[n("span",null,"router")])],-1),N=n("blockquote",null,[n("p",null,[s("站内的每一个文件夹下的 README.md 或者 index.md 文件都会被 "),n("mark",null,"自动编译"),s(" 为 index.html，对应的链接将被视为 /。")])],-1),S=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考"},[n("span",null,"参考")])],-1),Z={href:"https://v2.vuepress.vuejs.org/zh/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://theme-hope.vuejs.press/zh/guide/",target:"_blank",rel:"noopener noreferrer"};function M(R,O){const t=o("ExternalLinkIcon"),u=o("Tabs"),p=o("CodeTabs"),r=o("VuePlayground");return v(),m("div",null,[b,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",h,[s("table to md"),e(t)])])])]),g,n("blockquote",null,[n("ul",null,[n("li",null,[s("生成tree格式结构: "),n("a",_,[s("Folder Explorer tool"),e(t)])])])]),f,e(u,{id:"123",data:[{id:"github部署"},{id:"GitHub Actions 自定义工作流"}]},{title0:a(({value:l,isActive:i})=>[s("github部署")]),title1:a(({value:l,isActive:i})=>[s("GitHub Actions 自定义工作流")]),tab0:a(({value:l,isActive:i})=>[y,n("ul",null,[n("li",null,[n("a",x,[s("GitHub Pages 文档"),e(t)])]),n("li",null,[n("a",w,[s("GitHub Actions 入门教程 - 阮一峰的网络日志"),e(t)])]),n("li",null,[n("a",A,[s("Deploy to GitHub Pages · Actions · GitHub Marketplace · GitHubgit-commitgit-commit"),e(t)])])])]),tab1:a(({value:l,isActive:i})=>[j]),_:1}),B,e(p,{id:"153",data:[{id:"pnpm安装"},{id:"config主题中启用"}]},{title0:a(({value:l,isActive:i})=>[s("pnpm安装")]),title1:a(({value:l,isActive:i})=>[s("config主题中启用")]),tab0:a(({value:l,isActive:i})=>[D]),tab1:a(({value:l,isActive:i})=>[P]),_:1}),e(r,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"24f52280",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8aDE%2Be3sgbXNnIH19PC9oMT5cbiAgPGlucHV0IHYtbW9kZWw9XCJtc2dcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiZGVtb1wiKTtcbjwvc2NyaXB0PlxuIn0%3D"}),T,e(p,{id:"169",data:[{id:"pnpm安装"},{id:"config主题中启用"}]},{title0:a(({value:l,isActive:i})=>[s("pnpm安装")]),title1:a(({value:l,isActive:i})=>[s("config主题中启用")]),tab0:a(({value:l,isActive:i})=>[V]),tab1:a(({value:l,isActive:i})=>[I]),_:1}),q,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",C,[s("主题插件 | vuepress-theme-hope"),e(t)])]),n("li",null,[n("a",E,[s("search | VuePress 生态系统"),e(t)])])])]),H,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",X,[s("提示容器 | vuepress-theme-hope"),e(t)])]),n("li",null,[n("a",z,[s("MdEnhance 插件配置 | vuepress-theme-hope"),e(t)])])])]),G,N,S,n("ul",null,[n("li",null,[n("a",Z,[s("介绍 | VuePress"),e(t)])]),n("li",null,[n("a",J,[s("指南 | vuepress-theme-hope"),e(t)])])])])}const U=d(k,[["render",M],["__file","vuehope.html.vue"]]),Y=JSON.parse('{"path":"/vue/vuehope.html","title":"vuepress","lang":"en-US","frontmatter":{"icon":"vue","title":"vuepress","gitInclude":["../../.github/workflows/deploy-docs.yml"]},"headers":[{"level":2,"title":"依赖说明","slug":"依赖说明","link":"#依赖说明","children":[]},{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"目录结构 todo","slug":"目录结构-todo","link":"#目录结构-todo","children":[]},{"level":2,"title":"部署 todo","slug":"部署-todo","link":"#部署-todo","children":[]},{"level":2,"title":"Vue演示","slug":"vue演示","link":"#vue演示","children":[]},{"level":2,"title":"搜索插件","slug":"搜索插件","link":"#搜索插件","children":[]},{"level":2,"title":"小技巧","slug":"小技巧","link":"#小技巧","children":[{"level":3,"title":"提示","slug":"提示","link":"#提示","children":[]},{"level":3,"title":"router","slug":"router","link":"#router","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1710934827000,"updatedTime":1711012154000,"contributors":[{"name":"eleven","email":"sandyozeng@163.com","commits":6}]},"readingTime":{"minutes":1.92,"words":577},"filePathRelative":"vue/vuehope.md","localizedDate":"March 20, 2024"}');export{U as comp,Y as data};
