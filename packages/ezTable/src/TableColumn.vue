<template>
  <el-table-column v-if="
  !col.slotName && !col.prop && !col.children && (!('show' in col) ? true : col.show)" v-bind="selfCol">
    <template #header="scope">
      <slot :name="`${col.headerSlot}`" v-bind="scope">{{ col.label || "" }}</slot>
    </template>
  </el-table-column>
  <el-table-column v-else-if="
  col.children && col.children.length > 0 && (!('show' in col) ? true : col.show)" v-bind="selfCol">
    <template #header="scope">
      <slot :name="`${col.headerSlot}`" v-bind="scope">{{ col.label || "" }}</slot>
    </template>

    <TableColumn v-for="(item, index) in col.children" :key="index" :col="item">
      <template v-for="slot in Object.keys(slots)" #[slot]="scope">
        <slot :name="slot" v-bind="scope"></slot>
      </template>
    </TableColumn>
  </el-table-column>
  <el-table-column v-else-if="!('show' in col) ? true : col.show" v-bind="selfCol">
    <template #default="scope">
      <slot :name="col.slotName" v-bind="scope">{{ scope.row[col.prop] }}</slot>
    </template>
    <template #header="scope">
      <slot :name="`${col.headerSlot}`" v-bind="scope">{{ col.label || "" }}</slot>
    </template>
  </el-table-column>
</template>
<script lang="ts">
export default {
  name: "TableColumn",
}
</script>
<script setup lang="ts">
import { toRefs, useSlots } from "vue"
const props = defineProps({
  col: {
    type: Object,
    default: function () {
      return {}
    },
  },
})
const slots = useSlots()
const { col } = toRefs(props)
const selfCol: any = {}
for (const key in col.value) {
  if (key !== "children") {
    selfCol[key] = col.value[key]
  }
}
</script>
