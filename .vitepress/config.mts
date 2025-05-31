import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcExclude: ["README.md"],
  title: "剧场版世界计划观前指南",
  description: "有关《剧场版世界计划:崩坏的世界与无法歌唱的初音未来》的观前指南，包含了未接触原作的观众的快速理解内容。",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
       { text: '赴港观影指南', link: '/to-hk' },
      { text: '无原作基础观前设定快速阅读', link: '/fastibh' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present YourName",
      },
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
