// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除字典 GET /dict/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById10Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/dict/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出字典 GET /dict/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export10Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/dict/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取字典 GET /dict/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById10Params,
  options?: { [key: string]: any },
) {
  return request<API.DictVO>(`/api/dict/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询字典列表 GET /dict/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list10Params,
  options?: { [key: string]: any },
) {
  return request<API.DictVO[]>(`/api/dict/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询字典列表 GET /dict/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page10Params,
  options?: { [key: string]: any },
) {
  return request<API.DictVO[]>(`/api/dict/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存字典 POST /dict/save */
export async function save(body: API.DictSaveDTO, options?: { [key: string]: any }) {
  return request<API.DictVO>(`/api/dict/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
