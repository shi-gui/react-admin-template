import React from 'react';
import { useRoutes } from 'react-router-dom';
import router from '@/router';
import LoadingDiv from '@/components/LoadingDiv';
function App() {
  const route = useRoutes(router);
  return (
    <>
      <React.Suspense fallback={<LoadingDiv></LoadingDiv>}>
        {route}
      </React.Suspense>
    </>
  );
}

export default App;
