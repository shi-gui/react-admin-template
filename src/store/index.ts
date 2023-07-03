import { makeObservable, action, observable } from 'mobx';
import { getThemeConfig, setThemeConfig } from '@/utils/store';

export interface TagItem {
  id: string;
  title: string;
  path: string;
  isClosed: boolean;
}

export interface ThemeType {
  sidebarLogo: boolean;
  showTag: boolean;
  primaryColor: string;
  [key: string]: string | boolean;
}

const config = JSON.parse(getThemeConfig() || '{}');
class RootStore {
  constructor() {
    makeObservable(this, {
      /**
       * observable  让其成为可响应式的属性
       * action 表示指定该方法是一个action方法(bound: 表示自动绑定该方法的this)
       */
      tag: observable,
      setTag: action.bound,
      removeTag: action.bound,
      removeAllTag: action.bound,

      theme: observable,
      setTheme: action.bound
    });
  }
  /**
   * tag
   */
  tag: TagItem[] = [
    {
      id: '1',
      title: '首页',
      path: '/home',
      isClosed: false
    }
  ];
  setTag(tag: TagItem) {
    const values = this.tag.map(item => item.path);
    if (!values.includes(tag.path)) {
      this.tag.push(tag);
    }
  }
  removeTag(id: string) {
    this.tag = this.tag.filter(item => item.id !== id);
  }
  removeAllTag() {
    this.tag = this.tag.filter(item => !item.isClosed);
  }

  /**
   * theme 主题定制
   */
  theme: ThemeType = {
    sidebarLogo: config?.sidebarLogo ?? true,
    showTag: config?.showTag ?? true,
    primaryColor: config?.primaryColor ?? '#1677ff'
  };
  setTheme(key: keyof ThemeType, value: string | boolean) {
    this.theme[key] = value;
    setThemeConfig(JSON.stringify(this.theme));
  }
}

export default new RootStore();
