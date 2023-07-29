import { Col, Row, Tooltip, Divider, Statistic, Progress } from 'antd';
import CountUp from 'react-countup';
import {
  InfoCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Chart, { type ECOption } from '@/components/chart';
import echarts from '@/libs/echarts';

function TopCard() {
  const { t } = useTranslation();

  const boxClass = 'bg-white h-[185px] p-4 flex flex-col justify-between';
  const formatter = (value: number, decimals = 0) => (
    <CountUp end={value} decimals={decimals} separator="," />
  );

  const CardOne = () => {
    return (
      <div className={boxClass}>
        <div>
          <div className="text-gray-500 flex items-center justify-between">
            <span>{t('总销售额')}</span>
            <Tooltip title={t('指标说明')}>
              <InfoCircleOutlined />
            </Tooltip>
          </div>
          <div className="text-32 pt-4">
            <Statistic
              value={112893}
              prefix="￥"
              formatter={(value: any) => formatter(value, 2)}
            />
          </div>
          <div className="h-[46px] flex items-end pb-2">
            <span>
              <span className="pr-1">{t('周')} 12%</span>
              <ArrowUpOutlined className="text-red-500" />
            </span>
            <span className="pl-3">
              <span className="pr-1">{t('日')} 11%</span>
              <ArrowDownOutlined className="text-green-500" />
            </span>
          </div>
        </div>
        <div>
          <Divider className="my-2" />
          <Statistic
            value={1260}
            precision={2}
            prefix={t('日销售额') + ' ￥'}
            valueStyle={{ fontSize: '14px' }}
          />
        </div>
      </div>
    );
  };
  const CardTwo = () => {
    const options: ECOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: '{c0}'
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          show: false
        }
      ],
      yAxis: [
        {
          show: false
        }
      ],
      series: [
        {
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
            color: 'rgba(151, 60, 217, 1)'
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(151, 60, 217, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(151, 60, 217, 0.1)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 402, 231, 400, 190, 230, 300]
        }
      ]
    };
    return (
      <div className={boxClass}>
        <div>
          <div className="text-gray-500 flex items-center justify-between">
            <span>{t('访问量')}</span>
            <Tooltip title={t('指标说明')}>
              <InfoCircleOutlined />
            </Tooltip>
          </div>
          <div className="text-32 pt-4">
            <Statistic
              value={8650}
              formatter={(value: any) => formatter(value)}
            />
          </div>

          <Chart width="100%" height={46} options={options} />
        </div>
        <div>
          <Divider className="my-2" />
          <Statistic
            value={1234}
            prefix={t('日访问量')}
            valueStyle={{ fontSize: '14px' }}
          />
        </div>
      </div>
    );
  };
  const CardThree = () => {
    const options: ECOption = {
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: '{c0}'
      },
      xAxis: {
        type: 'category',
        show: false
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: false
        }
      ]
    };
    return (
      <div className={boxClass}>
        <div>
          <div className="text-gray-500 flex items-center justify-between">
            <span>{t('支付笔数')}</span>
            <Tooltip title={t('指标说明')}>
              <InfoCircleOutlined />
            </Tooltip>
          </div>
          <div className="text-32 pt-4">
            <Statistic
              value={6560}
              formatter={(value: any) => formatter(value)}
            />
          </div>

          <Chart width="100%" height={46} options={options} />
        </div>
        <div>
          <Divider className="my-2" />
          <Statistic
            value={30}
            prefix={t('转化率')}
            suffix="%"
            valueStyle={{ fontSize: '14px' }}
          />
        </div>
      </div>
    );
  };
  const CardFour = () => {
    return (
      <div className={boxClass}>
        <div>
          <div className="text-gray-500 flex items-center justify-between">
            <span>{t('运营活动效果')}</span>
            <Tooltip title={t('指标说明')}>
              <InfoCircleOutlined />
            </Tooltip>
          </div>
          <div className="text-32 pt-4">
            <Statistic
              value={78}
              suffix="%"
              formatter={(value: any) => formatter(value)}
            />
            <Progress percent={78} showInfo={false} />
          </div>
        </div>
        <div>
          <Divider className="my-2" />
          <div>
            <span>
              <span className="pr-1">{t('周')} 62%</span>
              <ArrowUpOutlined className="text-red-500" />
            </span>
            <span className="pl-3">
              <span className="pr-1">{t('日')} 71%</span>
              <ArrowDownOutlined className="text-green-500" />
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Row gutter={[16, 16]} className="mb-5">
      <Col xl={6} span={12}>
        <CardOne />
      </Col>
      <Col xl={6} span={12}>
        <CardTwo />
      </Col>
      <Col xl={6} span={12}>
        <CardThree />
      </Col>
      <Col xl={6} span={12}>
        <CardFour />
      </Col>
    </Row>
  );
}

export default TopCard;
