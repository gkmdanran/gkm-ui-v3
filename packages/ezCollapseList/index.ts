import ezCollapseList from './src/index.vue'
import { App } from 'vue'
export default function (app: App) {
    app.component(ezCollapseList.name, ezCollapseList)
}