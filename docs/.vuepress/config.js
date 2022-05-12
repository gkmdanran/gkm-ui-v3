const { path } = require('@vuepress/utils')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
module.exports = {
    lang: 'zh-CN',
    title: 'easyUI',
    description: '基于elementUI二次开发的组件库',

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    theme: defaultTheme({
        logo: '/assets/img/photo.jpg',
        navbar,
        sidebar,
        sidebarDepth: 2, // 侧边栏显示2级
    }),

    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ]
}
