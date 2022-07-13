import { FRUIT_LIST } from "./fruits"

export const FAKE_USER_DATA = [
  { username: 'user', password: 'test1234' },
  { username: 'user2', password: 'pass1234' }
]

export const INITIAL_USER_FAVORITE = [
  { username: 'user', currentFruit: FRUIT_LIST, favorite: [] },
  { username: 'user2', currentFruit: FRUIT_LIST, favorite: [] }
]