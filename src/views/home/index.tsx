import { useRef, useEffect } from 'react';
import { DatePicker, type DatePickerProps } from 'antd';
import { observer } from 'mobx-react';
import echarts, { type ECOption } from '@/libs/echarts';
import rootStore from '@/store';

function Home() {
  const { theme } = rootStore;
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
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
      chart.setOption(options);
    }
  }, [theme.primaryColor]);

  return (
    <>
      <DatePicker onChange={onChange} />
      <div ref={chartRef} className="w-[500px] h-[300px]" />
    </>
  );
}

// 如果我们想在组件中使用mobx定义的state等，需要使用observer将组件包裹
export default observer(Home);
