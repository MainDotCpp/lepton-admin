declare namespace API {
  type CustomerSaveDTO = {
    id?: number;
    name?: string;
    phone?: string;
    wx?: string;
  };

  type CustomerVO = {
    id?: number;
    name?: string;
    createdAt?: string;
    updatedBy?: number;
    phone?: string;
    wx?: string;
    createdById?: number;
    createdByName?: string;
  };

  type deleteById1Params = {
    id: number;
  };

  type deleteById2Params = {
    id: number;
  };

  type deleteById3Params = {
    id: number;
  };

  type deleteById4Params = {
    id: number;
  };

  type deleteById5Params = {
    id: number;
  };

  type deleteByIdParams = {
    id: number;
  };

  type export1Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type export2Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type export3Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type export4Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type exportParams = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type getById1Params = {
    id: number;
  };

  type getById2Params = {
    id: number;
  };

  type getById3Params = {
    id: number;
  };

  type getById4Params = {
    id: number;
  };

  type getById5Params = {
    /** 客资ID */
    id: number;
  };

  type getByIdParams = {
    id: number;
  };

  type list1Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type list2Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type list3Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type list4Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type list5Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type listParams = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type LoginDTO = {
    phone?: string;
    password?: string;
  };

  type Menu = {
    id?: number;
    name?: string;
    parentId?: number;
    type?: 'CATALOG' | 'MENU' | 'BUTTON';
    path?: string;
    icon?: string;
    sort?: number;
    hidden?: boolean;
    cache?: boolean;
    component?: string;
    permission?: string;
  };

  type MenuSaveDTO = {
    id?: number;
  };

  type MenuVO = {
    id?: number;
  };

  type page1Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type page2Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type page3Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type page4Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type page5Params = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type PageDTOCustomerVO = {
    params?: PageParams;
    records?: CustomerVO[];
    total?: number;
    offset?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    current?: number;
    pages?: number;
  };

  type PageDTOMenuVO = {
    params?: PageParams;
    records?: MenuVO[];
    total?: number;
    offset?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    current?: number;
    pages?: number;
  };

  type PageDTORoleVO = {
    params?: PageParams;
    records?: RoleVO[];
    total?: number;
    offset?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    current?: number;
    pages?: number;
  };

  type PageDTOSysPackageVO = {
    params?: PageParams;
    records?: SysPackageVO[];
    total?: number;
    offset?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    current?: number;
    pages?: number;
  };

  type PageDTOTenantVO = {
    params?: PageParams;
    records?: TenantVO[];
    total?: number;
    offset?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    current?: number;
    pages?: number;
  };

  type PageDTOUserVO = {
    params?: PageParams;
    records?: UserVO[];
    total?: number;
    offset?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    current?: number;
    pages?: number;
  };

  type pageParams = {
    id?: number;
    current?: number;
    pageSize?: number;
  };

  type PageParams = {
    pageSize?: number;
    current?: number;
  };

  type RoleSaveDTO = {
    id?: number;
  };

  type RoleVO = {
    id?: number;
  };

  type SysPackage = {
    id?: number;
    name?: string;
    menus?: Menu[];
  };

  type SysPackageSaveDTO = {
    id?: number;
    name?: string;
    menuIds?: number[];
  };

  type SysPackageVO = {
    id?: number;
    name?: string;
  };

  type Tenant = {
    id?: number;
    name?: string;
    type?: 'ACTIVE' | 'INACTIVE';
    sysPackage?: SysPackage;
  };

  type TenantSaveDTO = {
    id?: number;
  };

  type TenantVO = {
    id?: number;
  };

  type TreeLong = {
    name?: { empty?: boolean };
    id?: number;
    parentId?: number;
    config?: TreeNodeConfig;
    weight?: Record<string, any>;
    empty?: boolean;
  };

  type TreeNodeConfig = {
    idKey?: string;
    parentIdKey?: string;
    weightKey?: string;
    nameKey?: string;
    childrenKey?: string;
    deep?: number;
  };

  type UserInfoVO = {
    id?: number;
    name?: string;
    phone?: string;
    tenants?: number[];
    roles?: string[];
    permissions?: string[];
    enabled?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
  };

  type UserSaveDTO = {
    id?: number;
    name?: string;
    phone?: string;
    password?: string;
  };

  type UserVO = {
    id?: number;
    name?: string;
    phone?: string;
    tenants?: Tenant[];
  };
}
