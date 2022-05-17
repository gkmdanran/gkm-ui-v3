<template>
    <el-icon :color="color" :size="size" class="ez-icon">
        <component :is="getIconComponent(icon)"></component>
    </el-icon>
</template>
<script lang="ts">
export default {
    name: "ezIcon",
}
</script>
<script setup lang="ts">
import * as icons from '@element-plus/icons-vue'
defineProps({
    icon: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    size: {
        type: Number
    }
})
const getIconComponent = (iconName: string) => {
    return { ...icons }[iconName]
}
</script>
