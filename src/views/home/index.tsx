import { observer } from 'mobx-react';
import RootStore from '@/store';
import { Button, DatePicker, type DatePickerProps } from 'antd';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <p className=" text-red-500">{RootStore.count}</p>
      <p>{RootStore.float}</p>
      <Button type="primary" onClick={RootStore.add} className="cursor-pointer">
        {t('首页')}
      </Button>
      <Button type="dashed" onClick={RootStore.reduce}>
        减少
      </Button>
      <DatePicker onChange={onChange} />
    </>
  );
}

// 如果我们想在组件中使用mobx定义的state等，需要使用observer将组件包裹
export default observer(Home);
