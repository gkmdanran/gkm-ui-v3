# RadioGroup 单选框组

<RadioCommon/>

```html
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
```

ezRadioGroup属性、事件、插槽均可参考[ElementPlus](https://element-plus.org/zh-CN/component/radio.html#radio-group-%E5%B1%9E%E6%80%A7)

ezRadioGroup扩展属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|before-change|单选框切换前回调|(val,oldVal,cb) => void|-|-|