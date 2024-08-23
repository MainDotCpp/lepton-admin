declare namespace API {
  type BaseQueryDTO = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type ChannelSaveDTO = {
    id?: number;
    name?: string;
    icon?: string;
    textColor?: string;
    backgroundColor?: string;
  };

  type ChannelVO = {
    id?: number;
    name?: string;
    icon?: string;
    textColor?: string;
    backgroundColor?: string;
  };

  type CustomerSaveDTO = {
    id?: number;
    createdAt?: string;
    name?: string;
    phone?: string;
    wechat?: string;
    channelId?: number;
    photoType?: string;
    saleId?: number;
    source?: string;
  };

  type CustomerVO = {
    id?: number;
    name?: string;
    phone?: string;
    wechat?: string;
    channelId?: number;
    photoType?: string;
    saleId?: number;
    source?: string;
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

  type deleteById6Params = {
    id: number;
  };

  type deleteById7Params = {
    id: number;
  };

  type deleteByIdParams = {
    id: number;
  };

  type Dict = {
    id?: number;
    type?: string;
    name?: string;
    items?: DictItem[];
  };

  type DictItem = {
    id?: number;
    item?: string;
    value?: string;
    sort?: number;
    enabled?: boolean;
    dict?: Dict;
  };

  type DictSaveDTO = {
    id?: number;
  };

  type DictVO = {
    id?: number;
    type?: string;
    name?: string;
    items?: DictItem[];
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

  type export5Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export6Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export7Params = {
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
    id: number;
  };

  type getById6Params = {
    id: number;
  };

  type getById7Params = {
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
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list6Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list7Params = {
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
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page6Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page7Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type PageDTOChannelVO = {
    params?: BaseQueryDTO;
    data?: ChannelVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    pages?: number;
  };

  type PageDTOCustomerVO = {
    params?: BaseQueryDTO;
    data?: CustomerVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    pages?: number;
  };

  type PageDTODictVO = {
    params?: BaseQueryDTO;
    data?: DictVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    pages?: number;
  };

  type PageDTOMenuVO = {
    params?: BaseQueryDTO;
    data?: MenuVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    pages?: number;
  };

  type PageDTORoleVO = {
    params?: BaseQueryDTO;
    data?: RoleVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    pages?: number;
  };

  type PageDTOSysPackageVO = {
    params?: BaseQueryDTO;
    data?: SysPackageVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    pages?: number;
  };

  type PageDTOTenantVO = {
    params?: BaseQueryDTO;
    data?: TenantVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
    pages?: number;
  };

  type PageDTOUserVO = {
    params?: BaseQueryDTO;
    data?: UserVO[];
    total?: number;
    offset?: number;
    current?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    pageSize?: number;
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
    menuIds?: number[];
  };

  type RoleVO = {
    id?: number;
    menuIds?: number[];
    createdByName?: string;
    createdAt?: string;
    name?: string;
    code?: string;
    builtin?: boolean;
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
    packageId?: number;
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
    weight?: Record<string, any>;
    config?: TreeNodeConfig;
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
    avatar?: string;
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
    avatar?: string;
    roleIds?: number[];
  };

  type UserVO = {
    id?: number;
    name?: string;
    phone?: string;
    avatar?: string;
    roleIds?: number[];
  };
}
