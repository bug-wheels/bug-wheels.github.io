module.exports = {
  // base: '/bug-wheels/',

  // 站点配置
  lang: 'zh-CN',
  title: 'Bug Wheels 官方组织',
  description: 'Bug Wheels 官方组织',
  repo: 'bug-wheels/bug-wheels.github.io', // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo_small.jpeg',
    navbar: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: '十二星座', link: '/constellation/'},
      // {text: '希腊神话', link: '/greece/'},
      {text: '其他', link: '/other/'},
      {text: 'Spring', link: '/spring/'},
      {text: 'Gitee', link: 'https://gitee.com/bug-wheels'},
      {text: 'GitHub', link: 'https://github.com/bug-wheels'},
    ],
    sidebar: {
      '/guide/': [{
        text: '指南',
        children: ['README.md', {
          text: '快速上手', link: 'getting-started',
        }],
      }],
      '/constellation/': [{
        text: '十二星座',
        children: [{
          text: '项目列表', link: 'README.md',
        }, {
          text: '快速上手', link: 'getting-started',
        }, {
          text: 'Capricorn 注册中心', link: 'capricorn',
        }],
      }],
      '/greece/': [{
        text: '希腊神话',
        children: [{
          text: '项目列表', link: 'README.md',
        }],
      }],
      '/other/': [{
        text: '其他项目',
        children: [
          {text: '项目列表', link: 'README.md'},
          {text: 'Thrift Spring Boot Starter', link: 'thrift-spring-boot-starter'},
          {text: 'Maven Thrift Plugin', link: 'maven-thrift-plugin'},
        ],
      }]
    },
  },
}
