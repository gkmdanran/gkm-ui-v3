<template>
  <ez-collapse-text text="业务线客户那边期望提前一下优先级，期望前上线，所以期望这个事情也加入到下周的优先开发事项中" v-model:expand="expand">


  </ez-collapse-text>
  <ez-collapse-list :data="data" v-model:expand="expand" :limit="2">
    <template #unfold>
      <ez-icon icon="CaretBottom"></ez-icon>
    </template>
    <template #fold>
      <ez-icon icon="CaretRight"></ez-icon>
    </template>
    <template #default="scope">
      {{scope.index}}\{{scope.row}}hh
    </template>

  </ez-collapse-list>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const expand = ref<boolean>(false)
const data = [
  '12312', '321312', '231231212'
]
</script>