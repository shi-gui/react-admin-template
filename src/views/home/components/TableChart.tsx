import { Col, Row, Tabs, Statistic, type TabsProps } from 'antd';
import Chart, { type ECOption } from '@/components/chart';
import { useTranslation } from 'react-i18next';

function TableChart() {
  const { t } = useTranslation();

  function UList(props: { len: number; address: string; data: number }) {
    const { len, address, data } = props;

    return (
      <ul>
        {new Array(len).fill(null).map((_, i) => (
          <li key={i} className="flex items-center justify-between my-5">
            <div className="flex items-center">
              <div className="w-5 h-5 leading-5 text-center sp rounded-full bg-slate-200 mr-2">
                {i}
              </div>
              <div>
                {t(address)} {i + 1}
                {t('号店')}
              </div>
            </div>
            <Statistic value={data} valueStyle={{ fontSize: '14px' }} />
          </li>
        ))}
      </ul>
    );
  }

  const TabContentOne = () => {
    const option: ECOption = {
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 10,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: `{b0}: <br />${t('销售额')}：{c0}`
      },
      xAxis: {
        type: 'category',
        data: (function () {
          return new Array(12).fill(null).map((_, i) => {
            return i + 1 + t('月');
          });
        })()
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130
          ],
          type: 'bar',
          barWidth: 35,
          showBackground: false
        }
      ]
    };
    return (
      <Row gutter={[16, 16]} className="p-0 m-0 h-[320px]">
        <Col span={15} className="h-full">
          <Chart width="100%" height="100%" options={option} />
        </Col>
        <Col span={8} offset={1}>
          <p>{t('门店销售额')}</p>
          <UList len={6} address="双流区" data={34678} />
        </Col>
      </Row>
    );
  };
  const TabContentTwo = () => {
    const option: ECOption = {
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 10,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: `{b0}: <br />${t('访问量')}：{c0}`
      },
      xAxis: {
        type: 'category',
        data: (function () {
          return new Array(12).fill(null).map((_, i) => {
            return i + 1 + t('月');
          });
        })()
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
            1330, 1320
          ],
          type: 'line',
          smooth: true
        }
      ]
    };
    return (
      <Row gutter={[16, 16]} className="p-0 m-0 h-[320px]">
        <Col span={15} className="h-full">
          <Chart width="100%" height="100%" options={option} />
        </Col>
        <Col span={8} offset={1}>
          <p>{t('门店访问量')}</p>
          <UList len={5} address="成华区" data={25678} />
        </Col>
      </Row>
    );
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('销售额'),
      children: <TabContentOne />
    },
    {
      key: '2',
      label: t('访问量'),
      children: <TabContentTwo />
    }
  ];
  return (
    <div className="!mx-0 bg-white p-4">
      <Tabs items={items} />
    </div>
  );
}

export default TableChart;
