# Table 表格

<TableCommon/>

```html
<template>
    <ez-table 
        border 
        ref="myTable" 
        :table-json="tableJson" 
        :data="tableData" 
        @selection-change="handleSelectionChange"
    >
        <template #chineseHeader="scope">
            <span>语文（头部插槽）</span>
        </template>
        <template #chinese="scope">
            {{ scope.$index }}、{{ scope.row.chinese >= 60 ? '合格' : '不合格' }}
        </template>
    </ez-table>
    <div style="margin-top: 20px">
        <ez-button @click="handleSelect" type="primary">选中第一行</ez-button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const myTable = ref()
const tableData = [
    { name: '小红', english: 90, math: 78, chinese: 69, geography: 91 },
    { name: '小王', english: 60, math: 98, chinese: 67, geography: 92 },
    { name: '小张', english: 54, math: 58, chinese: 45, geography: 93 },
    { name: '小李', english: 87, math: 56, chinese: 89, geography: 94 },
]
const tableJson = {
    columns: [
        { type: 'selection' },
        {
            prop: 'name',
            label: '姓名',
        },
        {
            label: '分数',
            children: [
                {
                    label: '语言类',
                    children: [
                        {
                            label: '英语',
                            prop: 'english',
                            align:'center'
                        },
                        {
                            label: '语文',
                            prop: 'chinese',
                            slotName: 'chinese',
                            headerSlot: 'chineseHeader'
                        },
                    ]
                },
                {
                    label: '数学',
                    prop: 'math',
                    show: true
                },
                {
                    label: '地理',
                    prop: 'geography',
                    show: false
                }
            ]
        }
    ]
}
function handleSelectionChange(val) {
    console.log(val)
}
function handleSelect() {
    myTable.value.ezTable.toggleRowSelection(tableData[0])
}
</script>
```

ezTable属性、事件、方法均可参考[ElementPlus](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)

ezTable扩展属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|tableJson|table渲染配置|object|-|必填|


tableJson.columns配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|prop|数据字段|string|-|-|
|label|字段名称|string|-|-|
|type|对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮|string|selection / index / expand|-|
|children|表格嵌套|array|-|-|
|slotName|表格内容插槽名|string|-|-|
|headerSlot|表格头部插槽名|string|-|-|
|show|表格列是否展示|boolean|-|true|
|其余属性|参考ElementPlus的[Table-column属性](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)|-|-|-|


ezTable扩展插槽
|name|说明|
|-|-|
|ezEmpty|当数据为空时自定义的内容|
|ezAppend|插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。|
|pagination|表格底部分页控件存放插槽|
|slotName或headerSlot定义的插槽|-|

ezTable方法

调用时需要通过 `xxx.ezTable.xx方法()` 的形式调用，方法名及参数请参考[ElementPlus](https://element-plus.org/zh-CN/component/table.html#table-%E6%96%B9%E6%B3%95)