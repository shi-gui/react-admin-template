/*
 * @Author: liuhua
 * @Date: 2023-06-17 17:23:30
 * @LastEditors: liuhua
 * @LastEditTime: 2023-06-17 17:59:11
 * @Description: 菜单配置（配置由后端返回更加灵活）
 *
 */

export interface MenuItem {
  title: string;
  path: string;
  icon?: string;
  roles: string[];
  children?: MenuItem[];
}

export const menu: MenuItem[] = [
  {
    title: '首页',
    path: '/home',
    icon: '',
    roles: ['admin', 'test']
  },
  {
    title: '权限测试',
    path: '/permission',
    icon: '',
    roles: ['admin', 'test'],
    children: [
      {
        title: '管理员页面',
        path: '/permission/admin',
        icon: '',
        roles: ['admin']
      },
      {
        title: '测试页面',
        path: '/permission/test',
        icon: '',
        roles: ['test']
      }
    ]
  },
  {
    title: '嵌套路由',
    path: '/nest',
    icon: '',
    roles: ['admin', 'test'],
    children: [
      {
        title: '菜单1',
        path: '/nest/menu1',
        icon: '',
        roles: ['admin', 'test'],
        children: [
          {
            title: '菜单1-1',
            path: '/nest/menu1-1',
            icon: '',
            roles: ['admin', 'test']
          },
          {
            title: '菜单1-2',
            path: '/nest/menu1-2',
            icon: '',
            roles: ['admin', 'test'],
            children: [
              {
                title: '菜单1-2-1',
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
