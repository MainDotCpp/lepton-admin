import type { Color } from 'antd/es/color-picker'
import type { BaseOptionType, DefaultOptionType } from 'antd/es/select'
import type React from 'react'

type KeyMapType<T> = string | number | ((it: T) => React.JSX.Element)
export default {
  convertOptions: <T>(data: T[] = [], { label = 'label', value = 'value' }: { label: KeyMapType<T>, value: KeyMapType<T> }): DefaultOptionType[] => {
    const l = typeof label === 'function' ? label : (it: T) => it[label]
    const v = typeof value === 'function' ? value : (it: T) => it[value]
    return data?.map(it => ({ label: l(it), value: v(it) })) || []
  },

  convertEnums: <T extends any>(data: T[], { label = (it: T) => it.name, value = 'value' }) => {
    return data.reduce((acc, item) => {
      acc[item[value]] = label(item)
      return acc
    }, {} as Record<any, any>)
  },

  fetchOptions: async <T extends any>(request: (args: any) => Promise<T[]>, { label = 'name', value = 'id' }: any) => {
    const data = await request()
    const l = typeof label === 'function' ? label : (it: T) => it[label]
    const v = typeof value === 'function' ? value : (it: T) => it[value]
    return data.map(it => ({ label: l(it), value: v(it) }))
  },

  color: {
    getHex(value?: Color | string) {
      if (!value) {
        return ''
      }
      if (typeof value === 'string') {
        return value
      }
      return value.toHexString()
    },
  },
}
