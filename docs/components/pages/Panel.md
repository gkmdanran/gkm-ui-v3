# Panel 面板
<Panel/>


```html
<template>
    <ez-panel 
        :panel-json="json" 
        v-model:search="search" 
        v-model:pagination="page" 
        :tableTotal="1000" 
        :tableData="data"
        containerColor="#f3f3f3" 
        ref="rolePanel" 
        @refresh-table="change"
    >
        <template #tableBottom>
            <el-button type="primary" @click="clear" style="margin-top:10px">清 除</el-button>
        </template>
    </ez-panel>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
const json = {
    breadcrumb: {
        separator: '>>>',
        navigations: [
            { name: '系统管理', },
            { name: "角色管理", },
        ]
    },
    search: {
        setting: {
            searchItems: {
                name: {
                    label: '姓名',
                    type: 'input',
                    isTrim: true,
                    clearable: false,
                    placeholder: '输入'
                },
                age: {
                    label: '年龄',
                    type: 'input'
                }
            }
        },

    },
    table: {
        setting: {
            columns: [
                { type: 'selection' },
                {
                    label: '姓名',
                    prop: 'name',
                }, {
                    label: '成绩',
                    children: [
                        {
                            label: '数学',
                            prop: 'math'
                        },
                        {
                            label: '语言',
                            children: [
                                {
                                    label: '中文',
                                    prop: 'chinese',
                                    slotName: 'chinese',
                                },
                                {
                                    label: '英文',
                                    prop: 'english'
                                }
                            ]
                        }
                    ]
                }
            ]
        },

    },
    pagination: {}
}
const search = ref({
    name: '小明',
    age: 12
})
const page = reactive({
    page: 1,
    pageSize: 10
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
```


ezPanel属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|panelJson|面板渲染配置|object|-|必填|
|search|搜索表单|object|-|-|
|pagination|分页表单|object|-|-|
|tableTotal|表格总量|number|-|0|
|tableData|表格数据|array|-|-|
|containerColor|面板容器内容背景色|string|-|-|


panelJson配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|breadcrumb|面包屑导航配置|object|-|-|
|search|搜索区域配置|object|-|-|
|table|表格区域配置|object|-|-|
|pagination|分页区域配置|object|-|-|

panelJson.breadcrumb配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|separator|导航分隔符，支持自定义字符或ElementPlus字符串图标|string|-|'/'|
|navigations|导航具体内容配置|array|-|-|

panelJson.search配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|setting|同searchJson配置|object|-|-|
|bindAttrs|同ezSearch属性|object|-|-|

panelJson.table配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|setting|同tableJson配置|object|-|-|
|bindAttrs|同ezTable属性|object|-|-|

panelJson.pagination配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|bindAttrs|参考ElementPlus的[pagination属性](https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7)|object|-|-|

ezPanel事件
|事件名称|说明|回调参数|
|-|-|-|
|changeSearch|搜索控件变更时的回调|searchForm:搜索表单|
|changePagination|分页控件变更时的回调|paginationForm:分页表单|
|sizeChange|pageSize 改变时触发|size:每页条数|
|currentChange|current-change改变时触发|page:当前页|
|prevClick|用户点击上一页按钮改变当前页时触发|page:当前页|
|nextClick|用户点击下一页按钮改变当前页时触发|page:当前页|
|refreshTable|点击返回时回调|{combine,search,pagination},search:搜索表单；pagination：分页表单；combine：搜索表单、分页表单合并|

ezPanel插槽
|name|说明|
|-|-|
|breadTop|面包屑导航顶部|
|breadBottom|面包屑导航底部|
|containerTop|容器内顶部|
|containerBottom|容器内底部|
|tableTop|表格顶部|
|tableBottom|表格底部|
|searchButton|搜索区域插入按钮|
|ezEmpty|当表格数据为空时自定义的内容|
|ezAppend|插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。|
|pagination|表格底部分页控件存放插槽|
|表格配置中slotName或headerSlot定义的插槽|-|


