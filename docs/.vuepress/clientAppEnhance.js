import gkmUI from '../../packages/index'

import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(gkmUI)
})


