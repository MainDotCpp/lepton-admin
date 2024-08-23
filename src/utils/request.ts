import { request as umiRequest } from '@umijs/max'

export async function request<T>(url: any, options?: any) {
  const { params } = options
  console.log(params)
  return umiRequest(url, { ...options }) as Promise<T>
}

export function queryParams(params: any, sort: any, filter: any) {
  return {
    ...params,
    ...filter,
    sorter: Object.entries(sort).map(([key, value]) => `${key}_${value}`),
  }
}
