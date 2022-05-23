<template>
    <div class="ez-panel">
        <div class="breadcrumb" ref="bread">
            <slot name="breadTop"></slot>
            <el-breadcrumb v-bind="getBreadcrumbAttrs()" v-if="panelJson.breadcrumb">
                <el-breadcrumb-item v-for="(nav, navIndex) in panelJson.breadcrumb.navigations || []" :key="navIndex"
                    :to="('path' in nav) ? nav.path : undefined" :replace="('replace' in nav) ? nav.replace : false">
                    {{ nav.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
            <slot name="breadBottom"></slot>
        </div>
        <div class="container-box" :style="`height:calc(100% - ${breadHeight}px);background: ${containerColor};`">
            <slot name="containerTop"></slot>
            <ez-search v-if="panelJson.search" :search-json="panelJson.search.setting || {}"
                v-bind="panelJson.search.bindAttrs" :model-value="search" @update:model-value="emitSearchForm"
                @change="changeSearchForm">
                <template #searchButton>
                    <slot name="searchButton"></slot>
                </template>
            </ez-search>
            <slot name="tableTop"></slot>
            <ez-table ref="panelTable" v-if="panelJson.table" :table-json="panelJson.table.setting || {}"
                :data="tableData" v-bind="panelJson.table.bindAttrs">
                <template v-for="slot in Object.keys(slots)" #[slot]="scope">
                    <slot :name="slot" v-bind="scope"></slot>
                </template>
            </ez-table>
            <slot name="tableBottom"></slot>
            <div class="pagination" v-if="panelJson.pagination">
                <el-pagination v-bind="panelJson.pagination.bindAttrs" :currentPage="pagination[pageKey]"
                    :page-size="pagination[sizeKey]"
                    :layout="panelJson.pagination.bindAttrs && panelJson.pagination.bindAttrs.layout ? panelJson.pagination.bindAttrs.layout : 'total, prev, pager, next'"
                    :total="tableTotal" @current-change="changeCurrentPage" @size-change="changePageSize"
                    @prev-click="handlePrevClick" @next-click="handleNextClick" />
            </div>
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
import { useSlots, computed, ref, onMounted } from 'vue'
import * as icons from '@element-plus/icons-vue'
import ezSearch from '../../ezSearch/src/index.vue';
import ezTable from '../../ezTable/src/index.vue';
const props = defineProps({
    panelJson: {
        type: Object,
        default: function () {
            return {}
        },
    },
    search: {
        type: Object,
    },
    pagination: {
        type: Object,
    },
    tableTotal: {
        type: Number,
        default: 0
    },
    tableData: {
        type: Array,
        default: function () {
            return []
        },
    },
    containerColor: {
        type: String,
        default: 'transparent'
    }
})
const emits = defineEmits([
    'update:search',
    'changeSearch',
    'update:pagination',
    'changePagination',
    'sizeChange',
    'currentChange',
    'prevClick',
    'nextClick',
    'refreshTable'
])
const slots = useSlots()
const bread = ref()
const breadHeight = ref<number>(0)
const panelTable = ref()
const table = computed(() => panelTable.value.ezTable)
const pageKey = computed(() => {
    return props.panelJson?.pagination?.paginationProps?.page || 'page'
})
const sizeKey = computed(() => {
    return props.panelJson?.pagination?.paginationProps?.size || 'size'
})
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
function emitSearchForm(form) {
    emits('update:search', form)
}
function changeSearchForm(form) {
    emits('changeSearch', form)
    emits('update:pagination', { ...props.pagination, [pageKey.value]: 1 })
    refreshTableData({ ...form }, { ...props.pagination, [pageKey.value]: 1 })
}
function changeCurrentPage(page: number) {
    emits('update:pagination', { ...props.pagination, [pageKey.value]: page })
    emits('changePagination', { ...props.pagination, [pageKey.value]: page })
    emits('currentChange', page)
    refreshTableData({ ...props.search }, { ...props.pagination, [pageKey.value]: page })
}
function changePageSize(size: number) {
    emits('update:pagination', { ...props.pagination, [sizeKey.value]: size })
    emits('changePagination', { ...props.pagination, [sizeKey.value]: size })
    emits('sizeChange', size)
    refreshTableData({ ...props.search }, { ...props.pagination, [sizeKey.value]: size })
}
function handlePrevClick(page: number) {
    emits('prevClick', page)
}
function handleNextClick(page: number) {
    emits('nextClick', page)
}
function refreshTableData(search, pagination) {
    let searchForm = props.panelJson.search ? search : null
    let paginationForm = props.panelJson.pagination ? pagination : null
    let combine = { ...searchForm, ...paginationForm }
    emits('refreshTable', {
        combine,
        search: searchForm,
        pagination: paginationForm
    })
}
onMounted(() => {
    breadHeight.value = bread.value.offsetHeight
})
refreshTableData({ ...props.search }, { ...props.pagination })
defineExpose({
    table
})
</script>
<style scoped>
.ez-panel {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
}

.el-breadcrumb {
    padding-bottom: 15px;
}

.container-box {
    box-sizing: border-box;
    padding: 15px;
    color: #666;
}

.ez-search,
.ez-table {
    padding-top: 5px
}

.pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.el-pagination ::v-deep(.btn-next),
.el-pagination ::v-deep(.btn-prev) {
    background-color: transparent;
}

.el-pagination ::v-deep(.el-pager li) {
    background-color: transparent;
}
</style>