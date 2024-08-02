export default [
  { path: "/", name: "首页", icon: "HomeOutlined", component: "index" },
  { path: "/login", name: "登陆", component: "framework/Login", layout: false },
  { path: "*", layout: false, component: "framework/404"},
];
