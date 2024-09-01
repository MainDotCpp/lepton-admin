// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除品牌 GET /brand/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById12Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/brand/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出品牌 GET /brand/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export12Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/brand/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取品牌 GET /brand/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById12Params,
  options?: { [key: string]: any },
) {
  return request<API.BrandVO>(`/api/brand/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询品牌列表 GET /brand/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list12Params,
  options?: { [key: string]: any },
) {
  return request<API.BrandVO[]>(`/api/brand/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询品牌列表 GET /brand/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page12Params,
  options?: { [key: string]: any },
) {
  return request<API.BrandVO[]>(`/api/brand/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存品牌 POST /brand/save */
export async function save(body: API.BrandSaveDTO, options?: { [key: string]: any }) {
  return request<API.BrandVO>(`/api/brand/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
