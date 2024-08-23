import type { UseQueryOptions } from 'react-query'
import { useMutation, useQuery } from 'react-query'
import type { BaseOptionType } from 'antd/es/select'
import api from '@/api'
import { LTag } from '@/components/common/LTag'
import { DEFAULT_STABLE_TIME } from '@/constants/cache'
import convert from '@/utils/convert'

export function useChannelQuery(options?: Omit<UseQueryOptions<API.ChannelVO[], undefined, API.ChannelVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['customer', 'channel'], {
    queryFn: async () => api.channel.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

export function useChannelOptions(options?: Omit<UseQueryOptions<API.ChannelVO[], undefined, API.ChannelVO[], string[]>, 'queryKey'> | undefined) {
  const { data: channels, refetch } = useChannelQuery(options)

  const convertOptions = (data?: any[]): BaseOptionType[] => {
    return convert.convertOptions(data, { label: it => <LTag textColor={it.textColor} backgroundColor={it.backgroundColor}>{it.name}</LTag>, value: 'id' })
  }

  return {
    options: convertOptions(channels),
    async request(params?: any) {
      return convertOptions((await refetch(params)).data)
    },
  }
}

export function useChannelEnums(options?: Omit<UseQueryOptions<API.ChannelVO[], undefined, API.ChannelVO[], string[]>, 'queryKey'> | undefined) {
  const { data: channels, refetch } = useChannelQuery(options)

  const convertEnums = (data?: any[]): Record<any, any> => {
    return convert.convertEnums(data, { label: 'name', value: 'id' })
  }

  return {
    enums: convertEnums(channels),
    async request(params?: any) {
      return convertEnums((await refetch(params)).data)
    },
  }
}
