<template>
    <div class="ez-collapse-text">
        <div v-show="!expand">
            <span class="text">{{
                    text.length > limit ? `${text.substring(0, limit)}...` : text
            }}</span>
            <el-button type="text" v-if="text.length > limit" @click="expandClick(true)">
                <slot name="unfold">展开</slot>
            </el-button>
        </div>
        <div v-show="expand">
            <span class="text">{{ text }}</span>
            <el-button type="text" v-if="text.length > limit" @click="expandClick(false)">
                <slot name="fold">收起</slot>
            </el-button>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "ezCollapseText",
}
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps({
    expand: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: "",
    },
    limit: {
        type: Number,
        default: 10,
    },
})
const emits = defineEmits(['update:expand'])
function expandClick(type: boolean) {
    emits("update:expand", type)
}
</script>
<style scoped>
.ez-collapse-text {
    width: 250px;
    font-size: 14px;
    line-height: 1.5em;
    word-break: break-all;
}

.ez-collapse-text .el-button--text {
    padding: 0;
    font-size: inherit;
    padding-left: 5px;
    line-height: inherit;
    height: auto;
}
</style>
