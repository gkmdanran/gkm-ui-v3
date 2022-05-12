export const themeData = {
  "logo": "/assets/img/photo.jpg",
  "navbar": [
    {
      "text": "组件",
      "link": "/components/"
    },
    {
      "text": "GitHub",
      "link": "https://github.com/gkmdanran/gkm-ui-vue3"
    },
    {
      "text": "其他链接",
      "children": [
        {
          "text": "博客",
          "children": [
            {
              "text": "掘金",
              "link": "https://juejin.cn/user/562566008155693"
            },
            {
              "text": "个人博客",
              "link": "http://101.132.68.0:3333/"
            }
          ]
        },
        {
          "text": "作品",
          "children": [
            {
              "text": "头像生成器",
              "link": "http://101.132.68.0:81/makePhoto/"
            }
          ]
        }
      ]
    }
  ],
  "sidebar": {
    "/components/": [
      {
        "text": "通用",
        "collapsable": true,
        "children": [
          {
            "text": "Button 按钮",
            "link": "/components/pages/Button"
          }
        ]
      }
    ]
  },
  "sidebarDepth": 2,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
