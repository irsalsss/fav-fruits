import { FAKE_USER_DATA } from "../constant/user"

export const login = (username, password) => {
  const user = FAKE_USER_DATA.find((v) => 
    v.username === username && v.password === password
  )

  return Promise.resolve(user)
}