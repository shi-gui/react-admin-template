import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import '@/assets/css/index.less';
import '@/libs/i18n.ts';
// 翻译资源
import zhCN from 'antd/locale/zh_CN';
import zhHK from 'antd/locale/zh_HK';
import enUS from 'antd/locale/en_US';
import jaJP from 'antd/locale/ja_JP';

// dayjs
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';

dayjs.locale('zh-hk');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhHK}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
