<template>
    <ez-collapse-text 
        text="小草偷偷地从土里钻出来，嫩嫩的，绿绿的。" 
        :limit="10" 
        :expand="false" 
        @change="handleChange"
    ></ez-collapse-text>
</template>
<script lang="ts" setup>
function handleChange(val) {
    console.log(val)
}
</script>
