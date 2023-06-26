import React from 'react';
import AppRouter from '@/router';
import LoadingDiv from '@/components/LoadingDiv';
function App() {
  return (
    <>
      <React.Suspense fallback={<LoadingDiv></LoadingDiv>}>
        <AppRouter />
      </React.Suspense>
    </>
  );
}

export default App;
