import { makeObservable, action, observable } from 'mobx';
import i18next from '@/libs/i18n.ts';

export interface TagItem {
  id: string;
  title: string;
  path: string;
  isClosed: boolean;
}

class RootStore {
  constructor() {
    makeObservable(this, {
      /**
       * observable  让其成为可响应式的属性
       * action 表示指定该方法是一个action方法(bound: 表示自动绑定该方法的this)
       */
      tag: observable,
      setTag: action.bound
    });
  }
  tag: TagItem[] = [
    {
      id: '1',
      // 可以在tag组件中进行国际化
      title: i18next.t('首页'),
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
}

export default new RootStore();
