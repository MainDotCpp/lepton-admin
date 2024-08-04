declare namespace API {
  type BaseQueryDTO = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

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
    id?: number[];
    logo?: string[];
    name?: string[];
    type?: ('ACTIVE' | 'INACTIVE')[];
    code?: string[];
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export2Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export3Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export4Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type exportParams = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
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
    id?: number[];
    logo?: string[];
    name?: string[];
    type?: ('ACTIVE' | 'INACTIVE')[];
    code?: string[];
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list2Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list3Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list4Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list5Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type listParams = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
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

  type MenuDto = {
    id?: number;
  };

  type MenuSaveDTO = {
    id?: number;
  };

  type MenuVO = {
    id?: number;
  };

  type page1Params = {
    id?: number[];
    logo?: string[];
    name?: string[];
    type?: ('ACTIVE' | 'INACTIVE')[];
    code?: string[];
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page2Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page3Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page4Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page5Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type PageDTOCustomerVO = {
    params?: BaseQueryDTO;
    data?: CustomerVO[];
    total?: number;
    offset?: number;
    current?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pages?: number;
  };

  type PageDTOMenuVO = {
    params?: BaseQueryDTO;
    data?: MenuVO[];
    total?: number;
    offset?: number;
    current?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pages?: number;
  };

  type PageDTORoleVO = {
    params?: BaseQueryDTO;
    data?: RoleVO[];
    total?: number;
    offset?: number;
    current?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pages?: number;
  };

  type PageDTOSysPackageVO = {
    params?: BaseQueryDTO;
    data?: SysPackageVO[];
    total?: number;
    offset?: number;
    current?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pages?: number;
  };

  type PageDTOTenantVO = {
    params?: BaseQueryDTO;
    data?: TenantVO[];
    total?: number;
    offset?: number;
    current?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pages?: number;
  };

  type PageDTOUserVO = {
    params?: BaseQueryDTO;
    data?: UserVO[];
    total?: number;
    offset?: number;
    current?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pages?: number;
  };

  type pageParams = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type RoleSaveDTO = {
    id?: number;
    name?: string;
    code?: string;
    menus?: MenuDto[];
  };

  type RoleVO = {
    id?: number;
    createdByName?: string;
    createdAt?: string;
    name?: string;
    code?: string;
    builtin?: boolean;
  };

  type SysPackage = {
    id?: number;
    name?: string;
    menus?: Menu[];
  };

  type SysPackageDto = {
    id?: number;
  };

  type SysPackageSaveDTO = {
    id?: number;
    name?: string;
    menuIds?: number[];
  };

  type SysPackageVO = {
    id?: number;
    name?: string;
    menuIds?: number[];
  };

  type Tenant = {
    id?: number;
    logo?: string;
    name?: string;
    type?: 'ACTIVE' | 'INACTIVE';
    code?: string;
    sysPackage?: SysPackage;
  };

  type TenantDto = {
    id?: number;
    name?: string;
    logo?: string;
  };

  type TenantSaveDTO = {
    id?: number;
    logo?: string;
    name?: string;
    type?: 'ACTIVE' | 'INACTIVE';
    code?: string;
    sysPackage?: SysPackageDto;
  };

  type TenantVO = {
    id?: number;
    logo?: string;
    name?: string;
    type?: 'ACTIVE' | 'INACTIVE';
    code?: string;
    packageId?: number;
    packageName?: string;
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
    roles?: string[];
    permissions?: string[];
    tenants?: TenantDto[];
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
