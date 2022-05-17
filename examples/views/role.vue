<template>
    <ez-panel :panel-json="json" v-model:search="search" v-model:pagination="page" :tableTotal="1000" :tableData="data"
        ref="rolePanel" @refresh-table="change">
        <template #tableBottom>
            <el-button type="primary" @click="clear">清 除</el-button>
        </template>
    </ez-panel>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { json } from './index'



const search = ref({
    name: '小明',
    age: 1231
})
const page = reactive({
    page: 6,
    pageSize: 30
})
const rolePanel = ref()
const data = ref<any[]>([])
function change({ combine }: any) {
    console.log(combine)
    data.value = []
    window.setTimeout(() => {
        data.value = [
            { name: '小明', english: 90, chinese: 60, math: 71 },
            { name: '小王', english: 93, chinese: 20, math: 78 },
            { name: '小刚', english: 92, chinese: 40, math: 98 },
            { name: '小白', english: 91, chinese: 60, math: 88 },
        ]
    }, 300)

}
function clear() {
    rolePanel.value.table.clearSelection()
}

</script>