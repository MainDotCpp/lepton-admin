import { create } from 'zustand'
import { combine, devtools, persist } from 'zustand/middleware'

export const useLocalStore = create(
  devtools(
    persist(
      combine(
        {
          tenantId: undefined as number | undefined,
        },
        set => ({
          setTenantId: (tenantId?: number) => {
            set({ tenantId })
          },
        }),
      ),
      { name: 'localStore' },
    ),
  ),
)

export const useTenantId = () => useLocalStore(state => state.tenantId)
export const useSetTenantId = () => useLocalStore(state => state.setTenantId)
