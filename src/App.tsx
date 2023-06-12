import React from 'react';
import { useRoutes } from 'react-router-dom';
import router from '@/router';

function App() {
  const route = useRoutes(router);
  return (
    <div className="app">
      <React.Suspense>{route}</React.Suspense>
    </div>
  );
}

export default App;
