import { request as umiRequest } from '@umijs/max';

export const request = async <T>(url: any, params?: any, options?: any) => {
  return umiRequest(url, { ...params }) as Promise<T>;
};
