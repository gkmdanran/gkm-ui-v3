# Icon 按钮

<Icon/>

```html
<template>
    <ez-icon icon="AddLocation" color="red"></ez-icon>
    <ez-icon icon="Aim" :size="18"></ez-icon>
    <ez-icon icon="AlarmClock" color="#33333" :size="20"></ez-icon>
    <ez-icon icon="Apple" color="pink" :size="22"></ez-icon>
    <ez-icon icon="ArrowDownBold" color="blue" :size="24"></ez-icon>
    <ez-icon icon="Sort" color="red" :size="26"></ez-icon>
</template>
```

ezIcon属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|icon|图标|string|ElementPlus图标库|必填|
|color|图标颜色|string|-|inherit|
|size|图标大小|number|-|-|