import { observer } from 'mobx-react';
import RootStore from '@/store';

function Home() {
  return (
    <>
      <p>{RootStore.count}</p>
      <p>{RootStore.float}</p>
      <p onClick={RootStore.add}>增加</p>
      <p onClick={RootStore.reduce}>减少</p>
    </>
  );
}

// 如果我们想在组件中使用mobx定义的state等，需要使用observer将组件包裹
export default observer(Home);
