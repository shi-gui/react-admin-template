import Layout from '@/layout';
import Home from '@/views/home';
import NotFound from '@/views/404';
import React from 'react';

const Login = React.lazy(() => import('@/views/login'));

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
        path: 'home',
        element: <Home />
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
