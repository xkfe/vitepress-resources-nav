import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import { pwa } from "./scripts/pwa";

// https://vitepress.dev/zh/reference/site-config
export default withPwa(
  defineConfig({
    lang: "zh-Hans",
    title: `小凯同学的网址导航`,
    description:
      "资源网址导航 - 为开发者提供各种资源网址导航，包括前端、后端、工具等。",
    lastUpdated: true,
    outDir: "dist",
    head: [
      ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      [
        "script",
        {
          async: "async",
          src: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
        },
      ],
      [
        "script",
        {
          async: "async",
          src: "https://hm.baidu.com/hm.js?c1758ab719e62956b260cc77d3e7e052",
        },
      ],
    ],
    themeConfig: {
      logo: "/logo.png",
      search: {
        // provider: 'local'
        provider: "algolia",
        options: {
          appId: "JYF98YKDK3", // Application ID
          apiKey: "fa57f6db4c226072e83b858bec2e0c37", // Search API Key
          indexName: "resources-nav-kaife",
          placeholder: "搜索资源",
          translations: {
            button: {
              buttonText: "搜索资源",
              buttonAriaLabel: "搜索资源",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
      /* 右侧大纲配置 */
      outline: {
        // level: 'deep',
        label: "资源导航",
      },
      lastUpdated: {
        text: "最后更新于",
        formatOptions: {
          dateStyle: "short",
          timeStyle: "medium",
        },
      },
      // socialLinks: [
      //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      // ]
      footer: {
        copyright: `版权所有 © 2024-${new Date().getFullYear()} 小凯同学`,
      },
      // @ts-ignore
      // https://giscus.app/zh-CN
      comment: {
        repo: "xkfe/vitepress-resources-nav",
        repoId: "R_kgDOLu6txA",
        category: "Announcements",
        categoryId: "DIC_kwDOLu6txM4Ce4GG",
      },
      //  vite: {
      //   plugins: [MarkdownPreview()],
      // },
    },
    pwa,
  })
);
