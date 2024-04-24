import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './scripts/pwa'

// https://vitepress.dev/zh/reference/site-config
export default withPwa(defineConfig({
  lang: 'zh-Hans',
  title: "小凯同学的网址导航",
  description: "资源网址导航 - 为开发者提供各种资源网址导航，包括前端、后端、工具等。",
  lastUpdated: true,
  outDir: 'dist',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', { async:'async', src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }],
    ['script', { async:'async', src: 'https://hm.baidu.com/hm.js?c1758ab719e62956b260cc77d3e7e052' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    /* 右侧大纲配置 */
    outline: {
      // level: 'deep',
      label: '资源导航',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    footer: {
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 小凯同学`
    },
    // @ts-ignore
    // https://giscus.app/zh-CN
    comment: {
      repo: 'xkfe/vitepress-resources-nav',
      repoId: 'R_kgDOLu6txA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOLu6txM4Ce4GG',
    },
    //  vite: {
    //   plugins: [MarkdownPreview()],
    // },
  },
  pwa
}))
