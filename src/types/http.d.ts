import type { SortOrder } from 'antd/es/table/interface'

declare namespace REQUEST {
  interface PageParams<T> {
    params: T & {
      pageSize?: number
      current?: number
      keyword?: string
    }
    sort: Record<string, SortOrder>
    filter: Record<string, (string | number)[] | null>
  }
}
