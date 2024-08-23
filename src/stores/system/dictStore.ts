import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import convert from '@/utils/convert'
import api from '@/api'

export const useDictStore = create(
  immer(
    combine(
      {
        dicts: [] as API.DictVO[],
      },
      (set, get) => ({
        fetchDicts: async () => {
          const dicts = await api.dict.list({})
          set({ dicts })
          return dicts
        },
        dictMap(type: string) {
          return convert.convertEnums(get().dicts.find(it => it.type === type)?.items || [], { label: it => it.item, value: 'value' })
        },
        dictOptions(type: string) {
          return convert.convertOptions(get().dicts.find(it => it.type === type)?.items || [], { label: 'item', value: 'value' })
        },
      }),
    ),
  ),
)

export const useDict = () => useDictStore(state => state)
export const useDictOptions = (type: string) => useDictStore(state => state.dictOptions(type))
export const useDictMap = (type: string) => useDictStore(state => state.dictMap(type))
