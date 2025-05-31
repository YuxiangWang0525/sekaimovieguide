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
      message: "<a href='https://github.com/YuxiangWang0525/sekaimovieguide' target='_blank'>我有不同观点或想要编写更详细的内容! 前往GitHub编辑此页面</a><br>Contents publish onder CC BY-NC-SA 4.0. WebFunction SourceCode Release Under Apache License 2.0. Powered by <a href='https://vitepress.dev' target='_blank'>VitePress</a>",
      copyright: "Copyright © 2025-present <a href='https://yuxiangwang0525.com' target='_target'>晚江右海 Wong YukCheung</a> - 本站与SEGA、Colorful Palette、CRYPTON FUTURE MEDIA无关",
      },
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
