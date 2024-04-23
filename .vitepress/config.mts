import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './scripts/pwa'

// https://vitepress.dev/zh/reference/site-config
export default withPwa(defineConfig({
  lang: 'zh-Hans',
  title: "小凯同学的网址导航",
  description: "资源网址导航 - 为开发者提供各种资源网址导航，包括前端、后端、设计、工具等。",
  lastUpdated: true,
  outDir: 'dist',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/path/to/icon.svg' }], for svg
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
