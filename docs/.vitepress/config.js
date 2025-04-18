export default {
    head: [
        ['link', { rel: 'icon', href: 'https://api.flweb.cn/doc/image/bot.jpg' }],
    ],
    title: 'Yumeri',
    lastUpdated: true,
    description: '基于nodejs的新一代模块化web应用构建平台',
    lang: 'zh-CN',
    themeConfig: {
        sidebar: {
      '/start/': [
        {
          text: '开始',
          items: [
            { text: '开始之前', link: '/start/' },
            { text: '插件系统', link: '/start/plugin' },
            { text: '指令系统', link: '/start/command' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'API参考',
          items: [
            { text: '开始之前', link: '/start/' },
            { text: '插件系统', link: '/start/plugin' },
            { text: '指令系统', link: '/start/command' }
          ]
        }
      ],
      '/dev/': [
        {
          text: '开发指南',
          items: [
            { text: '总览', link: '/dev/' },
            { text: '插件基础', link: '/dev/plugin' },
            { text: '指令开发', link: '/dev/command' },
            { text: '中间件', link: '/dev/middleware' },
            { text: '事件监听', link: '/dev/event' }
          ]
        }
      ]
    },
        siteTitle: 'Yumeri', //站点标题
        logo: "https://api.flweb.cn/doc/image/bot.jpg",
        description: '一个Minecraft养老社区化服务器',//MCWindyPear Organization
        nav: [
            { text: "主页", link: "/" },
            { text: "开始", link: "/start/" },
            { text: "开发指南", link: "/dev/" },
            { text: "风梨团队", link: "//doc.flweb.cn" },
            { text: "鸣谢", link: "/structure/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/windypear-team" },
        ],
        footer: {
            message: 'Yumerijs',
            copyright: 'Copyright © 2018-2025 <a href="https://www.flweb.cn/">风梨团队</a>'
        },
        lastUpdatedText: "最近更新时间",
        search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索文章",
                  buttonAriaLabel: "搜索文章",
                },
                modal: {
                  noResultsText: "无法找到相关结果",
                  resetButtonTitle: "清除查询条件",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
    },
};
