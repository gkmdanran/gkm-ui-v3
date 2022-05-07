import ezIcon from "./ezIcon/src/index.vue"
import ezTable from "./ezTable/src/index.vue"
import ezButton from "./ezButton/src/index.vue"
import { App } from 'vue'
const components = [ezIcon, ezTable, ezButton]
export default function (app: App) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}