import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "小凯同学的网址导航",
  description: "资源网址导航 - 为开发者提供各种资源网址导航，包括前端、后端、设计、工具等等。",
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    /* 右侧大纲配置 */
    outline: {
      // level: 'deep',
      label: '资源分类',
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    footer: {
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 小凯同学`
    },
  }
})
