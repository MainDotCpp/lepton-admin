import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'
import type { BaseOptionType } from 'antd/es/select'
import api from '@/api'
import { DEFAULT_STABLE_TIME } from '@/constants/cache'
import convert from '@/utils/convert'

export function usePageQuery(options?: Omit<UseQueryOptions<API.PageVO[], undefined, API.PageVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['form', 'page'], {
    queryFn: async () => api.page.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

export function usePageOptions(options?: Omit<UseQueryOptions<API.PageVO[], undefined, API.PageVO[], string[]>, 'queryKey'> | undefined) {
  const { data: pages, refetch } = usePageQuery(options)

  const convertOptions = (data?: any[]): BaseOptionType[] => {
    return convert.convertOptions(data, { label: it => it.id, value: 'id' })
  }

  return {
    options: convertOptions(pages),
    async request(params?: any) {
      return convertOptions((await refetch(params)).data)
    },
  }
}

export function usePageEnums(options?: Omit<UseQueryOptions<API.PageVO[], undefined, API.PageVO[], string[]>, 'queryKey'> | undefined) {
  const { data: pages, refetch } = usePageQuery(options)

  const convertEnums = (data: any[] = []): Record<any, any> => {
    return convert.convertEnums(data, { label: it => it.id, value: 'id' })
  }

  return {
    enums: convertEnums(pages),
    async request(params?: any) {
      return convertEnums((await refetch(params)).data)
    },
  }
}
