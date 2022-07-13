export const deepClone = (data) => {
  return JSON.parse(JSON.stringify(data));
}

export const isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor)
  && !Object.entries(obj || {}).length;