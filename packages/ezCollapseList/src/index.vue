<template>
    <div class="ez-collapse-list">
        <div class="collapse-item" v-for="(item, index) in data" :key="index"
            v-show="expand || (!expand && index < limit)">
            <slot :row="item" :index="index">{{ item }}</slot>
            <div class="btns"
                v-if="data.length > limit && ((expand && index === data.length - 1) || (!expand && index === limit - 1))">
                <el-button v-show="!expand" type="text" @click="expandClick(true)">
                    <slot name="unfold">展开</slot>
                </el-button>
                <el-button type="text" v-show="expand" @click="expandClick(false)">
                    <slot name="fold">收起</slot>
                </el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "ezCollapseList",
}
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps({
    expand: {
        type: Boolean,
        default: false,
    },
    data: {
        type: Array,
        default: () => [],
    },
    limit: {
        type: Number,
        default: 1,
    },
})
const emits = defineEmits(['update:expand'])
function expandClick(type: boolean) {
    emits("update:expand", type)
}
</script>
<style scoped>
.ez-collapse-list {
    font-size: 14px;
    line-height: 1.5em;
}

.ez-collapse-list .el-button--text {
    padding: 0;
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    height: auto;
}

.collapse-item {
    display: flex;
    align-items: center;
}

.btns {
    margin-left: 5px;
}
</style>
