import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'
import type { BaseOptionType } from 'antd/es/select'
import api from '@/api'
import { DEFAULT_STABLE_TIME } from '@/constants/cache'
import convert from '@/utils/convert'

export function useOrderQuery(options?: Omit<UseQueryOptions<API.OrderVO[], undefined, API.OrderVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['order', 'order'], {
    queryFn: async () => api.order.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

export function useOrderOptions(options?: Omit<UseQueryOptions<API.OrderVO[], undefined, API.OrderVO[], string[]>, 'queryKey'> | undefined) {
  const { data: orders, refetch } = useOrderQuery(options)

  const convertOptions = (data?: any[]): BaseOptionType[] => {
    return convert.convertOptions(data, { label: it => it.id, value: 'id' })
  }

  return {
    options: convertOptions(orders),
    async request(params?: any) {
      return convertOptions((await refetch(params)).data)
    },
  }
}

export function useOrderEnums(options?: Omit<UseQueryOptions<API.OrderVO[], undefined, API.OrderVO[], string[]>, 'queryKey'> | undefined) {
  const { data: orders, refetch } = useOrderQuery(options)

  const convertEnums = (data: any[] = []): Record<any, any> => {
    return convert.convertEnums(data, { label: it => it.id, value: 'id' })
  }

  return {
    enums: convertEnums(orders),
    async request(params?: any) {
      return convertEnums((await refetch(params)).data)
    },
  }
}
