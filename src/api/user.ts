// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 根据ID删除用户 GET /user/deleteById */
export async function deleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteById1Params,
  options?: { [key: string]: any },
) {
  return request<boolean>(`/api/user/deleteById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导出用户 GET /user/export */
export async function exportExcel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export1Params,
  options?: { [key: string]: any },
) {
  return request<string>(`/api/user/export`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据ID获取用户 GET /user/getById */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById1Params,
  options?: { [key: string]: any },
) {
  return request<API.UserVO>(`/api/user/getById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询用户列表 GET /user/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list1Params,
  options?: { [key: string]: any },
) {
  return request<API.UserVO[]>(`/api/user/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询用户列表 GET /user/page */
export async function page(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.page1Params,
  options?: { [key: string]: any },
) {
  return request<API.UserVO[]>(`/api/user/page`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存用户 POST /user/save */
export async function save(body: API.UserSaveDTO, options?: { [key: string]: any }) {
  return request<API.UserVO>(`/api/user/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息 GET /user/userInfo */
export async function userInfo(options?: { [key: string]: any }) {
  return request<API.UserInfoVO>(`/api/user/userInfo`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户选项 GET /user/userOptions */
export async function userOptions(options?: { [key: string]: any }) {
  return request<API.UserOptionsVO[]>(`/api/user/userOptions`, {
    method: 'GET',
    ...(options || {}),
  });
}
