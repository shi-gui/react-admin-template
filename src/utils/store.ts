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

/**
 * lang
 */
export function getLang() {
  return localStorage.getItem('lang');
}
export function setLang(lang: string) {
  localStorage.setItem('lang', lang);
}
export function removeLang() {
  localStorage.removeItem('lang');
}

/**
 * username
 */
export function getUserName() {
  return localStorage.getItem('username');
}
export function setUserName(username: string) {
  localStorage.setItem('username', username);
}
export function removeUserName() {
  localStorage.removeItem('username');
}

/**
 * themeConfig
 */
export function getThemeConfig() {
  return localStorage.getItem('themeConfig');
}
export function setThemeConfig(config: string) {
  localStorage.setItem('themeConfig', config);
}
export function removeThemeConfig() {
  localStorage.removeItem('themeConfig');
}
