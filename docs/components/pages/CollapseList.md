# CollapseList 折叠列表

<CollapseList/>

```html
<template>
    <ez-collapse-list 
        :data="dataSource" 
        :limit="2" 
        @change="handleChange"
    >
        <template #default="scope">
            <span>{{ scope.index + 1 }}、</span>
            <span>{{ scope.row.name }}:</span>
            <span>{{ scope.row.score }}</span>
        </template>
    </ez-collapse-list>
</template>
<script lang="ts" setup>
const dataSource = [
    { name: '小明', score: 93 },
    { name: '小红', score: 81 },
    { name: '小王', score: 52 },
    { name: '小刚', score: 87 }
]
function handleChange(val) {
    console.log(val)
}
</script>
```

ezCollapseList属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|data|列表数据|array|-|-|
|limit|列表长度限制，超出折叠|number|-|1|
|expand|false:折叠状态，true展开状态|string|-|false|

ezCollapseList事件
|事件名称|说明|回调参数|
|-|-|-|
|change|展开折叠时的回调|type:展开折叠状态|

ezCollapseList插槽
|name|说明|
|-|-|
|—|自定义行的内容 作用域参数为 { index, row }|
|fold|收起按钮，默认:'收起'|
|unfold|展开按钮，默认:'展开'|