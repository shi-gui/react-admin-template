import Chart from '@/components/chart';
import {
  EquipmentUseTimeOption,
  EquipmentUseAreaOption,
  CityPeopleOption
} from '../chartConfig';

const RightPanel = () => {
  return (
    <div className="w-[30%]">
      <div className="chart-box">
        <div className="chart-box-title">设备使用时间分布</div>
        <div className="chart-box-content">
          <Chart width="100%" height="260px" options={EquipmentUseTimeOption} />
        </div>
        <div className="chart-box-suffix" />
      </div>
      <div className="chart-box">
        <div className="chart-box-title">设备使用地区分布</div>
        <div className="chart-box-content">
          <Chart width="100%" height="260px" options={EquipmentUseAreaOption} />
        </div>
        <div className="chart-box-suffix" />
      </div>
      <div className="chart-box">
        <div className="chart-box-title">城市人口分布</div>
        <div className="chart-box-content">
          <Chart width="100%" height="260px" options={CityPeopleOption} />
        </div>
        <div className="chart-box-suffix" />
      </div>
    </div>
  );
};

export default RightPanel;
