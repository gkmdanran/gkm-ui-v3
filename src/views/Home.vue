<template>{{ page }}
  <ez-panel :panel-json="json" v-model:search="search" v-model:pagination="page" :tableTotal="1000" :tableData="data"
    @refresh-table="change">
    <template #searchButton>
      <el-button>213</el-button>
    </template>
    <template #chinese="scope">
      {{ scope.row.chinese }}分
    </template>


  </ez-panel>
</template>

<script lang="ts" setup>
import { ref ,reactive} from 'vue'
const search = ref({
  name: '小明',
  age: 1231
})
const page = reactive({
  page: 6,
  pageSize: 10
})
function change({ combine, search, pagination }: any) {
  console.log(combine, search, pagination)
}
function changeSearch(form: any) {
  console.log(form)
}
function changpage(page: number) {
  console.log(page)
}
function changepaeg(form: any) {
  console.log(form)
}
const json = {
  breadcrumb: {
    separator: '>>>',
    navigations: [
      { name: '训练中心', path: '/ccc' },
      { name: "数据集管理", path: '/ccca' },
    ]
  },
  search: {
    setting: {
      searchItems: {
        name: {
          label: '姓名',
          type: 'input',
          isTrim: true,
          clearable: false,
          placeholder: '323223'
        },
        age: {
          label: '年龄',
          type: 'input'
        }
      }
    },

  },
  table: {
    setting: {
      columns: [
        {
          label: '姓名',
          prop: 'name',
        }, {
          label: '成绩',
          children: [
            {
              label: '数学',
              prop: 'math'
            },
            {
              label: '语言',
              children: [
                {
                  label: '中文',
                  prop: 'chinese',
                  slotName: 'chinese',
                },
                {
                  label: '英文',
                  prop: 'english'
                }
              ]
            }
          ]
        }
      ]
    },

  },
  pagination: {}



}
const data = [
  { name: '小明', english: 90, chinese: 60, math: 71 },
  { name: '小王', english: 93, chinese: 20, math: 78 },
  { name: '小刚', english: 92, chinese: 40, math: 98 },
  { name: '小白', english: 91, chinese: 60, math: 88 }
]

</script>