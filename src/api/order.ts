// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除订单 GET /order/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById5Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/order/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出订单 GET /order/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export5Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/order/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取订单 GET /order/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById5Params,
  options?: { [key: string]: any },
) {
  return request<API.OrderVO>(`/api/order/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询订单列表 GET /order/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list5Params,
  options?: { [key: string]: any },
) {
  return request<API.OrderVO[]>(`/api/order/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询订单列表 GET /order/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page5Params,
  options?: { [key: string]: any },
) {
  return request<API.OrderVO[]>(`/api/order/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存订单 POST /order/save */
export async function save(body: API.OrderSaveDTO, options?: { [key: string]: any }) {
  return request<API.OrderVO>(`/api/order/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
