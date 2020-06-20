import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const Username = 'user'
const Userinfo = 'userinfo'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getuser() {
  return Cookies.get(Username)
}

export function setuser(user) {
  return Cookies.set(Username, user)
}

export function removeuser() {
  return Cookies.remove(Username)
}

export function getuserinfo() {
  return Cookies.get(Userinfo)
}

export function setuserinfo(userinfo) {
  let us = JSON.stringify(userinfo)
  return Cookies.set(Userinfo,us)
}

export function removeuserinfo() {
  return Cookies.remove(Userinfo)
}
