import { FRUIT_LIST } from "../constant/fruits"

export const getAvailableFruits = (favFruits) => {
  const availableFruits = FRUIT_LIST.filter((v) => !favFruits.includes(v))
  return Promise.resolve(availableFruits)
}