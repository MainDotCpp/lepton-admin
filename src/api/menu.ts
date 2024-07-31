// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除菜单 GET /menu/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById4Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/menu/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出菜单 GET /menu/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export4Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/menu/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取菜单 GET /menu/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById4Params,
  options?: { [key: string]: any },
) {
  return request<API.MenuVO>(`/api/menu/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询菜单列表 GET /menu/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list4Params,
  options?: { [key: string]: any },
) {
  return request<API.MenuVO[]>(`/api/menu/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询菜单列表 GET /menu/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page4Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOMenuVO>(`/api/menu/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存菜单 POST /menu/save */
export async function save(body: API.MenuSaveDTO, options?: { [key: string]: any }) {
  return request<API.MenuVO>(`/api/menu/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取系统菜单树 GET /menu/tree */
export async function tree(options?: { [key: string]: any }) {
  return request<API.TreeLong>(`/api/menu/tree`, {
    method: 'GET',
    ...(options || {}),
  });
}
