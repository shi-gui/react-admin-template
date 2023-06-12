import Layout from '@/layout';
import React, { lazy } from 'react';
const Login = lazy(() => import('@/views/login'));
const Home = lazy(() => import('@/views/home'));
const NotFound = lazy(() => import('@/views/404'));
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
        element: <Home></Home>
      },
      {
        path: 'home',
        element: <Home></Home>
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
