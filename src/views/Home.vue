<template>
  <ez-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%"
    @current-change="handleCurrentChange" :table-json="json">

  </ez-table>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
    <el-button @click="setCurrent()">Clear selection</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ElTable } from "element-plus";

interface User {
  date: string;
  name: string;
  address: string;
}
const json = {
  columns: [
    {
      type: 'index',

    },
    {
      label: 'Data',
      prop: 'date',

    },

    {
      label: '1',

      children: [
        {
          label: '2',

          children: [
            {
              label: 'Address',
              prop: 'address',

            },
            {
              label: 'Name',
              prop: 'name',
              show: true,
            },
          ]
        }
      ]
    },

  ]
}
const currentRow = ref();
const singleTableRef = ref();

const setCurrent = (row?: User) => {
  singleTableRef.value.ezTable.setCurrentRow(row)
};
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val;
};
const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>