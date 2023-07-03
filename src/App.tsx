import AppRouter from '@/router';
import { ConfigProvider } from 'antd';
import rootStore from '@/store';
import { observer } from 'mobx-react';

function App() {
  const { theme } = rootStore;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.primaryColor
        }
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default observer(App);
