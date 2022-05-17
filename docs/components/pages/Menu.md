# Menu 菜单


<MenuCommon />

```html
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
```


ezMenu属性、事件、方法均可参考[ElementPlus](https://element-plus.gitee.io/zh-CN/component/menu.html#menu-%E5%B1%9E%E6%80%A7)

ezMenu扩展属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|menuJson|menu渲染配置|object|-|必填|

menuJson配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|menus|subMenu与menuItem配置对象|array|-|-|
|treeProps|配置对象别名|object|-|{icon:"icon",id:"id",children:"children", name:"name",path:"path"}|

配置对象
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|id|菜单唯一标识|string|-|-|
|icon|菜单图标|string|ElmentPlus图标库|-|
|name|菜单名称|string|-|-|
|path|菜单路径|string|-|-|
|children|子菜单|array|-|-|
|attributes|ElementPlus的[menu-item属性](https://element-plus.org/zh-CN/component/menu.html#menu-item-%E5%B1%9E%E6%80%A7)|object|-|-|


ezMenu扩展事件
|事件名称|说明|回调参数|
|-|-|-|
|clickMenuItem|点击菜单每一项后的回调|menuJson.menus中的menuItem配置对象|