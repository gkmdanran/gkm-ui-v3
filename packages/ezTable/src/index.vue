<template>
  <div class="ez-table">
    <el-table style="width: 100%" v-bind="attrs" ref="ezTable">
      <template #empty>
        <slot name="ezEmpty"></slot>
      </template>
      <template #append>
        <slot name="ezAppend"></slot>
      </template>
      <TableColumn v-for="(column, index) in tableJson.columns || []" :key="index" :col="column">
        <template v-for="slot in Object.keys(slots)" #[slot]="scope">
          <slot :name="slot" v-bind="scope"></slot>
        </template>
      </TableColumn>
    </el-table>
    <div class="pagination" v-if="slots.ezPagination">
      <slot name="ezPagination"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ezTable",
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
import TableColumn from './TableColumn.vue'
import { defineProps, useAttrs, useSlots, ref, onMounted } from "vue"
import type { ElTable } from 'element-plus'
defineProps({
  tableJson: {
    type: Object,
    required: true,
  },
})

const slots = useSlots()
const attrs = useAttrs()
const ezTable = ref<InstanceType<typeof ElTable>>()

defineExpose({
  ezTable
})
</script>
<style scoped>
.ez-table>>>.el-table td {
  padding: 8px 0;
}

.ez-table>>>.el-table__header th {
  color: #636365;
  font-weight: 700;
}

.ez-table .pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
