import Cookies from 'universal-cookie'
const cookies = new Cookies()
let cookieConfig = {}

export function saveCookie(name,value) {
  cookies.set(name, value, cookieConfig)
}

export function getCookie(name) {
  return cookies.get(name)
}

export function removeCookie(name) {
  cookies.remove(name, cookieConfig)
}

export function signOut() {
  cookies.remove('token', cookieConfig)
}

export function isLogin() {
  return !!cookies.get('token')
}