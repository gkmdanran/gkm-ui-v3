<template>
    <el-radio-group :model-value="modelValue" @update:modelValue="handleInput" class="ez-radio-group">
        <slot></slot>
    </el-radio-group>
</template>
<script lang="ts">
export default {
    name: "ezRadioGroup",
}
</script>
<script lang="ts" setup>
const props = defineProps({
    modelValue: {
        required: true,
    },
    beforeChange: {
        type: Function,
    },
})
const emits = defineEmits(['update:modelValue', 'change'])

function handleInput(val) {
    if (props.beforeChange === undefined) {
        emits('update:modelValue', val)
        return emits('change', val)
    }
    props.beforeChange(val, props.modelValue, (type: boolean) => {
        if (type) {
            emits('update:modelValue', val)
            emits('change', val)
        } else {
            emits('update:modelValue', props.modelValue)
        }
    })
}

</script>

