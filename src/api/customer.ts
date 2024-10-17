// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除客资 GET /customer/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById13Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/customer/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出客资 GET /customer/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export13Params,
  options?: { [key: string]: any },
) {
  return request<any>(`/api/customer/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取客资 GET /customer/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById13Params,
  options?: { [key: string]: any },
) {
  return request<API.CustomerVO>(`/api/customer/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询客资列表 GET /customer/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list13Params,
  options?: { [key: string]: any },
) {
  return request<API.CustomerVO[]>(`/api/customer/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询客资列表 GET /customer/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page13Params,
  options?: { [key: string]: any },
) {
  return request<API.CustomerVO[]>(`/api/customer/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存客资 POST /customer/save */
export async function save(body: API.CustomerSaveDTO, options?: { [key: string]: any }) {
  return request<API.CustomerVO>(`/api/customer/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 校验客资是否存在 GET /customer/validateExist */
export async function validateExist(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validateExistParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/api/customer/validateExist`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
