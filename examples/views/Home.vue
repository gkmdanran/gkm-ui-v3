<template>
  <el-container style="height:100%">
    <el-header style="background:#ffffff">Header</el-header>
    <el-container>
      <el-aside width="200px" style="height:100%;background-color:#13113a;">
        <ez-menu :menu-json="menuJson" active-text-color="#fff" background-color="#13113a" text-color="#fff" router>
        </ez-menu>
      </el-aside>
      <el-main style="background:#f5f7fa;padding:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>



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

</script>
