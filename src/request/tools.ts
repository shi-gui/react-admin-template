import type { AxiosError } from 'axios';
import { message } from 'antd';
import type { ResponseType } from '@/api/types';
import type { RequestConfig } from './Server';
import { logout } from '@/utils/auth';

/**
 * 处理自动提示，post、delete、put方法自动提示，可以通过接口中传递skipShowTips配置关闭该提示
 * @param data
 * @param config
 */
export function handleShowTips(data: ResponseType, config: RequestConfig) {
  if (config?.method?.match(/(post|delete|put)/i) && !config.skipShowTips) {
    message.destroy();
    data.msg && message.success(data.msg || '操作成功');
  }
}

const statusMap: Record<number, string> = {
  400: '请求参数错误',
  401: '未授权, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  409: '请求发生冲突',
  410: '请求的资源已删除',
  413: '请求体过大，服务器无法处理',
  414: '请求url过长',
  415: '不支持的媒体类型',
  429: '请求次数超过限制',
  500: '服务器端内部错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网络错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
};
/**
 * 网络错误处理
 * @param error
 * @returns
 */
export function handleNetworkError(error: AxiosError<ResponseType>) {
  message.destroy();
  const status = error.response?.status;
  const tips = error.response?.data?.msg || (status && statusMap[status]) || `请求失败: ${error}`;
  message.error(tips);
  error.response?.status === 401 && logout();
}

const errMap: Record<number, string> = {
  10031: '登录失效，需要重新登录', // token 失效
  10032: '您太久没登录，请重新登录~', // token 过期
  10033: '账户未绑定角色，请联系管理员绑定角色',
  10034: '该用户未注册，请联系管理员注册用户',
  10035: 'code 无法获取对应第三方平台用户',
  10036: '该账户未关联员工，请联系管理员做关联',
  10037: '账号已无效',
  10038: '账号未找到'
};
/**
 * 业务错误处理
 * @param data
 */
export function handleBusinessError(data: ResponseType) {
  message.destroy();
  // 返回接口返回提示信息
  const msg = data?.msg || errMap[data.code] || '请求失败，请联系管理员';
  message.error(msg);
}
