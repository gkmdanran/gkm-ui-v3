<template>
    <ez-search 
        :search-json="searchJson" 
        v-model="searchForm" 
        label-width="80px" 
        @change="handleChange" 
        :debounce="500"
    >
        <template #searchButton>
            <ez-button>重 置</ez-button>
        </template>
    </ez-search>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const searchJson = {
    searchItems: {
        name: {
            type: 'input',
            isTrim: true,
            label: '姓名',
            placeholder: '输入姓名'
        },
        sex: {
            type: 'select',
            label: '性别',
            selectOptions: [
                { sexLabel: '男', sexValue: 1 },
                { sexLabel: '女', sexValue: 0 }
            ],
            selectProps: {
                label: 'sexLabel',
                value: 'sexValue',
            }
        },
        city: {
            type: 'radioButton',
            label: '城市',
            selectOptions: [
                { cityLabel: '上海', cityValue: 'shanghai' },
                { cityLabel: '苏州', cityValue: 'suzhou' }
            ],
            selectProps: {
                label: 'cityLabel',
                value: 'cityValue',
            }
        },
        updateDate: {
            type: 'date',
            label: '操作日期',
        },
        updateTime: {
            type: 'timePicker',
            label: '操作时间',
            layout: '500px',
            attrs: {
                size: 'large'
            }
        }
    },
    layout: '300px',
    itemStyle: 'margin-bottom:20px;margin-right:10px'
}
const searchForm = ref({
    name: '',
    sex: 1,
    city: 'shanghai',
    updateTime: '',
    updateDate: ''
})
function handleChange(val) {
    console.log(val)
}
</script>
