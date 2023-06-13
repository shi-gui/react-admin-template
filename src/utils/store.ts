import Cookie from 'js-cookie';
import appConfig from '@/config';

const { tokenKey } = appConfig;

//#region token
export function getToken() {
  return Cookie.get(tokenKey);
}
export function setToken(token: string) {
  return Cookie.set(tokenKey, token);
}
export function removeToken() {
  return Cookie.remove(tokenKey);
}
//#endregion
