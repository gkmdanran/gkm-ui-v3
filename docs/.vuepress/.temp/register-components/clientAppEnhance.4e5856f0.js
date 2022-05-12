import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("ButtonTest", defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/docs/.vuepress/components/ButtonTest.vue")))
}
