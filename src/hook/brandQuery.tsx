import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'
import type { BaseOptionType } from 'antd/es/select'
import api from '@/api'
import { DEFAULT_STABLE_TIME } from '@/constants/cache'
import convert from '@/utils/convert'

export function useBrandQuery(options?: Omit<UseQueryOptions<API.BrandVO[], undefined, API.BrandVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['customer', 'brand'], {
    queryFn: async () => api.brand.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

export function useBrandOptions(options?: Omit<UseQueryOptions<API.BrandVO[], undefined, API.BrandVO[], string[]>, 'queryKey'> | undefined) {
  const { data: brands, refetch } = useBrandQuery(options)

  const convertOptions = (data?: any[]): BaseOptionType[] => {
    return convert.convertOptions(data, { label: it => it.name, value: 'id' })
  }

  return {
    options: convertOptions(brands),
    async request(params?: any) {
      return convertOptions((await refetch(params)).data)
    },
  }
}

export function useBrandEnums(options?: Omit<UseQueryOptions<API.BrandVO[], undefined, API.BrandVO[], string[]>, 'queryKey'> | undefined) {
  const { data: brands, refetch } = useBrandQuery(options)

  const convertEnums = (data: any[] = []): Record<any, any> => {
    return convert.convertEnums(data, { label: it => it.name, value: 'id' })
  }

  return {
    enums: convertEnums(brands),
    async request(params?: any) {
      return convertEnums((await refetch(params)).data)
    },
  }
}
