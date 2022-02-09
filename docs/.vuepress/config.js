module.exports = {
    // base: '/bug-wheels/',

    // 站点配置
    lang: 'zh-CN',
    title: 'Bug Wheels 官方组织',
    description: 'Bug Wheels 官方组织',
    repo: 'bug-wheels/bug-wheels',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/logo_small.jpeg',
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Gitee', link: 'https://gitee.com/bug-wheels' },
            { text: 'GitHub', link: 'https://github.com/bug-wheels' },
          ]
    },
}