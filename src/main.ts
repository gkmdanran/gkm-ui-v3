import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import ezUI from '../packages/index'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(router)
app.use(store)
app.use(ezUI)
app.mount('#app')








