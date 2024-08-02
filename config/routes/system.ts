export default [
  {
    path: "/system",
    name: "系统设置",
    icon: "SettingOutlined",
    routes: [
      // 路由定义 START
      {
        name: "角色管理",
        icon: "UsergroupAddOutlined",
        path: "/system/role",
        access: "SYSTEM__ROLE__MENU",
        component: "framework/system/Role",
      },
      {
        name: "用户管理",
        icon: "UserOutlined",
        path: "/system/user",
        access: "SYSTEM__USER__MENU",
        component: "@/pages/framework/system/User",
      },
      {
        name: "租户管理",
        icon: "SettingOutlined",
        path: "/system/tenant",
        access: "SYSTEM__TENANT__MENU",
        component: "framework/system/Tenant",
      },

      {
        name: "菜单管理",
        icon: "AppstoreOutlined",
        path: "/system/menu",
        access: "SYSTEM__MENU__MENU",
        component: "framework/system/Menu",
      },
      {
        name: "套餐管理",
        icon: "AppstoreOutlined",
        path: "/system/sysPackage",
        access: "SYSTEM__SYS_PACKAGE__MENU",
        component: "framework/system/SysPackage",
      },
      // 路由定义 END
    ],
  },
];
