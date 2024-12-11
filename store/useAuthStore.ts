import { create } from 'zustand'

type authStore = {
  userToken: string | null
  signIn: (token: string) => void
  signOut: () => void
}

export const useAuthStore = create<authStore>()((set) => ({
  userToken: null,
  signIn: (token = 'dummy-token') => set({ userToken: token }),
  signOut: () => set({ userToken: null }),
}))