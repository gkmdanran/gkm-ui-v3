<template>
    <ez-menu 
        style="width:200px;height:500px" 
        :menu-json="menuJson" 
        active-text-color="#cec54b"
        background-color="#545c64" 
        text-color="#fff" 
        @click-menu-item="handleClick"
    >
    </ez-menu>
</template>
<script lang="ts" setup>
const menuJson = {
    menus: [
        {
            name: '系统管理',
            path: '/systemManage',
            children: [
                {
                    name: '角色管理',
                    path: '/role',
                },
                {
                    name: '权限管理',
                    path: '/auth',
                }
            ]
        }
    ]
}
function handleClick(menu) {
    console.log(menu)
}
</script>

