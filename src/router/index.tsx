import Layout from '@/layout';
import Home from '@/views/home';
import NotFound from '@/views/404';
import React from 'react';
import { RouteObject } from 'react-router-dom';

const Login = React.lazy(() => import('@/views/login'));

export interface AppRouteObjectMeta {
  title?: string;
  icon?: JSX.Element;
  hideInMenu?: boolean;
  permissions?: string[];
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
