/*
 * @Author: liuhua
 * @Date: 2023-07-04 09:27:26
 * @LastEditors: liuhua
 * @LastEditTime: 2023-07-04 15:18:22
 * @Description: 系统设置默认配置
 *
 */

export interface ThemeType {
  sidebarLogo: boolean;
  showTag: boolean;
  primaryColor: string;
  mode: 'dark' | 'light';
  [key: string]: string | boolean;
}

export default {
  sidebarLogo: true,
  showTag: true,
  primaryColor: '#1677ff',
  mode: 'dark'
};
