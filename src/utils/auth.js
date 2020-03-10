import Cookies from 'js-cookie'
const LoginKey = 'hasLogin'

export function getToken() {
  return Cookies.get(LoginKey)
}

export function setToken(userName) {
  return Cookies.set(LoginKey, userName)
}

export function removeToken() {
  return Cookies.remove(LoginKey)
}
