import config from '@/config';
import Cookies from 'js-cookie';

const { tokenKey } = config;

/**
 * token
 */
export function getToken() {
  return Cookies.get(tokenKey);
}
export function setToken(token: string) {
  Cookies.set(tokenKey, token);
}
export function removeToken() {
  Cookies.remove(tokenKey);
}

/**
 * userInfo
 */
export function getUserInfo() {
  return localStorage.getItem('userInfo');
}
export function setUserInfo(userInfo: string) {
  localStorage.setItem('userInfo', userInfo);
}
export function removeUserInfo() {
  localStorage.removeItem('userInfo');
}
