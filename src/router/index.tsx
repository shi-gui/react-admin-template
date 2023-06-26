import { lazy, ReactNode, Suspense } from 'react';
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  type RouteObject
} from 'react-router-dom';
import { getToken } from '@/utils/store';
import { Spin } from 'antd';
// Layout不需要懒加载
import Layout from '@/layout';
// 导入组件(懒加载)
const Login = lazy(() => import('@/views/login'));
const Home = lazy(() => import('@/views/home'));
const NotFound = lazy(() => import('@/views/404'));
const AccountCenter = lazy(() => import('@/views/account/center'));
const AccountSettings = lazy(() => import('@/views/account/settings'));
const PermissionAdmin = lazy(() => import('@/views/permission/admin'));
const PermissionTest = lazy(() => import('@/views/permission/test'));
const Menu1_1 = lazy(() => import('@/views/nest/menu1/menu1-1'));
const Menu1_2_1 = lazy(() => import('@/views/nest/menu1/menu1-2/menu1-2-1'));

// 避免闪屏
const lazyLoad = (conponent: ReactNode): ReactNode => {
  return <Suspense fallback={<Spin />}>{conponent}</Suspense>;
};

const AppRouter = () => {
  const location = useLocation();
  const { pathname } = location;
  const token = getToken();

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: lazyLoad(<Home />)
        },
        {
          path: '/home',
          element: lazyLoad(<Home />)
        },
        {
          path: '/account/center',
          element: lazyLoad(<AccountCenter />)
        },
        {
          path: '/account/settings',
          element: lazyLoad(<AccountSettings />)
        },
        {
          path: '/permission/admin',
          element: lazyLoad(<PermissionAdmin />)
        },
        {
          path: '/permission/test',
          element: lazyLoad(<PermissionTest />)
        },
        {
          path: '/nest/menu1-1',
          element: lazyLoad(<Menu1_1 />)
        },
        {
          path: '/nest/menu1-2-1',
          element: lazyLoad(<Menu1_2_1 />)
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

  const handleRedirect = (item: RouteObject) => {
    if (pathname === '/') {
      return <Navigate to="/home" />;
    }
    if (pathname !== '/login' && !token) {
      return <Navigate to="/login" replace={true} />;
    } else {
      return item.element;
    }
  };

  const RouteNav = (param: RouteObject[]) => {
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
