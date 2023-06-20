/*
 * @Author: liuhua
 * @Date: 2023-06-17 17:23:30
 * @LastEditors: liuhua
 * @LastEditTime: 2023-06-20 15:22:38
 * @Description: 菜单配置（配置由后端返回更加灵活）
 *
 */
import { LockOutlined, MenuOutlined, HomeOutlined } from '@ant-design/icons';
export const menuList = [
  {
    key: '1',
    label: '首页',
    path: '/home',
    icon: <HomeOutlined />,
    roles: ['admin', 'test']
  },
  {
    key: '2',
    label: '权限测试',
    path: '/permission',
    icon: <LockOutlined />,
    roles: ['admin', 'test'],
    children: [
      {
        key: '2-1',
        label: '管理员页面',
        path: '/permission/admin',
        icon: '',
        roles: ['admin']
      },
      {
        key: '2-2',
        label: '测试页面',
        path: '/permission/test',
        icon: '',
        roles: ['test']
      }
    ]
  },
  {
    key: '3',
    label: '嵌套路由',
    path: '/nest',
    icon: <MenuOutlined />,
    roles: ['admin', 'test'],
    children: [
      {
        key: '3-1',
        label: '菜单1',
        path: '/nest/menu1',
        icon: '',
        roles: ['admin', 'test'],
        children: [
          {
            key: '3-1-1',
            label: '菜单1-1',
            path: '/nest/menu1-1',
            icon: '',
            roles: ['admin', 'test']
          },
          {
            key: '3-1-2',
            label: '菜单1-2',
            path: '/nest/menu1-2',
            icon: '',
            roles: ['admin', 'test'],
            children: [
              {
                key: '3-1-2-1',
                label: '菜单1-2-1',
                path: '/nest/menu1-2-1',
                icon: '',
                roles: ['admin', 'test']
              }
            ]
          }
        ]
      }
    ]
  }
];
