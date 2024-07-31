import { request as umiRequest } from '@umijs/max';

export const request = async <T>(url: any, params?: any, options?: any) => {
  const resp = await umiRequest(url, { ...params });
  // if (resp.code === 1004) {
  //   window.localStorage.removeItem('accessToken');
  //   window.location = '/login';
  // }
  return resp as T;
};
