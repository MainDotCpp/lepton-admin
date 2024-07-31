import api from '@/api';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type GlobalState = {
  userInfo?: API.UserInfoVO;
  login: (phone: string, password: string) => Promise<API.UserInfoVO>;
  setUserInfo: (userInfo: API.UserInfoVO) => void;
};

const initialState: Partial<GlobalState> = {};

export const useGlobalStore = create<GlobalState>(
  immer((set) => ({
    ...initialState,
    setUserInfo: (userInfo: API.UserInfoVO) => {
      set((state) => {
        state.userInfo = userInfo;
      });
    },
    login: async (phone: string, password: string) => {
      const userInfo = await api.auth.login({
        phone,
        password,
      });
      set((state) => {
        state.userInfo = userInfo;
      });
      return userInfo;
    },
  })),
);

export const useUserInfo = () => useGlobalStore((state) => state.userInfo);
