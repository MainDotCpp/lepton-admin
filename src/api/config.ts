// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除系统设置 GET /config/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById10Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/config/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出系统设置 GET /config/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export10Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/config/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取系统设置 GET /config/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById10Params,
  options?: { [key: string]: any },
) {
  return request<API.ConfigVO>(`/api/config/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取系统配置 GET /config/getTenantConfig */
export async function getTenantConfig(options?: { [key: string]: any }) {
  return request<API.Config>(`/api/config/getTenantConfig`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 查询系统设置列表 GET /config/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list10Params,
  options?: { [key: string]: any },
) {
  return request<API.ConfigVO[]>(`/api/config/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询系统设置列表 GET /config/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page10Params,
  options?: { [key: string]: any },
) {
  return request<API.ConfigVO[]>(`/api/config/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存系统设置 POST /config/save */
export async function save(body: API.ConfigSaveDTO, options?: { [key: string]: any }) {
  return request<API.ConfigVO>(`/api/config/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 保存租户配置 POST /config/saveTenantConfig */
export async function saveTenantConfig(body: API.TenantConfig, options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/api/config/saveTenantConfig`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
