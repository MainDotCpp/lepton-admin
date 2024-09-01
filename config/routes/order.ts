export default [
  {
    path: '/order',
    name: '订单',
    icon: 'SnippetsOutlined',
    routes: [
      // 路由定义 START
      {
        name: '订单管理',
        icon: 'SnippetsOutlined',
        path: '/order/order',
        access: 'ORDER__ORDER__MENU',
        component: 'order/Order',
      },

      {
        name: '商品管理',
        icon: 'ShoppingOutlined',
        path: '/order/goods',
        access: 'ORDER__GOODS__MENU',
        component: 'order/Goods',
      },
      // 路由定义 END
    ],
  },
]
