<template>
    <el-form class="ez-search">
        <el-row>
            <el-col :style="getStyle(item)" v-for="(item, key) in searchJson.searchItems || {}"
                :xl="(item.layout && item.layout.xl) || (searchJson.layout && searchJson.layout.xl) || 4"
                :lg="(item.layout && item.layout.lg) || (searchJson.layout && searchJson.layout.lg) || 6"
                :md="(item.layout && item.layout.md) || (searchJson.layout && searchJson.layout.md) || 8"
                :sm="(item.layout && item.layout.sm) || (searchJson.layout && searchJson.layout.sm) || 12"
                :xs="(item.layout && item.layout.xs) || (searchJson.layout && searchJson.layout.xs) || 24" :key="key">
                <el-form-item :label="item.label + '：'" :prop="key" :style="
                    searchJson.itemStyle
                        ? searchJson.itemStyle
                        : 'margin-right:10px;margin-bottom:15px'
                ">
                    <!-- 输入框 -->
                    <el-input v-if="item.type === 'input'" clearable
                        :placeholder="item.placeholder || `请输入${item.label}`" style="width: 100%" v-bind="item.attrs"
                        :model-value="modelValue[key]"
                        @update:modelValue="handleValueChange($event, modelValue[key], key, item)" />
                    <!-- 选择框 -->
                    <el-select v-else-if="item.type === 'select'" clearable
                        :placeholder="item.placeholder || `请选择${item.label}`" style="width: 100%" v-bind="item.attrs"
                        :model-value="modelValue[key]"
                        @update:modelValue="handleValueChange($event, modelValue[key], key, item)">
                        <el-option v-for="opt in item.selectOptions" v-bind="opt"
                            :key="opt[(item.selectProps && item.selectProps.value) || 'value']"
                            :value="opt[(item.selectProps && item.selectProps.value) || 'value']"
                            :label="opt[(item.selectProps && item.selectProps.label) || 'label']"></el-option>
                    </el-select>
                    <!-- 单选框按钮 -->
                    <el-radio-group v-else-if="item.type === 'radioButton'" style="width: 100%" v-bind="item.attrs"
                        :model-value="modelValue[key]"
                        @update:modelValue="handleValueChange($event, modelValue[key], key, item)">>
                        <el-radio-button v-for="opt in item.selectOptions" v-bind="opt"
                            :key="opt[(item.selectProps && item.selectProps.value) || 'value']"
                            :label="opt[(item.selectProps && item.selectProps.value) || 'value']">
                            {{ opt[(item.selectProps && item.selectProps.label) || 'label'] }}</el-radio-button>
                    </el-radio-group>
                    <!-- 单选框 -->
                    <el-radio-group v-else-if="item.type === 'radio'" style="width: 100%" v-bind="item.attrs"
                        :model-value="modelValue[key]"
                        @update:modelValue="handleValueChange($event, modelValue[key], key, item)">>
                        <el-radio v-for="opt in item.selectOptions" v-bind="opt"
                            :key="opt[(item.selectProps && item.selectProps.value) || 'value']"
                            :label="opt[(item.selectProps && item.selectProps.value) || 'value']">
                            {{ opt[(item.selectProps && item.selectProps.label) || 'label'] }}</el-radio>
                    </el-radio-group>
                    <!-- 时间选择器 -->
                    <el-time-picker v-else-if="item.type === 'timePicker'" clearable
                        :placeholder="item.placeholder || `请选择${item.label}`" style="width: 100%" v-bind="item.attrs"
                        :model-value="modelValue[key]"
                        @update:modelValue="handleValueChange($event, modelValue[key], key, item)">
                    </el-time-picker>
                    <el-time-select v-else-if="item.type === 'timeSelect'" clearable
                        :placeholder="item.placeholder || `请选择${item.label}`" style="width: 100%" v-bind="item.attrs"
                        :model-value="modelValue[key]"
                        @update:modelValue="handleValueChange($event, modelValue[key], key, item)">
                    </el-time-select>
                    <!-- 日期选择器 -->
                    <el-date-picker v-else-if="item.type === 'date' || item.type === 'datetime'" clearable
                        :placeholder="item.placeholder || `请选择${item.label}`" style="width: 100%" v-bind="item.attrs"
                        :model-value="modelValue[key]"
                        @update:modelValue="handleValueChange($event, modelValue[key], key, item)">
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <slot name="searchButton"></slot>
        </el-row>
    </el-form>
</template>
<script lang="ts">
export default {
    name: "ezSearch",
}
</script>
<script setup lang="ts">
const props = defineProps({
    searchJson: {
        type: Object,
        required: true,
    },
    modelValue: {
        type: Object,
        required: true,
    },
    debounce: {
        type: Number,
        default: 300
    }
})
const emits = defineEmits(["change", "update:modelValue"])
let timeout: number = -1
function handleValueChange(newVal: any, oldVal: any, key: any, item: any,) {
    let value = item.type === 'input' && item.isTrim ? newVal.trim() : newVal
    if (value === oldVal) return
    emits("update:modelValue", { ...props.modelValue, [key]: value });
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
        emits("change", { ...props.modelValue, [key]: value });
    }, props.debounce);
}
function getStyle(item:any){
    if (!("layout" in item)) {
        if (typeof props.searchJson.layout === "string") {
            return `min-width:${props.searchJson.layout}!important;max-width:${props.searchJson.layout}!important;`
        } else {
            return "";
        }
    } else if (typeof item.layout === "string") {
        return `min-width:${item.layout}!important;max-width:${item.layout}!important;`;
    } else {
        return "";
    }
}
</script>
<style scoped>
.ez-search ::v-deep(.el-form-item__label) {
    padding: 0;
}

.ez-search ::v-deep(.el-form-item) {
    margin-bottom: 0px;
}
</style>