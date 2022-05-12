import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/kaiming.gu_sx/Desktop/DemoGKM/vue3ui/ez-ui/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
