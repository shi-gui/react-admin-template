import { DatePicker, type DatePickerProps } from 'antd';
import { observer } from 'mobx-react';
import rootStore from '@/store';
import Chart, { type ECOption } from '@/components/chart';

function Home() {
  const { theme } = rootStore;
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const options: ECOption = {
    color: theme.primaryColor,
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  const handleClick = (params: any) => {
    console.log(params);
  };

  return (
    <>
      <DatePicker onChange={onChange} />
      <Chart
        width="100%"
        height={300}
        options={options}
        onClick={handleClick}
      />
    </>
  );
}

export default observer(Home);
