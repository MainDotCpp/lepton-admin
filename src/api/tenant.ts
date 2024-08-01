// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除租户 GET /tenant/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById1Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/tenant/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出租户 GET /tenant/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export1Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/tenant/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取租户 GET /tenant/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById1Params,
  options?: { [key: string]: any },
) {
  return request<API.TenantVO>(`/api/tenant/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询租户列表 GET /tenant/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list1Params,
  options?: { [key: string]: any },
) {
  return request<API.TenantVO[]>(`/api/tenant/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询租户列表 GET /tenant/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page1Params,
  options?: { [key: string]: any },
) {
  return request<API.TenantVO[]>(`/api/tenant/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存租户 POST /tenant/save */
export async function save(body: API.TenantSaveDTO, options?: { [key: string]: any }) {
  return request<API.TenantVO>(`/api/tenant/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
