import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Home from '@/views/home';
import Login from '@/views/login';
import NotFound from '@/views/404';

const router = createBrowserRouter([
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
]);

export default router;
