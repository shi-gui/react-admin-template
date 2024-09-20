import Chart from '@/components/chart';
import { IndustryRankOption, RegionalSalesOption, AgeDistributionOption } from '../chartConfig';

const LeftPanel = () => {
  return (
    <div className="w-[30%]">
      <div className="chart-box">
        <div className="chart-box-title">行业销售额排行</div>
        <div className="chart-box-content">
          <Chart width="100%" height="260px" options={IndustryRankOption} />;
        </div>
        <div className="chart-box-suffix" />
      </div>
      <div className="chart-box">
        <div className="chart-box-title">地区销售额</div>
        <div className="chart-box-content">
          <Chart width="100%" height="260px" options={RegionalSalesOption} />;
        </div>
        <div className="chart-box-suffix" />
      </div>
      <div className="chart-box">
        <div className="chart-box-title">城市年龄分布</div>
        <div className="chart-box-content">
          <Chart width="100%" height="260px" options={AgeDistributionOption} />
        </div>
        <div className="chart-box-suffix" />
      </div>
    </div>
  );
};

export default LeftPanel;
