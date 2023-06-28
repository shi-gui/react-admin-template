import { observer } from 'mobx-react';
import { DatePicker, type DatePickerProps } from 'antd';

function Home() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <DatePicker onChange={onChange} />
    </>
  );
}

// 如果我们想在组件中使用mobx定义的state等，需要使用observer将组件包裹
export default observer(Home);
