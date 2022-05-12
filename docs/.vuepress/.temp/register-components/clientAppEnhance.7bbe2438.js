import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("FooBar", defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/docs/.vuepress/components/FooBar.vue")))
}
