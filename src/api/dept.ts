// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除部门 GET /dept/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById12Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/dept/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出部门 GET /dept/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export12Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/dept/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取部门 GET /dept/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById12Params,
  options?: { [key: string]: any },
) {
  return request<API.DeptVO>(`/api/dept/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询部门列表 GET /dept/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list12Params,
  options?: { [key: string]: any },
) {
  return request<API.DeptVO[]>(`/api/dept/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询部门列表 GET /dept/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page12Params,
  options?: { [key: string]: any },
) {
  return request<API.DeptVO[]>(`/api/dept/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存部门 POST /dept/save */
export async function save(body: API.DeptSaveDTO, options?: { [key: string]: any }) {
  return request<API.DeptVO>(`/api/dept/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取系统部门树 GET /dept/tree */
export async function tree(options?: { [key: string]: any }) {
  return request<API.TreeLong[]>(`/api/dept/tree`, {
    method: 'GET',
    ...(options || {}),
  });
}
