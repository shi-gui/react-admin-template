import { makeObservable, action, observable, computed } from 'mobx';

export interface TagItem {
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
       * computed: 表示当前值是一个计算值，会存在缓存
       */
      tag: observable,
      getTag: computed,
      setTag: action.bound
    });
  }
  tag: TagItem[] = [];
  getTag() {
    return this.tag;
  }
  setTag(tag: TagItem) {
    this.tag.push(tag);
  }
}

export default new RootStore();
