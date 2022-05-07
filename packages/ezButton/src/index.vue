<template>
    <el-button v-if="Object.keys(slots).length === 0" @click="handleClick" :icon="getIconComponent(icon)"
        :loading-icon="getIconComponent(loadingIcon)" class="ez-button" />
    <el-button v-else @click="handleClick" :icon="getIconComponent(icon)" :loading-icon="getIconComponent(loadingIcon)"
        class="ez-button">
        <template #loading v-if="slots.loading">
            <slot name="loading"></slot>
        </template>
        <template #icon v-if="slots.icon">
            <slot name="icon"></slot>
        </template>
        <template #default v-if="slots.default">
            <slot></slot>
        </template>
    </el-button>
</template>
<script lang="ts">
export default {
    name: "ezButton",
}
</script>
<script lang="ts" setup>
import { PropType, useSlots } from "vue"
import { ElMessageBox } from "element-plus"
import * as icons from '@element-plus/icons-vue'
import { IConfirm } from "./type"
const props = defineProps({
    confirm: {
        type: [Object, String] as PropType<IConfirm>,
    },
    icon: {
        type: String,
        default: ''
    },
    loadingIcon: {
        type: String,
        default: 'Loading'
    },
    throttle: {
        type: Number,
        default: 0,
    },
})
const emits = defineEmits(['confirmClick', 'cancelClick', 'click'])
const slots = useSlots()
const getIconComponent = (iconName: string) => {
    return { ...icons }[iconName]
}
let timstamp: number = 0
const status = {
    disabled: false
}
function handleClick(event: Event) {
    if (new Date().valueOf() - timstamp < props.throttle) return;
    if (props.confirm === undefined) {
        !status.disabled && emits("click", props.throttle === -1 ? { event, status } : event)
        timstamp = new Date().valueOf();
        props.throttle === -1 && (status.disabled = true)
    }
    else if (typeof props.confirm === "string") {
        !status.disabled && ElMessageBox.confirm(
            props.confirm,
            "提示",
            {
                confirmButtonText: "确认",
                cancelButtonText: "取消",
                type: "warning",
            }
        )
            .then(() => {
                props.throttle === -1 ? emits("confirmClick", status) : emits("confirmClick")
                timstamp = new Date().valueOf();
                props.throttle === -1 && (status.disabled = true)
            })
            .catch(() => {
                emits("cancelClick")
            })
    } else {
        if (!props.confirm.message)
            throw new Error("confirm.message is required");
        !status.disabled && ElMessageBox.confirm(
            props.confirm.message,
            props.confirm.title || "提示",
            {
                confirmButtonText: props.confirm.confirmText || "确认",
                cancelButtonText: props.confirm.cancelText || "取消",
                type: props.confirm.type || "warning",
            }
        )
            .then(() => {
                props.throttle === -1 ? emits("confirmClick", status) : emits("confirmClick")
                timstamp = new Date().valueOf();
                props.throttle === -1 && (status.disabled = true)
            })
            .catch(() => {
                emits("cancelClick")
            })
    }

}

</script>

