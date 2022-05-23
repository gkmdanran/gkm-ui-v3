<template>
    <div class="ez-collapse-list">
        <div class="collapse-item" v-for="(item, index) in data" :key="index"
            v-show="selfExpand || (!selfExpand && index < limit)">
            <slot :row="item" :index="index">{{ item }}</slot>
            <div class="btns"
                v-if="data.length > limit && ((selfExpand && index === data.length - 1) || (!selfExpand && index === limit - 1))">
                <el-button v-show="!selfExpand" type="text" @click="expandClick(true)">
                    <slot name="unfold">展开</slot>
                </el-button>
                <el-button type="text" v-show="selfExpand" @click="expandClick(false)">
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
import { watch, ref } from 'vue'
const props = defineProps({
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
const emits = defineEmits(['change'])
const selfExpand = ref<boolean>(false)
watch(() => props.expand, (val) => {
    selfExpand.value = val
}, { immediate: true })
function expandClick(type: boolean) {
    selfExpand.value = type
    emits('change', type)
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
