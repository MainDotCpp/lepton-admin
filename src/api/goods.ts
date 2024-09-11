// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除商品 GET /goods/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById8Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/goods/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出商品 GET /goods/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export8Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/goods/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取商品 GET /goods/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById8Params,
  options?: { [key: string]: any },
) {
  return request<API.GoodsVO>(`/api/goods/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询商品列表 GET /goods/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list8Params,
  options?: { [key: string]: any },
) {
  return request<API.GoodsVO[]>(`/api/goods/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询商品列表 GET /goods/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page8Params,
  options?: { [key: string]: any },
) {
  return request<API.GoodsVO[]>(`/api/goods/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存商品 POST /goods/save */
export async function save(body: API.GoodsSaveDTO, options?: { [key: string]: any }) {
  return request<API.GoodsVO>(`/api/goods/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
