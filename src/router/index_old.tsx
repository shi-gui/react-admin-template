import Layout from '@/layout';
import React, { lazy } from 'react';
const Login = lazy(() => import('@/views/login'));
const Home = lazy(() => import('@/views/home'));
const NotFound = lazy(() => import('@/views/404'));
const AccountCenter = lazy(() => import('@/views/account/center'));
const AccountSettings = lazy(() => import('@/views/account/settings'));
const PermissionAdmin = lazy(() => import('@/views/permission/admin'));
const PermissionTest = lazy(() => import('@/views/permission/test'));
const Menu1_1 = lazy(() => import('@/views/nest/menu1/menu1-1'));
const Menu1_2_1 = lazy(() => import('@/views/nest/menu1/menu1-2/menu1-2-1'));

export interface AppRouteObjectMeta {
  title?: string;
  icon?: JSX.Element;
  hideInMenu?: boolean;
  permissions?: string[];
}

export interface RouteObject {
  caseSensitive?: boolean; // 大小写敏感
  children?: RouteObject[]; // 嵌套路由
  element?: React.ReactNode; // 组件 or 页面
  path?: string; // 匹配路径
}

export interface AppRouteObjet extends RouteObject {
  children?: AppRouteObjet[];
  meta?: AppRouteObjectMeta;
}

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/account/center',
        element: <AccountCenter />
      },
      {
        path: '/account/settings',
        element: <AccountSettings />
      },
      {
        path: '/permission/admin',
        element: <PermissionAdmin />
      },
      {
        path: '/permission/test',
        element: <PermissionTest />
      },
      {
        path: '/nest/menu1-1',
        element: <Menu1_1 />
      },
      {
        path: '/nest/menu1-2-1',
        element: <Menu1_2_1 />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default router;
