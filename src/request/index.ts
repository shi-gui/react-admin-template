import { downloadFile } from '@/utils/index';
import { getToken } from '@/utils/store';
import Request, { type RequestConfig } from './Server';
import { ResponseType } from '@/api/types';
import appConfig from '@/config';
import {
  handleBusinessError,
  handleNetworkError,
  handleShowTips
} from './tools';

const { tokenKey } = appConfig;
const request = new Request<ResponseType>({
  timeout: 30000,
  baseURL: '',
  withCredentials: false,
  // 取消重复请求
  cancelDuplicateRequest: false,
  interceptors: {
    requestInterceptor(config) {
      const token = getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers[tokenKey] = token;
      }
      config.headers['Content-Type'] = 'application/json;charset=UTF-8';
      return config;
    },
    responseInterceptor({ data, config }) {
      // 跳过拦截器
      if (config.skipIntercept) return Promise.resolve(data);

      if ([200, 2001].includes(data.code)) {
        // 自动提示
        handleShowTips(data, config);
        return Promise.resolve(data.data);
      }
      // 处理业务错误
      handleBusinessError(data);
      return Promise.reject(data);
    },
    responseInterceptorCatch(error) {
      handleNetworkError(error);
      return Promise.reject(error);
    }
  }
});
export default request;

export const get = request.get.bind(request);
export const post = request.post.bind(request);
export const put = request.put.bind(request);
export const patch = request.patch.bind(request);
export const del = request.delete.bind(request);

/**
 * 下载文件
 * @param fileName 文件名
 * @param url
 * @param data
 * @param config
 * @returns
 */
export const download = (
  fileName: string,
  url: string,
  data?: any,
  config?: RequestConfig
) => {
  return request
    .get<BlobPart>(url, data, {
      skipIntercept: true,
      skipShowTips: true,
      responseType: 'blob',
      ...config
    })
    .then(res => downloadFile(res, fileName))
    .catch(err => {
      console.log('文件下载失败：', err);
    });
};
