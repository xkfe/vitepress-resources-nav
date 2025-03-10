import type { INavData } from './types'

export const NAV_DATA: INavData[] = [
  {
    title: '工具',
    items: [
      {
        icon: '/resources-logos/george.webp',
        badge: {
          text: '推荐',
          type: 'tip'
        },
        title: 'tinypng压缩',
        desc: '智能 WebP、PNG 和 JPEG 压缩',
        link: 'https://tinypng.com/',
      },
      {
        icon: '/resources-logos/imagecompressor.svg',
        title: 'imagecompressor压缩',
        desc: '最佳优化和压缩算法处理 PNG、JPG/JPEG和GIF文件',
        link: 'https://imagecompressor.com/zh/',
      },
      {
        icon: '/resources-logos/picdiet.svg',
        title: 'picdiet',
        desc: '基于mozjpeg，能极速压缩80%的<b style="font-weight:bold">jpg，jpeg</b>图片大小，而不损害其质量',
        link: 'https://picdiet.eula.club/',
      },
      {
        icon: '/resources-logos/convertio.svg',
        title: 'convertio',
        desc: '在线图像文件转换器',
        link: 'https://convertio.co/zh/',
      },
      {
        badge: {
          text: '推荐',
          type: 'tip'
        },
        icon: '',
        title: '在线文本比较',
        desc: '一个可以找出两个文本文件差异的在线差异比较工具',
        link: 'https://text-compare.com/zh-hans/'
      },
      {
        icon: '/resources-logos/snippet-generator.png',
        title: '代码片段生成',
        desc: 'snippet-generator 代码片段生成器，支持 vscode、sublime、atom',
        link: 'https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode'
      },
      {
        badge: {
          text: '推荐',
          type: 'tip'
        },
        icon: '/resources-logos/excalidraw.png',
        title: 'Excalidraw作图',
        desc: 'Excalidraw 是一款虚拟协作白板工具，可让您轻松绘制具有手绘感觉的图表。',
        link: 'https://excalidraw.com/'
      },
      {
        
        icon: '/resources-logos/tldraw.svg',
        title: 'tldraw作图',
        desc: '一款免费且即时的协作绘图工具',
        link: 'https://www.tldraw.com/'
      },
      {
        icon: '/resources-logos/iconce-logo.svg',
        title: 'iconce',
        desc: 'SVG 图标编辑生成工具。',
        link: 'https://iconce.com/'
      },
      {
        icon: '/resources-logos/aspect-logo.png',
        badge: {
          text: '推荐',
          type: 'tip'
        },
        title: 'Aspect',
        desc: 'Aspect - 长宽比例换算工具，平面设计师、UI设计师、网页设计师必备',
        link: 'https://www.shejidaren.com/examples/tools/aspect/index.html'
        
      },
      {
        icon: '/resources-logos/xiaobin-ai.png',
        title: 'AI抠图/证件照',
        desc: '使用开源模型 briaai/RMBG-1.4实现图像抠图,支持单张图像拖拽、粘贴图像和连接、和批量抠图。支持多种格式的证件照制作、支持单张和批量图像格式转换。',
        link: 'https://matting.20133075.xyz/',
      }
    ]
  },
  {
    title: '前端插件',
    items: [
      {
        icon: '/resources-logos/css-loading.png',
        title: 'WebTracing',
        desc: '为前端项目提供完善的监控手段',
        link: 'https://m-cheng-web.github.io/web-tracing/'
      }
    ]
  },
  {
    title: 'CSS-Loaders',
    items: [
      
      {
        icon: '',
        title: 'css-loaders',
        desc: '使用单个元素制作的 600 多个纯 CSS 加载器',
        link: 'https://css-loaders.com/'
      },
      {
        icon: '',
        title: 'cssloaders',
        desc: 'CSS Loader 是不同类型的加载器、旋转器及其源代码的集合',
        link: 'https://cssloaders.github.io/'
      },
      {
        icon: '/resources-logos/css-loading.png',
        title: 'css-loaders',
        desc: '超过 600 个 css 动画集合',
        link: 'https://loading.io/css/'
      },
    ]
  },
  {
    title: '开发助力',
    items: [
      {
        icon: '/resources-logos/caniuse.png',
        title: 'Can I use',
        desc: '查看浏览器支持情况',
        link: 'https://caniuse.com/'
      },
      {
        icon: '/resources-logos/uiverse.png',
        title: 'uiverse',
        desc: '适用于任何项目的开源ui元素',
        link: 'https://uiverse.io/'
      },
    ]
  },
  {
    title: 'Vue生态',
    items: [
      {
        icon: '/resources-logos/vue3.png',
        title: 'Vue3中文文档',
        desc: '渐进式JavaScript 框架',
        link: 'https://v3.cn.vuejs.org/'
      },
      {
        icon: '/resources-logos/vue2cn.svg',
        title: 'Vue2中文文档',
        desc: '渐进式JavaScript 框架',
        link: 'https://v2.cn.vuejs.org/'
      },
      {
        icon: '/resources-logos/vitecn.svg',
        title: 'Vite中文文档',
        desc: '下一代的前端工具链',
        link: 'https://cn.vitejs.dev/'
      },
      {
        icon: '/resources-logos/piniacn.svg',
        title: 'Pinia',
        desc: 'Vue.js状态管理库',
        link: 'https://pinia.vuejs.org/zh/'
      },
      {
        icon: '/resources-logos/persistedstate-cn.svg',
        title: 'pinia-plugin-persistedstate',
        desc: '适用于 Pinia 的持久化存储插件',
        link: 'https://prazdevs.github.io/pinia-plugin-persistedstate/zh/'
      },
      {
        icon: '/resources-logos/nuxt.svg',
        title: 'Nuxt中文文档',
        desc: '直观的Vue 服务端框架',
        link: 'https://nuxt.com.cn/'
      },
      {
        icon: '/resources-logos/vitest.svg',
        title: 'Vitest',
        desc: '下一代测试框架，一个原生支持 Vite 的测试框架。非常快速！',
        link: 'https://cn.vitest.dev/',
      },
      {
        icon: '/resources-logos/macros.svg',
        title: 'Vue Macros',
        desc: '探索更多的宏和语法糖到 Vue 中',
        link: 'https://vue-macros.dev/zh-CN/'
      },
      {
        icon: '/resources-logos/vue-devTools-logo.svg',
        title: 'Vue DevTools',
        desc: 'Vue DevTools 是一款旨在增强 Vue 开发人员体验的工具，它的实时编辑、时间旅行调试和全面检查功能使其成为任何 Vue.js 开发人员的必备工具。',
        link: 'https://devtools-next.vuejs.org/'
      },
      {
        icon: '/resources-logos/vuejs-challenges.png',
        title: 'Vue.js 挑战集合',
        desc: '一个 Vue.js 在线挑战平台',
        link: 'https://cn-vuejs-challenges.netlify.app/'
      },
      {
        icon: '/resources-logos/element-plus-logo.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.gitee.io/#/zh-CN'
      },
      {
        icon: '/resources-logos/antdv.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现',
        link: 'https://antdv.com/components/overview-cn'
      },
      {
        icon: '/resources-logos/arco-design.svg',
        title: 'Arco Design Vue',
        desc: '字节跳动出品的企业级设计系统',
        link: 'https://arco.design/vue/docs/start'
      },
      {
        icon: '/resources-logos/tdesign.svg',
        title: 'TDesign Vue Next',
        desc: '腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系',
        link: 'https://tdesign.tencent.com/'
      },
      {
        icon: '/resources-logos/vueadminwork.png',
        title: 'Vue Admin Work',
        desc: '是一款中后台管理系统，为广大中小型企业提供了快速搭建后台管理系统的解决方案',
        link: 'http://www.vueadminwork.com/'
      },
      {
        icon: '/resources-logos/vueuse.svg',
        title: 'VueUse',
        desc: 'Vue 组合实用程序集合',
        link: 'https://vueuse.org/'
      },
      {
        icon: '/resources-logos/vue-request.png',
        title: 'VueRequest',
        desc: 'VueRequest 的目的是为开发人员提供一种方便、快速的方式来管理 API 状态。通过简单的配置，可以省去那些繁琐的任务，专注于业务核心的开发',
        link: 'https://cn.attojs.org/'
      }
    ]
  },
  {
    title: 'React生态',
    items: [
      {
        icon: '/resources-logos/react.svg',
        title: 'React中文文档',
        desc: 'Facebook开源的用于构建用户界面的库',
        link: 'https://zh-hans.react.dev/'
      },
      {
        icon: '/resources-logos/mobx.png',
        title: 'MobX',
        desc: '简单，可扩展的状态管理',
        link: 'https://zh.mobx.js.org/README.html'
      },
      {
        icon: '/resources-logos/ahooks.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.gitee.io/zh-CN'
      },
      {
        icon: '/resources-logos/nextjs.png',
        title: 'Next.js',
        desc: '静态及服务器端融合渲染的 React 框架',
        link: 'https://www.nextjs.cn/'
      },
      {
        icon: '/resources-logos/ant-design.svg',
        title: 'Ant Design',
        desc: '蚂蚁集团开源的React 组件库',
        link: 'https://ant-design.antgroup.com/index-cn'
      },
    ]
  },
  {
    title: '小程序/跨端',
    items: [
      {
        icon: '/resources-logos/weixin.svg',
        title: '微信官方文档',
        desc: '小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        icon: '/resources-logos/weapp-tailwindcss-logo.svg',
        title: 'weapp-tailwindcss',
        desc: '降低开发维护成本，提升开发效率的小程序 使用tailwindcss 全方面解决方案',
        link: 'https://weapp-tw.icebreaker.top/'
      },
      {
        icon: '/resources-logos/uniapp.png',
        title: 'UniApp',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://zh.uniapp.dcloud.io/'
      },
      {
        icon: '/resources-logos/uni-helper.svg',
        title: 'Uni Helper',
        desc: '旨在增强 uni-app 系列产品的开发体验',
        link: 'https://uni-helper.js.org/awesome-uni-app/'
      },
      {
        icon: '/resources-logos/nutui-uniapp.png',
        badge: {
          text: '文档可能需要VPN',
          type: 'tip'
        },
        title: 'nutui-uniapp',
        desc: '京东风格的轻量级uni-app的UI库',
        link: 'https://nutui-uniapp.netlify.app/'
      },
      {
        icon: '/resources-logos/wot-design-uni.png',
        title: 'wot-design-uni',
        desc: '高颜值、轻量化的uni-app组件库',
        link: 'https://wot-design-uni.gitee.io/'
      }
    ]
  },
  {
    title: '微前端',
    items: [
      {
        icon: '/resources-logos/qiankun.png',
        title: 'qiankun',
        desc: 'qiankun 是一个基于 single-spa 的微前端实现库',
        link: 'https://qiankun.umijs.org/zh'
      },
      {
        icon: '/resources-logos/MicroApp.png',
        title: 'MicroApp',
        desc: 'micro-app 是基于 webcomponent + qiankun sandbox 的微前端方案。',
        link: 'https://micro-zoe.github.io/micro-app/'
      },
      {
        icon: '/resources-logos/emp.avif',
        title: 'EMP',
        desc: 'EMP 方案是基于 webpack 5 module federation 的微前端方案',
        link: 'https://emp2.netlify.app/'
      },
      {
        badge: {
          text: '推荐',
          type: 'tip'
        },
        icon: '/resources-logos/wujie.svg',
        title: '无界',
        desc: '极致的微前端框架基于 WebComponent 容器 + iframe 沙箱',
        link: 'https://wujie-micro.github.io/doc/'
      }
    ]
  },
  {
    title: 'CSS框架',
    items: [
      {
        icon: '/resources-logos/unocss.svg',
        title: 'UnoCSS中文网',
        desc: '即时按需的原子化 CSS 引擎',
        link: 'https://unocss.nodejs.cn/'
      },
      {
        icon: '/resources-logos/tailwind.png',
        title: 'tailwindcss',
        desc: '只需 HTML 即可快速构建现代网站',
        link: 'https://tailwind.nodejs.cn/'
      }
    ]
  },
  {
    title: 'Node生态',
    items: [
      {
        icon: '/resources-logos/nodejs-logo.webp',
        title: 'Node.js 中文网',
        desc: 'Node.js 是一个开源的、跨平台的 JavaScript 运行时环境',
        link: 'https://nodejs.cn/'
      },
    ]
  },
  {
    title: '工程化',
    items: [
      {
        icon: '/resources-logos/cz-git.png',
        title: 'cz-git',
        desc: '工程性更强，轻量级，高度自定义，输出标准格式的 Commitizen 适配器和 CLI',
        link: 'https://cz-git.qbb.sh/zh/'
      }
    ]
  },
  {
    title: 'AI大模型',
    items: [
      {
        icon: '/resources-logos/openai.svg',
        badge: {
          text: '需要VPN',
          type: 'tip'
        },
        title: 'ChatGPT',
        desc: '一个基于大规模预训练的通用对话模型',
        link: 'https://chat.openai.com/chat'
      },
      {
        icon: '/resources-logos/gemini.png',
        badge: {
          text: '需要VPN',
          type: 'tip'
        },
        title: 'Gemini',
        desc: 'Google推出的一款自然语言处理模型',
        link: 'https://gemini.google.com/'
      },
      {
        icon: '/resources-logos/xfyun-xinghuo.svg',
        title: '讯飞星火',
        desc: '讯飞星火认知大模型',
        link: 'https://xinghuo.xfyun.cn/'
      }
    ]
  },
  {
    title: '可视化图表',
    items: [
      {
        icon: '/resources-logos/echarts.png',
        title: 'ECharts',
        desc: '一个使用 JavaScript 实现的开源可视化库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        badge: {
          text: '需要登录看广告',
          type: 'tip'
        },
        icon: '/resources-logos/isqqw-logo.ico',
        title: 'isqqw',
        desc: 'ECharts Demo集合(ECharts社区)',
        link: 'https://www.isqqw.com/'
      },
      {
        icon: '/resources-logos/ppchart-logo.ico',
        title: 'ppchart',
        desc: '让图表更简单。PPChart 提供 Echarts 收录、图表制作等服务(ECharts社区)',
        link: 'https://ppchart.com/'
      },
      {
        icon: '/resources-logos/makeapie-logo.png',
        title: '可视化社区',
        desc: 'makeapie echarts图表可视化案例, 分享你的可视化作品',
        link: 'https://www.makeapie.cn/echarts'
      }
    ]
  },
  {
    title: '在线CDE',
    items: [
      {
        icon: '/resources-logos/codesandbox.svg',
        title: 'codesandbox',
        desc: 'CodeSandbox is a cloud development platform that empowers developers to code, collaborate and ship projects of any size from any device in record time.',
        link: 'https://codesandbox.io/'
      },
      {
        icon: '/resources-logos/stackblitz.svg',
        title: 'StackBlitz',
        desc: 'StackBlitz 是一个协作式在线集成开发环境',
        link: 'https://stackblitz.com/'
      },
      {
        icon: '/resources-logos/code-juejin.png',
        title: '码上掘金',
        desc: '码上掘金是由稀土掘金推出的一款面向开发者的在线code playground服务，旨在为每一位热爱技术的人提供一个快速分享、交流编码知识的平台',
        link: 'https://code.juejin.cn/'
      },
      {
        icon: '/resources-logos/code-juejin.png',
        title: '码上掘金灵感作品',
        desc: '码上掘金编程挑战赛灵感作品',
        link: 'https://juejin.cn/challenge/spark/'
      },
      {
        icon: '/resources-logos/inscode.ico',
        badge: {
          text: 'CSDN同公司产品',
          type: 'info'
        },
        title: "InsCode",
        desc: 'InsCode 是一个一站式的软件开发服务平台，从开发-部署-运维-运营，都可以在 InsCode 轻松完成',
        link: 'https://inscode.csdn.net/'
      }
    ]
  },
  {
    title: '网站托管',
    items: [
      {
        icon: '/resources-logos/netlify.png',
        title: 'Netlify',
        desc: "Netlify是一个提供静态资源网络托管的综合平台",
        link: 'https://www.netlify.com/'
      },
      {
        icon: '/resources-logos/vercel.png',
        title: 'vercel',
        desc: '开发者免费的网站托管平台',
        link: 'https://vercel.com/'
      }
    ]
  },
  {
    title: '前端面试',
    items: [
      {
        icon: '/resources-logos/lgwebdream.ico',
        title: '前端面试',
        desc: '前端面试，前端刷题必备，收录 1000+ 大厂前端面试真题',
        link: 'https://lgwebdream.github.io/FE-Interview/',
      },
      {
        icon: '',
        title: 'web前端面试 - 面试官系列',
        desc: '语音打卡社群(JS每日一题)维护的前端面试题库，包含不限于Vue面试题，React面试题，JS面试题，HTTP面试题，工程化面试题，CSS面试题，算法面试题，大厂面试题，高频面试题',
        link: 'https://vue3js.cn/interview/'
      },
      {
        badge: {
          text: '需要付费',
          type: 'warning'
        },
        icon: '',
        title: '前端进阶之旅',
        desc: '前端系统进阶笔记 & 面试指南',
        link: 'https://interview.poetries.top/'
      },
      {
        icon: '/resources-logos/leetcode.svg',
        title: 'leetcode',
        desc: '力扣 (LeetCode) 是一个专注于算法，数据结构，编程的在线学习和交流平台，提供最经典，最热门，最实用的面试题，竞赛，职业发展等内容',
        link: 'https://leetcode.cn/'
      },
    ]
  },
  {
    title: '前端学习',
    items: [
      {
        icon: '/resources-logos/zh-javascript-info.png',
        title: '现代 JavaScript 教程',
        desc: '以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。',
        link: 'https://zh.javascript.info/',
      },
    ]
  }
  // {
  //   title: 'macOS软件',
  //   items: [
  //     {
  //       icon: '',
  //       title: '',
  //       desc: '',
  //       link: '',
  //     }
  //   ]
  // }
  
]
