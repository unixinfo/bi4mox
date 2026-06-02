export default {
  title: "业余无线电资料站",
  description: "业余无线电考试、设台、设备、天馈、中继台全指南",
  base: '/bi4mox/',
  
  // 关闭 cleanUrls，避免 GitHub Pages 404
  cleanUrls: false,
  
  // 忽略死链接检查
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: "首页", link: "/index.html" },
      { text: "全部资料", link: "/guide/01-法律法规" }
    ],
    
    sidebar: [
      {
        text: "📡 业余无线电资料大全",
        items: [
          { text: '📜 法律法规', link: '/guide/01-法律法规' },
          { text: '📝 业余无线电考试', link: '/guide/02-业余无线电考试' },
          { text: '📡 设台与许可', link: '/guide/03-设台与许可' },
          { text: '🔧 设备介绍', link: '/guide/04-设备介绍' },
          { text: '📶 天馈系统', link: '/guide/05-天馈系统' },
          { text: '📋 设台申请与变更', link: '/guide/06-首次设台及变更申请' },
          { text: '🎉 业余活动', link: '/guide/07-业余活动' },
          { text: '📞 中继台点名通联', link: '/guide/08-中继台点名通联记录' },
          { text: '📊 中继台参数', link: '/guide/09-中继台参数' },
          { text: '❤️ 中继台捐赠', link: '/guide/10-中继台捐赠' }
        ]
      }
    ],
    
    footer: {
      copyright: "Copyright © 2025 业余无线电资料站"
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于'
    }
  },
  
  // 头部配置
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ]
}