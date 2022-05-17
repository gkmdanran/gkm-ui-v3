import gkmUI from '../../packages/index'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus, {
        locale
    })
    app.use(gkmUI)
})


