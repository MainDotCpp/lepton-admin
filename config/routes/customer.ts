export default [
  {
    path: '/customer',
    name: '客资',
    icon: 'SettingOutlined',
    routes: [
      // 路由定义 START
      {
        name: '客资管理',
        icon: 'AppstoreOutlined',
        path: '/customer/customer',
        access: 'CUSTOMER__CUSTOMER__MENU',
        component: 'customer/Customer',
      },
      {
        name: '客资渠道管理',
        icon: 'AppstoreOutlined',
        path: '/customer/channel',
        access: 'CUSTOMER__CHANNEL__MENU',
        component: 'customer/Channel',
      },

      // 路由定义 END
    ],
  },
]
