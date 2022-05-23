const { path } = require('@vuepress/utils')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {
    lang: 'zh-CN',
    title: 'gkmUI-Plus',
    port: 8087,
    description: '基于ElementPlus二次开发的组件库',

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    theme: defaultTheme({
        contributors: false,
        logo: '/assets/img/photo.jpg',
        navbar,
        sidebar,
        sidebarDepth: 2, // 侧边栏显示2级
    }),

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
}
