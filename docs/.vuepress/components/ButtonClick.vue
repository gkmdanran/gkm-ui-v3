<template>
    <ez-button :throttle="2000" 
        @click="handleClick">2秒只能点一次</ez-button>
    <ez-button :throttle="-1" 
        @click="handleClick2">手动解除</ez-button>
    <ez-button :throttle="-1" confirm="确认吗" 
        @confirmClick="handleClick3">删除</ez-button>
</template>
<script lang="ts" setup>
function handleClick(event) {
    console.log('click', event);
}
function handleClick2({ event, status }) {
    console.log('click2', event);
    setTimeout(() => {
        status.disabled = false
    }, 3000);
}
function handleClick3(status) {
    console.log('click3');
    setTimeout(() => {
        status.disabled = false
    }, 3000);
}
</script>
