import { create } from 'zustand'

type AuthState = {
    user: User | null
    setUser: (data: User) => void
  }

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (data) => set((state) => ({ ...state, user: data})),
}))

export default useAuthStore