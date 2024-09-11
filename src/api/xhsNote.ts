// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除小红书笔记 GET /xhsNote/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById1Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/xhsNote/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出小红书笔记 GET /xhsNote/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export1Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/xhsNote/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取小红书笔记 GET /xhsNote/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById1Params,
  options?: { [key: string]: any },
) {
  return request<API.XhsNoteVO>(`/api/xhsNote/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询小红书笔记列表 GET /xhsNote/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list1Params,
  options?: { [key: string]: any },
) {
  return request<API.XhsNoteVO[]>(`/api/xhsNote/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询小红书笔记列表 GET /xhsNote/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page1Params,
  options?: { [key: string]: any },
) {
  return request<API.XhsNoteVO[]>(`/api/xhsNote/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存小红书笔记 POST /xhsNote/save */
export async function save(body: API.XhsNoteSaveDTO, options?: { [key: string]: any }) {
  return request<API.XhsNoteVO>(`/api/xhsNote/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
