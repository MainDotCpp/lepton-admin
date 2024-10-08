import { useGlobalStore } from './stores/global'

/**
 * @see https://umijs.org/docs/max/access#access
 */
export default function access() {
  const permissions = useGlobalStore.getState()?.userInfo?.permissions || []
  return {
    
    
    
    
    
    

    // -------- 用户 --------
    SYSTEM__USER__MENU: permissions.includes('system:user:menu'),
    SYSTEM__USER__CREATE: permissions.includes('system:user:create'),
    SYSTEM__USER__UPDATE: permissions.includes('system:user:update'),
    SYSTEM__USER__DELETE: permissions.includes('system:user:delete'),
    SYSTEM__USER__EXPORT: permissions.includes('system:user:export'),

    // -------- 租户 --------
    SYSTEM__TENANT__MENU: permissions.includes('system:tenant:menu'),
    SYSTEM__TENANT__CREATE: permissions.includes('system:tenant:create'),
    SYSTEM__TENANT__UPDATE: permissions.includes('system:tenant:update'),
    SYSTEM__TENANT__DELETE: permissions.includes('system:tenant:delete'),
    SYSTEM__TENANT__EXPORT: permissions.includes('system:tenant:export'),

    // -------- 菜单 --------
    SYSTEM__MENU__MENU: permissions.includes('system:menu:menu'),
    SYSTEM__MENU__CREATE: permissions.includes('system:menu:create'),
    SYSTEM__MENU__UPDATE: permissions.includes('system:menu:update'),
    SYSTEM__MENU__DELETE: permissions.includes('system:menu:delete'),
    SYSTEM__MENU__EXPORT: permissions.includes('system:menu:export'),

    // -------- 角色 --------
    SYSTEM__ROLE__MENU: permissions.includes('system:role:menu'),
    SYSTEM__ROLE__CREATE: permissions.includes('system:role:create'),
    SYSTEM__ROLE__UPDATE: permissions.includes('system:role:update'),
    SYSTEM__ROLE__DELETE: permissions.includes('system:role:delete'),
    SYSTEM__ROLE__EXPORT: permissions.includes('system:role:export'),

    // -------- 套餐 --------
    SYSTEM__SYS_PACKAGE__MENU: permissions.includes('system:sysPackage:menu'),
    SYSTEM__SYS_PACKAGE__CREATE: permissions.includes('system:sysPackage:create'),
    SYSTEM__SYS_PACKAGE__UPDATE: permissions.includes('system:sysPackage:update'),
    SYSTEM__SYS_PACKAGE__DELETE: permissions.includes('system:sysPackage:delete'),
    SYSTEM__SYS_PACKAGE__EXPORT: permissions.includes('system:sysPackage:export'),

    // -------- 客资渠道 --------
    CUSTOMER__CHANNEL__MENU: permissions.includes('customer:channel:menu'),
    CUSTOMER__CHANNEL__CREATE: permissions.includes('customer:channel:create'),
    CUSTOMER__CHANNEL__UPDATE: permissions.includes('customer:channel:update'),
    CUSTOMER__CHANNEL__DELETE: permissions.includes('customer:channel:delete'),
    CUSTOMER__CHANNEL__EXPORT: permissions.includes('customer:channel:export'),

    // // -------- 客资渠道 --------
    // CUSTOMER__CUSTOMER_CHANNEL__MENU: permissions.includes('customer:customerChannel:menu'),
    // CUSTOMER__CUSTOMER_CHANNEL__CREATE: permissions.includes('customer:customerChannel:create'),
    // CUSTOMER__CUSTOMER_CHANNEL__UPDATE: permissions.includes('customer:customerChannel:update'),
    // CUSTOMER__CUSTOMER_CHANNEL__DELETE: permissions.includes('customer:customerChannel:delete'),
    // CUSTOMER__CUSTOMER_CHANNEL__EXPORT: permissions.includes('customer:customerChannel:export'),

    // -------- 客资 --------
    CUSTOMER__CUSTOMER__MENU: permissions.includes('customer:customer:menu'),
    CUSTOMER__CUSTOMER__CREATE: permissions.includes('customer:customer:create'),
    CUSTOMER__CUSTOMER__UPDATE: permissions.includes('customer:customer:update'),
    CUSTOMER__CUSTOMER__DELETE: permissions.includes('customer:customer:delete'),
    CUSTOMER__CUSTOMER__EXPORT: permissions.includes('customer:customer:export'),
  
    // -------- 订单 --------
    ORDER__ORDER__MENU: permissions.includes("order:order:menu"),
    ORDER__ORDER__CREATE: permissions.includes("order:order:create"),
    ORDER__ORDER__UPDATE: permissions.includes("order:order:update"),
    ORDER__ORDER__DELETE: permissions.includes("order:order:delete"),
    ORDER__ORDER__EXPORT: permissions.includes("order:order:export"),

    // -------- 商品 --------
    ORDER__GOODS__MENU: permissions.includes("order:goods:menu"),
    ORDER__GOODS__CREATE: permissions.includes("order:goods:create"),
    ORDER__GOODS__UPDATE: permissions.includes("order:goods:update"),
    ORDER__GOODS__DELETE: permissions.includes("order:goods:delete"),
    ORDER__GOODS__EXPORT: permissions.includes("order:goods:export"),

    // -------- 品牌 --------
    CUSTOMER__BRAND__MENU: permissions.includes("customer:brand:menu"),
    CUSTOMER__BRAND__CREATE: permissions.includes("customer:brand:create"),
    CUSTOMER__BRAND__UPDATE: permissions.includes("customer:brand:update"),
    CUSTOMER__BRAND__DELETE: permissions.includes("customer:brand:delete"),
    CUSTOMER__BRAND__EXPORT: permissions.includes("customer:brand:export"),

    // -------- 部门 --------
    SYSTEM__DEPT__MENU: permissions.includes("system:dept:menu"),
    SYSTEM__DEPT__CREATE: permissions.includes("system:dept:create"),
    SYSTEM__DEPT__UPDATE: permissions.includes("system:dept:update"),
    SYSTEM__DEPT__DELETE: permissions.includes("system:dept:delete"),
    SYSTEM__DEPT__EXPORT: permissions.includes("system:dept:export"),

    // -------- 表单 --------
    FORM__PAGE__MENU: permissions.includes("form:page:menu"),
    FORM__PAGE__CREATE: permissions.includes("form:page:create"),
    FORM__PAGE__UPDATE: permissions.includes("form:page:update"),
    FORM__PAGE__DELETE: permissions.includes("form:page:delete"),
    FORM__PAGE__EXPORT: permissions.includes("form:page:export"),

    // -------- 表单 --------
    FORM__PAGE__MENU: permissions.includes("form:page:menu"),
    FORM__PAGE__CREATE: permissions.includes("form:page:create"),
    FORM__PAGE__UPDATE: permissions.includes("form:page:update"),
    FORM__PAGE__DELETE: permissions.includes("form:page:delete"),
    FORM__PAGE__EXPORT: permissions.includes("form:page:export"),
}
}
