import type { BaseOptionType } from 'antd/es/select'
import type { UseQueryOptions } from 'react-query'
import { useMutation, useQuery } from 'react-query'
import api from '@/api'
import { DEFAULT_STABLE_TIME } from '@/constants/cache'
import convert from '@/utils/convert'

export function useGetUserById(options?: Omit<UseQueryOptions<API.UserVO[], undefined, API.UserVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['system', 'user'], {
    queryFn: async () => api.user.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

export function useUserQuery(options?: Omit<UseQueryOptions<API.UserVO[], undefined, API.UserVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['system', 'user', 'list'], {
    queryFn: async () => api.user.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

export function useUserOptions(options?: Omit<UseQueryOptions<API.UserVO[], undefined, API.UserVO[], string[]>, 'queryKey'> | undefined) {
  const { data: users, refetch } = useUserQuery(options)

  const convertOptions = (data?: any[]): BaseOptionType[] => {
    return convert.convertOptions(data, { label: it => it.name, value: 'id' })
  }

  return {
    options: convertOptions(users),
    enums: convert.convertEnums(users, { label: it => it.name, value: 'id' }),
    async request(params: any = {}) {
      return convertOptions((await refetch(params)).data)
    },
  }
}

export function useSaveUser() {
  return useMutation({
    mutationFn: api.user.save,
  })
}
