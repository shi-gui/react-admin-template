import { useRef, useEffect } from 'react';
import echarts, { type ECOption as Options } from '@/libs/echarts';
import { observer } from 'mobx-react';
import debounce from 'lodash/debounce';

export type ECOption = Options;
export interface IProps {
  width: number | string;
  height: number | string;
  options: ECOption;
  onClick?: (params: Record<string, any>) => void;
}

function Chart(props: IProps) {
  /**
   * 宽高处理，支持传入数字、字符串（百分比）
   */
  const { width, height } = props;
  const w = typeof width === 'number' ? width + 'px' : width;
  const h = typeof height === 'number' ? height + 'px' : height;

  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(props.options);
      // event
      chart.on('click', params => {
        props.onClick && props.onClick(params);
      });

      /**
       * resize
       */
      const fn = debounce(() => {
        chart.resize();
      }, 200);
      window.addEventListener('resize', fn);

      /**
       * 组件卸载时执行
       */
      return () => {
        chart.dispose();
        window.removeEventListener('resize', fn);
      };
    }
  }, [props.options]);

  return <div ref={chartRef} style={{ width: w, height: h }} />;
}

export default observer(Chart);
