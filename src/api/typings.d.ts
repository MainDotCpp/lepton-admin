declare namespace API {
  type BaseQueryDTO = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type BrandSaveDTO = {
    id?: number;
    name?: string;
  };

  type BrandVO = {
    id?: number;
    name?: string;
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

  type Config = {
    id?: number;
    type?: 'GLOBAL' | 'TENANT';
    globalConfig?: GlobalConfig;
    tenantConfig?: TenantConfig;
    tenantId?: number;
  };

  type ConfigSaveDTO = {
    id?: number;
  };

  type ConfigVO = {
    id?: number;
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
    createdById?: number;
    followStatus?: string;
    remark?: string;
    brandId?: number;
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
    createdAt?: string;
    createdById?: number;
    followStatus?: string;
    remark?: string;
    brandId?: number;
  };

  type deleteById10Params = {
    id: number;
  };

  type deleteById11Params = {
    id: number;
  };

  type deleteById12Params = {
    id: number;
  };

  type deleteById13Params = {
    id: number;
  };

  type deleteById14Params = {
    id: number;
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

  type deleteById8Params = {
    id: number;
  };

  type deleteById9Params = {
    id: number;
  };

  type deleteByIdParams = {
    id: number;
  };

  type DeptSaveDTO = {
    id?: number;
    name?: string;
    code?: string;
    parentId?: number;
    sort?: number;
  };

  type DeptVO = {
    id?: number;
    name?: string;
    code?: string;
    parentId?: number;
    sort?: number;
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
    default?: boolean;
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

  type export10Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export11Params = {
    /** 渠道ID */
    channelId?: string;
    source?: string[];
    photoType?: string[];
    followStatus?: string[];
    saleId?: number[];
    createdById?: number[];
    brandId?: number[];
    createdAt?: string[];
    keywords?: string;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export12Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export13Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export14Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export1Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export2Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export3Params = {
    id?: number[];
    logo?: string[];
    name?: string[];
    type?: ('ACTIVE' | 'INACTIVE')[];
    code?: string[];
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export4Params = {
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
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export8Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export9Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type exportParams = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type getById10Params = {
    id: number;
  };

  type getById11Params = {
    id: number;
  };

  type getById12Params = {
    id: number;
  };

  type getById13Params = {
    id: number;
  };

  type getById14Params = {
    id: number;
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

  type getById8Params = {
    id: number;
  };

  type getById9Params = {
    id: number;
  };

  type getByIdParams = {
    id: number;
  };

  type GlobalConfig = {
    notifyTemplate?: string;
  };

  type GoodsSaveDTO = {
    id?: number;
    name?: string;
    price?: number;
    status?: number;
  };

  type GoodsVO = {
    id?: number;
    name?: string;
    price?: number;
    status?: number;
  };

  type list10Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list11Params = {
    /** 渠道ID */
    channelId?: string;
    source?: string[];
    photoType?: string[];
    followStatus?: string[];
    saleId?: number[];
    createdById?: number[];
    brandId?: number[];
    createdAt?: string[];
    keywords?: string;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list12Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list13Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list14Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list1Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list2Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list3Params = {
    id?: number[];
    logo?: string[];
    name?: string[];
    type?: ('ACTIVE' | 'INACTIVE')[];
    code?: string[];
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list4Params = {
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
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list8Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list9Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type listParams = {
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

  type OrderSaveDTO = {
    id?: number;
    customerId?: number;
    goodsId?: number;
    payAmount?: number;
    sellerId?: number;
  };

  type OrderVO = {
    id?: number;
    customer?: CustomerVO;
    goods?: GoodsVO;
    sellerId?: number;
    createdAt?: string;
    payAmount?: number;
  };

  type page10Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page11Params = {
    /** 渠道ID */
    channelId?: string;
    source?: string[];
    photoType?: string[];
    followStatus?: string[];
    saleId?: number[];
    createdById?: number[];
    brandId?: number[];
    createdAt?: string[];
    keywords?: string;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page12Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page13Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page14Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page1Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page2Params = {
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page3Params = {
    id?: number[];
    logo?: string[];
    name?: string[];
    type?: ('ACTIVE' | 'INACTIVE')[];
    code?: string[];
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page4Params = {
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
    id?: number;
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page8Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page9Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type PageDTOBrandVO = {
    params?: BaseQueryDTO;
    data?: BrandVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOChannelVO = {
    params?: BaseQueryDTO;
    data?: ChannelVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOConfigVO = {
    params?: BaseQueryDTO;
    data?: ConfigVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOCustomerVO = {
    params?: BaseQueryDTO;
    data?: CustomerVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTODeptVO = {
    params?: BaseQueryDTO;
    data?: DeptVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTODictVO = {
    params?: BaseQueryDTO;
    data?: DictVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOGoodsVO = {
    params?: BaseQueryDTO;
    data?: GoodsVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOMenuVO = {
    params?: BaseQueryDTO;
    data?: MenuVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOOrderVO = {
    params?: BaseQueryDTO;
    data?: OrderVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTORoleVO = {
    params?: BaseQueryDTO;
    data?: RoleVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOSysPackageVO = {
    params?: BaseQueryDTO;
    data?: SysPackageVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOTenantVO = {
    params?: BaseQueryDTO;
    data?: TenantVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOUserVO = {
    params?: BaseQueryDTO;
    data?: UserVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOXhsNoteCommentVO = {
    params?: BaseQueryDTO;
    data?: XhsNoteCommentVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type PageDTOXhsNoteVO = {
    params?: BaseQueryDTO;
    data?: XhsNoteVO[];
    total?: number;
    current?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    pages?: number;
    hasPreviousPage?: boolean;
  };

  type pageParams = {
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

  type TenantConfig = {
    customerTarget?: number;
    customerNotifyUrl?: string;
    orderTarget?: number;
    orderNotifyUrl?: string;
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
    avatar?: string;
    deptCode?: string;
    enabled?: boolean;
    accountNonExpired?: boolean;
    credentialsNonExpired?: boolean;
    accountNonLocked?: boolean;
  };

  type UserOptionsVO = {
    id?: number;
    name?: string;
    avatar?: string;
  };

  type UserSaveDTO = {
    id?: number;
    name?: string;
    phone?: string;
    password?: string;
    avatar?: string;
    roleIds?: number[];
    dataPermissionType?: 'ALL' | 'SELF' | 'DEPT_AND_CHILD';
  };

  type UserVO = {
    id?: number;
    name?: string;
    phone?: string;
    avatar?: string;
    roleIds?: number[];
  };

  type XhsNoteCommentSaveDTO = {
    id?: number;
  };

  type XhsNoteCommentVO = {
    id?: number;
  };

  type XhsNoteSaveDTO = {
    id?: number;
  };

  type XhsNoteVO = {
    id?: number;
    userId: string;
    nickname?: string;
    avatar?: string;
    ipLocation?: string;
    addTs: number;
    lastModifyTs: number;
    noteId: string;
    type?: string;
    title?: string;
    desc?: string;
    videoUrl?: string;
    time: number;
    lastUpdateTime: number;
    likedCount?: string;
    collectedCount?: string;
    commentCount?: string;
    shareCount?: string;
    imageList?: string;
    tagList?: string;
    noteUrl?: string;
  };
}
