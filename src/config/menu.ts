/*
 * @Author: liuhua
 * @Date: 2023-06-17 17:23:30
 * @LastEditors: liuhua
 * @LastEditTime: 2023-06-21 16:03:04
 * @Description: 菜单配置（配置由后端返回更加灵活）
 *
 */
import * as Icons from '@ant-design/icons';

export type IconType = keyof typeof Icons;
export interface MenuItem {
  id: string;
  title: string;
  path: string | null;
  roles: string[];
  icon?: IconType;
  parentId: string | null;
}

export const menuList: MenuItem[] = [
  // 首页
  {
    id: '1',
    title: '首页',
    path: '/home',
    roles: ['admin', 'test'],
    icon: 'HomeOutlined',
    parentId: null
  },
  // 权限测试
  {
    id: '2',
    title: '权限测试',
    path: null,
    icon: 'LockOutlined',
    roles: ['admin', 'test'],
    parentId: null
  },
  {
    id: '21',
    title: '管理员页面',
    path: '/permission/admin',
    roles: ['admin'],
    parentId: '2'
  },
  {
    id: '22',
    title: '测试页面',
    path: '/permission/test',
    roles: ['test'],
    parentId: '2'
  },
  // 嵌套路由
  {
    id: '3',
    title: '嵌套路由',
    path: null,
    icon: 'MenuOutlined',
    roles: ['admin', 'test'],
    parentId: null
  },
  {
    id: '31',
    title: '菜单1',
    path: null,
    roles: ['admin', 'test'],
    parentId: '3'
  },
  {
    id: '311',
    title: '菜单1-1',
    path: '/nest/menu1-1',
    roles: ['admin', 'test'],
    parentId: '31'
  },
  {
    id: '312',
    title: '菜单1-2',
    path: null,
    roles: ['admin', 'test'],
    parentId: '31'
  },
  {
    id: '3121',
    title: '菜单1-2-1',
    path: '/nest/menu1-2-1',
    roles: ['admin', 'test'],
    parentId: '312'
  }
];
