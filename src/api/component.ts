// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除表单组件 GET /component/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById14Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/component/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出表单组件 GET /component/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export14Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/component/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取表单组件 GET /component/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById14Params,
  options?: { [key: string]: any },
) {
  return request<API.ComponentVO>(`/api/component/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询表单组件列表 GET /component/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list14Params,
  options?: { [key: string]: any },
) {
  return request<API.ComponentVO[]>(`/api/component/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询表单组件列表 GET /component/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page14Params,
  options?: { [key: string]: any },
) {
  return request<API.ComponentVO[]>(`/api/component/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存表单组件 POST /component/save */
export async function save(body: API.ComponentSaveDTO, options?: { [key: string]: any }) {
  return request<API.ComponentVO>(`/api/component/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
