// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除角色 GET /role/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById5Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/role/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出角色 GET /role/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export5Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/role/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取角色 GET /role/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById5Params,
  options?: { [key: string]: any },
) {
  return request<API.RoleVO>(`/api/role/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询角色列表 GET /role/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list5Params,
  options?: { [key: string]: any },
) {
  return request<API.RoleVO[]>(`/api/role/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询角色列表 GET /role/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page5Params,
  options?: { [key: string]: any },
) {
  return request<API.RoleVO[]>(`/api/role/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存角色 POST /role/save */
export async function save(body: API.RoleSaveDTO, options?: { [key: string]: any }) {
  return request<API.RoleVO>(`/api/role/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
