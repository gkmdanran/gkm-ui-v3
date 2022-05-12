import gkmUI from '../../packages/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus, {
        locale: zhCn
    })
    app.use(gkmUI)
})


