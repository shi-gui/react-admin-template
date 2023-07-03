import AppRouter from '@/router';
import { ConfigProvider } from 'antd';
import rootStore from '@/store';
import { observer } from 'mobx-react';

const { theme } = rootStore;
function App() {
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
