<template>
    <el-sub-menu v-if="
        menu[(treeProps && treeProps.children) || 'children'] &&
        menu[(treeProps && treeProps.children) || 'children'].length > 0
    " :index="String(menu[(treeProps && treeProps.id) || 'id'] || '')" v-bind="menu.attributes">
        <template #title>
            <ez-icon :icon="menu[(treeProps && treeProps.icon) || 'icon']"
                v-if="menu[(treeProps && treeProps.icon) || 'icon']"></ez-icon>
            <span>{{ menu[(treeProps && treeProps.name) || "name"] || '' }}</span>
        </template>
        <menu-tree v-for="(item, index) in menu[
            (treeProps && treeProps.children) || 'children'
        ] || []" :tree-props="treeProps" :key="index" :menu="item" :parent-path="
    parentPath + (menu[(treeProps && treeProps.path) || 'path'] || '')
"></menu-tree>
    </el-sub-menu>
    <el-menu-item v-else :index="parentPath + (menu[(treeProps && treeProps.path) || 'path'] || '')"
        v-bind="menu.attributes">
        <template #title>
            <ez-icon :icon="menu[(treeProps && treeProps.icon) || 'icon']"
                v-if="menu[(treeProps && treeProps.icon) || 'icon']"></ez-icon>
            <span>{{ menu[(treeProps && treeProps.name) || "name"] || '' }}</span>
        </template>
    </el-menu-item>
</template>
<script lang="ts">
export default {
    name: "menuTree",
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import ezIcon from '../../ezIcon/src/index.vue'
defineProps({
    menu: {
        type: Object,
        default: function () {
            return {}
        },
    },
    treeProps: {
        type: Object,
    },
    parentPath: {
        type: String,
    },
})
</script>