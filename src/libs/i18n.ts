import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// 导入翻译资源
import zhCN from '@/lang/zh_CN';
import zhHK from '@/lang/zh_HK';
import enUS from '@/lang/en_US';
import jaJP from '@/lang/ja_JP';

const resources = {
  zhCN: {
    translation: zhCN
  },
  zhHK: {
    translation: zhHK
  },
  enUS: {
    translation: enUS
  },
  jaJP: {
    translation: jaJP
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'jaJP', // 默认语言
  fallbackLng: 'zhCN', // 如果当前语言不存在，则会回退到默认语言
  interpolation: {
    escapeValue: false // 是否转义特殊字符
  }
});

export default i18n;
