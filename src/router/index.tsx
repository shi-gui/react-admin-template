import Layout from '@/layout';
import { lazy, ReactNode } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { getToken } from '@/utils/store';
// 导入组件
const Login = lazy(() => import('@/views/login'));
const Home = lazy(() => import('@/views/home'));
const NotFound = lazy(() => import('@/views/404'));
const AccountCenter = lazy(() => import('@/views/account/center'));
const AccountSettings = lazy(() => import('@/views/account/settings'));
const PermissionAdmin = lazy(() => import('@/views/permission/admin'));
const PermissionTest = lazy(() => import('@/views/permission/test'));
const Menu1_1 = lazy(() => import('@/views/nest/menu1/menu1-1'));
const Menu1_2_1 = lazy(() => import('@/views/nest/menu1/menu1-2/menu1-2-1'));

export interface AppRouteObject {
  path: string;
  element: ReactNode;
  children?: AppRouteObject[];
}
const AppRouter = () => {
  const location = useLocation();
  const { pathname } = location;
  const token = getToken();

  const routes: AppRouteObject[] = [
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

  const handleRedirect = (item: AppRouteObject) => {
    if (pathname === '/') {
      return <Navigate to="/home" />;
    }
    if (pathname !== '/login' && !token) {
      return <Navigate to="/login" replace={true} />;
    } else {
      return item.element;
    }
  };

  const RouteNav = (param: AppRouteObject[]) => {
    return param.map(item => {
      return (
        <Route path={item.path} element={handleRedirect(item)} key={item.path}>
          {item?.children && RouteNav(item.children)}
        </Route>
      );
    });
  };

  return <Routes>{RouteNav(routes)}</Routes>;
};

export default AppRouter;
