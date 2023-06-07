import { observer } from 'mobx-react';
import RootStore from '@/store';
import { Button } from 'antd';

function Home() {
  return (
    <>
      <p className=" text-red-500">{RootStore.count}</p>
      <p>{RootStore.float}</p>
      <Button type="primary" onClick={RootStore.add} className="cursor-pointer">
        增加
      </Button>
      <Button type="dashed" onClick={RootStore.reduce}>
        减少
      </Button>
    </>
  );
}

// 如果我们想在组件中使用mobx定义的state等，需要使用observer将组件包裹
export default observer(Home);
