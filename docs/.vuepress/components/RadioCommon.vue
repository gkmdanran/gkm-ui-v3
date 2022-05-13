<template>
    <ez-radio-group v-model="radio" :before-change="beforeChange">
        <el-radio :label="3">Option A</el-radio>
        <el-radio :label="6">Option B</el-radio>
        <el-radio :label="9">Option C</el-radio>
    </ez-radio-group>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from 'element-plus'
const radio = ref(3)
function beforeChange(val, oldVal, cb) {
    ElMessageBox.confirm(
        '确认切换吗?',
        'Warning',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            cb(true)
        })
        .catch(() => {
            cb(false)
        })
}
</script>