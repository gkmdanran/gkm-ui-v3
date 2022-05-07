import ezIcon from './src/index.vue'
import { App } from 'vue'
export default function (app: App) {
    app.component(ezIcon.name, ezIcon)
}