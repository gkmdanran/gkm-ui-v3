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
