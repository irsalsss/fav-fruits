import create from 'zustand'
import { persist } from 'zustand/middleware'
import { INITIAL_USER_FAVORITE } from '../constant/user';
import { deepClone } from '../utils/general';

const useStoreFavorite = create(persist(
  (set, get) => ({
    favorite: {},
    activeUser: {},
    setActiveUser: (newData) => set({ activeUser: newData }),
    setInitialFavorite: () => set({ favorite: INITIAL_USER_FAVORITE }),
    addFavorite: (fruit) => set((state) => {
      const user = state.activeUser.username
      const newFav = [...state.favorite[user].favorite, fruit];

      // next improvement use immer js :")
      let currFav = deepClone(state.favorite);
      currFav[user].favorite = newFav;

      return {
        favorite: currFav
      }
    }),
    setFavorite: (newFav) => set((state) => {
      const user = state.activeUser.username

      // next improvement use immer js :")
      let currFav = deepClone(state.favorite);
      currFav[user].favorite = newFav;

      return {
        favorite: currFav
      }
    }),
  }),
  {
    name: 'favorite',
    getStorage: () => localStorage,
  }
))

export default useStoreFavorite;