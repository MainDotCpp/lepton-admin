// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除页面 GET /page/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById6Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/page/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出页面 GET /page/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export6Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/page/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取页面 GET /page/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById6Params,
  options?: { [key: string]: any },
) {
  return request<API.PageVO>(`/api/page/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询页面列表 GET /page/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list6Params,
  options?: { [key: string]: any },
) {
  return request<API.PageVO[]>(`/api/page/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询页面列表 GET /page/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page6Params,
  options?: { [key: string]: any },
) {
  return request<API.PageVO[]>(`/api/page/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存页面 POST /page/save */
export async function save(body: API.PageSaveDTO, options?: { [key: string]: any }) {
  return request<API.PageVO>(`/api/page/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
