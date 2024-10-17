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

  type callback2Params = {
    appId: string;
    signature?: string;
    timestamp?: string;
    nonce?: string;
    openid?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type callback3Params = {
    appId: string;
    signature?: string;
    timestamp?: string;
    nonce?: string;
    openid?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type callback4Params = {
    appId: string;
    signature?: string;
    timestamp?: string;
    nonce?: string;
    openid?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type callback5Params = {
    appId: string;
    signature?: string;
    timestamp?: string;
    nonce?: string;
    openid?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type callbackParams = {
    requestBody: string;
    appId: string;
    signature?: string;
    timestamp?: string;
    nonce?: string;
    openid?: string;
    encrypt_type?: string;
    msg_signature?: string;
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

  type ComponentSaveDTO = {
    id?: number;
  };

  type ComponentVO = {
    id?: number;
    type?: string;
    props?: Record<string, any>;
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

  type deleteById15Params = {
    id: number;
  };

  type deleteById16Params = {
    id: number;
  };

  type deleteById17Params = {
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

  type export14Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export15Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export16Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export17Params = {
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
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type export8Params = {
    id?: number;
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

  type FileSaveDTO = {
    id?: number;
  };

  type FileVO = {
    id?: number;
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

  type getById15Params = {
    id: number;
  };

  type getById16Params = {
    id: number;
  };

  type getById17Params = {
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

  type list14Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list15Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list16Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list17Params = {
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
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type list8Params = {
    id?: number;
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

  type page14Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page15Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page16Params = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page17Params = {
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
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type page8Params = {
    id?: number;
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
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOChannelVO = {
    params?: BaseQueryDTO;
    data?: ChannelVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOComponentVO = {
    params?: BaseQueryDTO;
    data?: ComponentVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOConfigVO = {
    params?: BaseQueryDTO;
    data?: ConfigVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOCustomerVO = {
    params?: BaseQueryDTO;
    data?: CustomerVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTODeptVO = {
    params?: BaseQueryDTO;
    data?: DeptVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTODictVO = {
    params?: BaseQueryDTO;
    data?: DictVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOFileVO = {
    params?: BaseQueryDTO;
    data?: FileVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOGoodsVO = {
    params?: BaseQueryDTO;
    data?: GoodsVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOMenuVO = {
    params?: BaseQueryDTO;
    data?: MenuVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOOrderVO = {
    params?: BaseQueryDTO;
    data?: OrderVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOPageVO = {
    params?: BaseQueryDTO;
    data?: PageVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTORoleVO = {
    params?: BaseQueryDTO;
    data?: RoleVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOSysPackageVO = {
    params?: BaseQueryDTO;
    data?: SysPackageVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOTenantVO = {
    params?: BaseQueryDTO;
    data?: TenantVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOUserVO = {
    params?: BaseQueryDTO;
    data?: UserVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOXhsNoteCommentVO = {
    params?: BaseQueryDTO;
    data?: XhsNoteCommentVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type PageDTOXhsNoteVO = {
    params?: BaseQueryDTO;
    data?: XhsNoteVO[];
    total?: number;
    offset?: number;
    pageSize?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    current?: number;
    pages?: number;
  };

  type pageParams = {
    current?: number;
    pageSize?: number;
    sorter?: string[];
  };

  type PageSaveDTO = {
    id?: number;
  };

  type PageVO = {
    id?: number;
    name?: string;
    components?: ComponentVO[];
  };

  type receiveTicket2Params = {
    timestamp?: string;
    nonce?: string;
    signature?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type receiveTicket3Params = {
    timestamp?: string;
    nonce?: string;
    signature?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type receiveTicket4Params = {
    timestamp?: string;
    nonce?: string;
    signature?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type receiveTicket5Params = {
    timestamp?: string;
    nonce?: string;
    signature?: string;
    encrypt_type?: string;
    msg_signature?: string;
  };

  type receiveTicketParams = {
    requestBody?: string;
    timestamp?: string;
    nonce?: string;
    signature?: string;
    encrypt_type?: string;
    msg_signature?: string;
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
    deptCode?: string;
    dataPermission?: 'ALL' | 'SELF' | 'DEPT_AND_CHILD';
    enabled?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
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
    dataPermission?: 'ALL' | 'SELF' | 'DEPT_AND_CHILD';
    deptId?: number;
  };

  type UserVO = {
    id?: number;
    name?: string;
    phone?: string;
    avatar?: string;
    roleIds?: number[];
    dataPermission?: 'ALL' | 'SELF' | 'DEPT_AND_CHILD';
    deptId?: number;
  };

  type validateExistParams = {
    phone?: string;
    wechat?: string;
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
