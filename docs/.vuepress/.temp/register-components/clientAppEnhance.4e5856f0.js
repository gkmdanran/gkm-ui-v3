import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("ButtonClick", defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/docs/.vuepress/components/ButtonClick.vue"))),
  app.component("ButtonCommon", defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/docs/.vuepress/components/ButtonCommon.vue"))),
  app.component("ButtonConfirm", defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/docs/.vuepress/components/ButtonConfirm.vue"))),
  app.component("Icon", defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/docs/.vuepress/components/Icon.vue"))),
  app.component("TableCommon", defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/docs/.vuepress/components/TableCommon.vue")))
}
