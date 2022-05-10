<template>
    <div class="ez-panel">
        <div class="breadcrumb">
            <slot name="breadTop"></slot>
            <el-breadcrumb v-bind="getBreadcrumbAttrs()" v-if="panelJson.breadcrumb">
                <el-breadcrumb-item v-for="(nav, navIndex) in panelJson.breadcrumb.navigations || []" :key="navIndex"
                    :to="('path' in nav) ? nav.path : undefined" :replace="('replace' in nav) ? nav.replace : false">
                    {{ nav.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
            <slot name="breadBottom"></slot>
        </div>
        <div class="container-box" style="height:calc(100% - 64px)">
            <slot name="containerTop"></slot>
            <ez-search v-if="panelJson.search" :search-json="panelJson.search.setting || {}"
                v-bind="panelJson.search.bindAttrs" :model-value="search" @update:model-value="emitSearchForm"
                @change="changeSearchForm">
            </ez-search>
            <slot name="tableTop"></slot>
            <ez-table v-if="panelJson.table" :table-json="panelJson.table.setting || {}"
                v-bind="panelJson.table.bindAttrs">
                <template v-for="slot in Object.keys(slots)" #[slot]="scope">
                    <slot :name="slot" v-bind="scope"></slot>
                </template>
            </ez-table>


            <slot name="containerBottom"></slot>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "ezPanel",
}
</script>
<script setup lang="ts">
import { defineProps, useSlots } from 'vue'
import * as icons from '@element-plus/icons-vue'
import ezSearch from '../../ezSearch/src/index.vue';
const props = defineProps({
    panelJson: {
        type: Object,
        default: function () {
            return {}
        },
    },
    search: {
        type: Object,
        required: true,
    },
})
const emits = defineEmits(['update:search', 'changeSearch'])
const slots = useSlots()
function getBreadcrumbAttrs() {
    const separator: string = props.panelJson.breadcrumb.separator || '/'
    if (Object.keys(icons).includes(separator)) {
        return {
            separatorIcon: { ...icons }[separator]
        }
    } else {
        return {
            separator,
        }
    }
}
function emitSearchForm(from) {
    emits('update:search', from)
}
function changeSearchForm(from) {
    emits('changeSearch', from)
}

</script>
<style scoped>
.ez-panel {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #f2f2f2;
    padding: 0 20px 20px 20px;
}

.el-breadcrumb {
    padding: 15px 0;
}

.container-box {
    background-color: #fff;
    padding: 15px;
    color: #666;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .12);
}

.ez-search,
.ez-table {
    padding-top: 5px
}
</style>