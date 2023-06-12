import { makeObservable, action, observable, computed } from 'mobx';

class RootStore {
  constructor() {
    makeObservable(this, {
      // 让其成为可响应式的属性
      count: observable,
      // action: 表示指定该方法是一个action方法，不让控制台报警告
      // bound: 表示自动绑定该方法的this
      add: action.bound,
      reduce: action.bound,
      // computed: 表示当前值是一个计算值，会存在缓存
      float: computed
    });
  }
  count = 0;
  add() {
    this.count++;
  }
  reduce() {
    this.count--;
  }
  get float() {
    return this.count.toFixed(2);
  }
}

export default new RootStore();
