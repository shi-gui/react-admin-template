import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/'
  },
  {
    path: '/login'
  },
  {
    path: '*'
  }
]);

export default router;
