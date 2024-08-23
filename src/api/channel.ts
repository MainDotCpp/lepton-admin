// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除客资渠道 GET /channel/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById7Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/channel/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出客资渠道 GET /channel/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export7Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/channel/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取客资渠道 GET /channel/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById7Params,
  options?: { [key: string]: any },
) {
  return request<API.ChannelVO>(`/api/channel/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询客资渠道列表 GET /channel/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list7Params,
  options?: { [key: string]: any },
) {
  return request<API.ChannelVO[]>(`/api/channel/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询客资渠道列表 GET /channel/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page7Params,
  options?: { [key: string]: any },
) {
  return request<API.ChannelVO[]>(`/api/channel/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存客资渠道 POST /channel/save */
export async function save(body: API.ChannelSaveDTO, options?: { [key: string]: any }) {
  return request<API.ChannelVO>(`/api/channel/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
