import { layout } from '@/app'

export default [
  {
    path: '/form',
    name: '表单',
    icon: 'TeamOutlined',
    routes: [
      // 路由定义 START

      {
        name: '表单管理',
        icon: 'AppstoreOutlined',
        path: '/form/page',
        access: 'FORM__PAGE__MENU',
        component: 'form/Page',
      },

      // 路由定义 END
    ],
  },
  {
    name: '表单设计器',
    icon: 'AppstoreOutlined',
    path: '/form/designer',
    access: 'FORM__PAGE__MENU',
    component: 'form/Designer',
  },
]
