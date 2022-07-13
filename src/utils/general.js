import Cookies from 'js-cookie';

export const getCookie = (key) => {
  return Cookies.get(key);
}

export const setCookie = (key, value, duration) => {
  Cookies.set(key, value, duration)
}

export const deleteCookie = (key) => {
  Cookies.remove(key)
}

export const deepClone = (data) => {
  return JSON.parse(JSON.stringify(data));
}

export const isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor)
  && !Object.entries(obj || {}).length;