import { request as umiRequest } from '@umijs/max';

export const request = async <T>(url: any, options?: any) => {
  const { params } = options;
  console.log(params);
  return umiRequest(url, { ...options }) as Promise<T>;
};

export const queryParams = (params: any, sort: any, filter: any) => ({
  ...params,
  ...filter,
  sorter: Object.entries(sort).map(([key, value]) => `${key}_${value}`),
});
