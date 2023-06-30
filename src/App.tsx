import AppRouter from '@/router';
import { ConfigProvider } from 'antd';
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b'
        }
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
