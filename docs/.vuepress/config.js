module.exports = {
  title: '组件库',
  description: 'Personal Website',
  dest: 'public',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块是否显示行号
  },
  themeConfig: {
    nav:[
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '诗和远方', link: '/others/'},
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};