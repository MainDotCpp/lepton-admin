import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import convert from '@/utils/convert'
import api from '@/api'

export const useSysPackageStore = create(
  immer(
    combine(
      {
        packageList: [] as API.SysPackageVO[],
      },
      (set, get) => ({
        fetchPackageList: async () => {
          const sysPackageList = await api.sysPackage.list({})
          set({ packageList: sysPackageList })
          return sysPackageList
        },
        get packageOptions() {
          return convert.convertOptions(get().packageList, { label: 'name', value: 'id' })
        },
        get packageEnums() {
          return convert.convertEnums(get().packageList, { label: it => it.name, value: 'id' })
        },
      }),
    ),
  ),
)
