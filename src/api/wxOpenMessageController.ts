// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 GET /wxopen/${param0}/callback */
export async function callback(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callbackParams,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/wxopen/${param0}/callback`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wxopen/${param0}/callback */
export async function callback2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callback3Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/wxopen/${param0}/callback`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wxopen/${param0}/callback */
export async function callback3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callback2Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/wxopen/${param0}/callback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wxopen/${param0}/callback */
export async function callback4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callback5Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/wxopen/${param0}/callback`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wxopen/${param0}/callback */
export async function callback5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.callback4Params,
  body: string,
  options?: { [key: string]: any },
) {
  const { appId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/wxopen/${param0}/callback`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...queryParams,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wxopen/receiveTicket */
export async function receiveTicket(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveTicketParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/api/wxopen/receiveTicket`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wxopen/receiveTicket */
export async function receiveTicket2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveTicket3Params,
  body: string,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/api/wxopen/receiveTicket`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wxopen/receiveTicket */
export async function receiveTicket3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveTicket2Params,
  body: string,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/api/wxopen/receiveTicket`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wxopen/receiveTicket */
export async function receiveTicket4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveTicket5Params,
  body: string,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/api/wxopen/receiveTicket`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wxopen/receiveTicket */
export async function receiveTicket5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.receiveTicket4Params,
  body: string,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/api/wxopen/receiveTicket`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}
