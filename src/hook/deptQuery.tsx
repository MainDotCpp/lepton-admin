import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'
import type { BaseOptionType } from 'antd/es/select'
import api from '@/api'
import { DEFAULT_STABLE_TIME } from '@/constants/cache'
import convert from '@/utils/convert'

export function useDeptQuery(options?: Omit<UseQueryOptions<API.DeptVO[], undefined, API.DeptVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['system', 'dept'], {
    queryFn: async () => api.dept.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

export function useDeptOptions(options?: Omit<UseQueryOptions<API.DeptVO[], undefined, API.DeptVO[], string[]>, 'queryKey'> | undefined) {
  const { data: depts, refetch } = useDeptQuery(options)

  const convertOptions = (data: any[] = []): BaseOptionType[] => {
    return convert.convertOptions([...data, { name: '总公司', id: 0 }], { label: it => it.name, value: 'id' })
  }

  return {
    options: convertOptions(depts),
    async request(params?: any) {
      return convertOptions((await refetch(params)).data)
    },
  }
}

export function useDeptEnums(options?: Omit<UseQueryOptions<API.DeptVO[], undefined, API.DeptVO[], string[]>, 'queryKey'> | undefined) {
  const { data: depts, refetch } = useDeptQuery(options)

  const convertEnums = (data: any[] = []): Record<any, any> => {
    return convert.convertEnums(data, { label: it => it.name, value: 'id' })
  }

  return {
    enums: convertEnums(depts),
    async request(params?: any) {
      return convertEnums((await refetch(params)).data)
    },
  }
}
