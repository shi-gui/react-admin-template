import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import '@/assets/css/index.less';
import '@/libs/i18n.ts';
import { getLang } from '@/utils/store';
import appConfig from '@/config';

const { defaultLang } = appConfig;
const lang = getLang() || defaultLang;
// antd国际化
import zhCN from 'antd/locale/zh_CN';
import zhHK from 'antd/locale/zh_HK';
import enUS from 'antd/locale/en_US';
import jaJP from 'antd/locale/ja_JP';
const antdLocale: Record<string, any> = {
  zhCN,
  zhHK,
  enUS,
  jaJP
};

// dayjs国际化
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';
const dayjsLocale: Record<string, string> = {
  zhCN: 'zh-cn',
  zhHK: 'zh-hk',
  enUS: 'en',
  jaJP: 'ja'
};
dayjs.locale(dayjsLocale[lang]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={antdLocale[lang]}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
