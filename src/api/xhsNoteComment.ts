// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除小红书评论 GET /xhsNoteComment/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdParams,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/xhsNoteComment/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出小红书评论 GET /xhsNoteComment/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportParams,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/xhsNoteComment/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取小红书评论 GET /xhsNoteComment/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.XhsNoteCommentVO>(`/api/xhsNoteComment/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询小红书评论列表 GET /xhsNoteComment/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParams,
  options?: { [key: string]: any },
) {
  return request<API.XhsNoteCommentVO[]>(`/api/xhsNoteComment/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询小红书评论列表 GET /xhsNoteComment/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageParams,
  options?: { [key: string]: any },
) {
  return request<API.XhsNoteCommentVO[]>(`/api/xhsNoteComment/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存小红书评论 POST /xhsNoteComment/save */
export async function save(body: API.XhsNoteCommentSaveDTO, options?: { [key: string]: any }) {
  return request<API.XhsNoteCommentVO>(`/api/xhsNoteComment/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
