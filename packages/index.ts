import ezIcon from "./ezIcon/src/index.vue"
import ezTable from "./ezTable/src/index.vue"
import ezButton from "./ezButton/src/index.vue"
import ezCollapseText from "./ezCollapseText/src/index.vue"
import ezCollapseList from "./ezCollapseList/src/index.vue"
import { App } from 'vue'
const components = [ezIcon, ezTable, ezButton, ezCollapseText, ezCollapseList]
export default function (app: App) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}