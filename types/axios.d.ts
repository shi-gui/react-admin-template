import 'axios';
declare module 'axios' {
  interface AxiosRequestConfig {
    skipIntercept?: boolean;
    skipShowTips?: boolean;
  }
}
