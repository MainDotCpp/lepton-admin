import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'
import type { BaseOptionType } from 'antd/es/select'
import api from '@/api'
import { DEFAULT_STABLE_TIME } from '@/constants/cache'
import convert from '@/utils/convert'

export function useGoodsQuery(options?: Omit<UseQueryOptions<API.GoodsVO[], undefined, API.GoodsVO[], string[]>, 'queryKey'> | undefined) {
  return useQuery(['order', 'goods'], {
    queryFn: async () => api.goods.list({}),
    staleTime: DEFAULT_STABLE_TIME,
    ...options,
  })
}

function renderItem(it: API.GoodsVO) {
  return (
    <div className="flex justify-between">
      <span>{it.name}</span>
      <span className="text-black/50">
        ¥
        {it.price}
      </span>
    </div>
  )
}

export function useGoodsOptions(options?: Omit<UseQueryOptions<API.GoodsVO[], undefined, API.GoodsVO[], string[]>, 'queryKey'> | undefined) {
  const { data: goodss, refetch } = useGoodsQuery(options)

  const convertOptions = (data?: any[]): BaseOptionType[] => {
    return convert.convertOptions(data, { label: renderItem, value: 'id' })
  }

  return {
    options: convertOptions(goodss),
    async request(params?: any) {
      return convertOptions((await refetch(params)).data)
    },
  }
}

export function useGoodsEnums(options?: Omit<UseQueryOptions<API.GoodsVO[], undefined, API.GoodsVO[], string[]>, 'queryKey'> | undefined) {
  const { data: goodss, refetch } = useGoodsQuery(options)

  const convertEnums = (data: any[] = []): Record<any, any> => {
    return convert.convertEnums(data, { label: renderItem, value: 'id' })
  }

  return {
    enums: convertEnums(goodss),
    async request(params?: any) {
      return convertEnums((await refetch(params)).data)
    },
  }
}
