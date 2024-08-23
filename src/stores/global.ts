import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import api from '@/api'

interface GlobalState {
  userInfo?: API.UserInfoVO
  login: (phone: string, password: string) => Promise<API.UserInfoVO>
  setUserInfo: (userInfo: API.UserInfoVO) => void
}

const initialState: Partial<GlobalState> = {}

export const useGlobalStore = create<GlobalState>(
          devtools(immer(set => ({
    ...initialState,
    async setUserInfo(userInfo: API.UserInfoVO) {
      set((state) => {
        state.userInfo = userInfo
      })
    },
    async login(phone: string, password: string) {
      const userInfo = await api.auth.login({
        phone,
        password,
      })
      return userInfo
    },
  }))),
)

export const useUserInfo = () => useGlobalStore(state => state.userInfo)
