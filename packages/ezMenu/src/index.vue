<template>
    <el-menu class="ez-menu" ref="ezMenu" :default-active="active">
        <menu-tree parentPath="" v-for="(item, index) in menuJson.menus" :tree-props="menuJson.treeProps" :key="index"
            :menu="item" @click-menu-item="emits('clickMenuItem', $event)"></menu-tree>
    </el-menu>
</template>
<script lang="ts">
export default {
    name: "ezMenu",
}
</script>
<script setup lang="ts">
import menuTree from './menuTree.vue'
import { computed, ref } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import type { ElMenu } from 'element-plus'
defineProps({
    menuJson: {
        type: Object,
        required: true,
    },
})
const route: RouteLocationNormalizedLoaded = useRoute()
const active = computed<string>(() => route.path)
const ezMenu = ref<InstanceType<typeof ElMenu>>()
const emits = defineEmits(["clickMenuItem"])
defineExpose({
    ezMenu,
})
</script>
<style scoped>
.ez-menu {
    overflow-x: hidden;
}

.el-menu {
    border-right: none;
}
</style>
