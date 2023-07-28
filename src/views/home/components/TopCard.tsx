import { Col, Row, Tooltip, Divider, Statistic } from 'antd';
import CountUp from 'react-countup';
import {
  InfoCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

function TopCard() {
  const { t } = useTranslation();

  const boxClass = 'bg-white h-[180px] p-4 flex flex-col justify-between';
  const formatter = (value: number, decimals = 0) => (
    <CountUp end={value} decimals={decimals} separator="," />
  );

  return (
    <Row gutter={[16, 16]}>
      <Col xl={6} span={12}>
        <div className={boxClass}>
          <div>
            <div className="text-gray-500 flex items-center justify-between">
              <span>{t('总销售额')}</span>
              <Tooltip title={t('指标说明')}>
                <InfoCircleOutlined />
              </Tooltip>
            </div>
            <div className="text-32 py-5">
              <Statistic
                value={112893}
                prefix="￥"
                formatter={(value: any) => formatter(value, 2)}
              />
            </div>
            <div>
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
      </Col>

      <Col xl={6} span={12}>
        <div className={boxClass}>
          <div></div>

          <div>
            <Divider className="my-2" />
            <span>日访问量 6478</span>
          </div>
        </div>
      </Col>

      <Col xl={6} span={12}>
        <div className={boxClass}>
          <div></div>

          <div>
            <Divider className="my-2" />
            <span>转化率 60%</span>
          </div>
        </div>
      </Col>

      <Col xl={6} span={12}>
        <div className={boxClass}>
          <div></div>

          <div>
            <Divider className="my-2" />
            <span>周同比12%</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default TopCard;
