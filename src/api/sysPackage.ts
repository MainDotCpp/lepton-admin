// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除系统套餐 GET /sysPackage/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById2Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/sysPackage/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出系统套餐 GET /sysPackage/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export2Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/sysPackage/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取系统套餐 GET /sysPackage/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById2Params,
  options?: { [key: string]: any },
) {
  return request<API.SysPackageVO>(`/api/sysPackage/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询系统套餐列表 GET /sysPackage/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list2Params,
  options?: { [key: string]: any },
) {
  return request<API.SysPackageVO[]>(`/api/sysPackage/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询系统套餐列表 GET /sysPackage/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page2Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOSysPackageVO>(`/api/sysPackage/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存系统套餐 POST /sysPackage/save */
export async function save(body: API.SysPackageSaveDTO, options?: { [key: string]: any }) {
  return request<API.SysPackageVO>(`/api/sysPackage/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
