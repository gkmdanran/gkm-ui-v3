# Button 按钮

基础的按钮
<ButtonCommon />

```html
<template>
    <div class="row">
        <ez-button>Default</ez-button>
        <ez-button type="primary">Primary</ez-button>
        <ez-button type="success">Success</ez-button>
        <ez-button type="info">Info</ez-button>
        <ez-button type="warning">Warning</ez-button>
        <ez-button type="danger">Danger</ez-button>
        <ez-button>中文</ez-button>
    </div>
    <div class="row">
        <ez-button plain>Plain</ez-button>
        <ez-button type="primary" plain>Primary</ez-button>
        <ez-button type="success" plain>Success</ez-button>
        <ez-button type="info" plain>Info</ez-button>
        <ez-button type="warning" plain>Warning</ez-button>
        <ez-button type="danger" plain>Danger</ez-button>
    </div>
    <div class="row">
        <ez-button round>Round</ez-button>
        <ez-button type="primary" round>Primary</ez-button>
        <ez-button type="success" round>Success</ez-button>
        <ez-button type="info" round>Info</ez-button>
        <ez-button type="warning" round>Warning</ez-button>
        <ez-button type="danger" round>Danger</ez-button>
    </div>
    <div class="row">
        <ez-button icon="Search" circle />
        <ez-button type="primary" icon="Edit" circle />
        <ez-button type="success" icon="Check" circle />
        <ez-button type="info" icon="Message" circle />
        <ez-button type="warning" icon="Star" circle />
        <ez-button type="danger" icon="Delete" circle />
    </div>
</template>
```

确认弹窗按钮
<ButtonConfirm />

```html
<template>
    <ez-button 
        confirm="确认删除吗？" 
        type="danger" 
        @confirmClick="confirmDel" 
        @cancelClick="cancelDel"
    >删除</ez-button>
    <ez-button
        circle 
        :confirm="{
            message: '确认删除吗',
            title: '提示',
            type: 'info',
            confirmText: '确认删除',
            cancelText: '我再想想'}" 
        icon="Delete" 
        type="danger" 
        @confirmClick="confirmDel" 
        @cancelClick="cancelDel" />
</template>
<script lang="ts" setup>
function confirmDel() {
    console.log('删除成功')
}
function cancelDel() {
    console.log('已取消')
}
</script>
```

节流按钮
<ButtonClick />

```html
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
```

ezButton属性和插槽均可参考[ElementPlus](https://element-plus.org/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7)

扩展属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|confirm|二次弹窗配置|string / confirmObj|-|-|
|throttle|节流间隔时间，-1需要手动解除按钮限制|number|-|0|
|icon|按钮图标，只需字符串，无需传入组件|string|-|''|
|loadingIcon|按钮loading图标，只需字符串，无需传入组件|string|-|'Loading'|

confirmObj
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|title|标题|string|-|'提示'|
|message|提示信息|string|-|必填|
|type|图标类型|string|success / info / warning / error|'warning'|
|confirmText|确认按钮文案|string|-|'确定'|
|cancelText|取消按钮文案|string|-|'取消'|

事件
|事件名称|说明|回调参数|
|-|-|-|
|confirmClick|点击确认按钮后的回调|throttle为-1时：status|
|cancelClick|点击取消按钮后的回调|-|
|click|点击按钮时的回调|throttle为-1时：{event,status}|
