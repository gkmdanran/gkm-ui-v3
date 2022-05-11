export const json = {
    breadcrumb: {
        separator: '>>>',
        navigations: [
            { name: '系统管理', },
            { name: "角色管理", },
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