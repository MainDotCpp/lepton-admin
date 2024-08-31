// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 登录 POST /auth/login */
export async function login(body: API.LoginDTO, options?: { [key: string]: any }) {
  return request<API.UserInfoVO>(`/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出 POST /auth/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<boolean>(`/api/auth/logout`, {
    method: 'POST',
    ...(options || {}),
  });
}
