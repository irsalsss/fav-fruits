import create from 'zustand'
import { persist } from 'zustand/middleware'
import { INITIAL_USER_FAVORITE } from '../constant/user';

const useStoreFavorite = create(persist(
  (set, get) => ({
    favorite: [],
    activeUser: {},
    setActiveUser: (newData) => set({ activeUser: newData }),
    setInitialFavorite: () => set({ favorite: INITIAL_USER_FAVORITE }),
  }),
  {
    name: 'favorite',
    getStorage: () => localStorage,
  }
))

export default useStoreFavorite;