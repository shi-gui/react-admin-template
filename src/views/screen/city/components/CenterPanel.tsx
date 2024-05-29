import Chart from '@/components/chart';
import { MapOption } from '../chartConfig';

export const CenterPanel = () => {
  return (
    <div className="map-box w-[40%]">
      <div className="map-box-top">
        <div className="value">
          <p className="flex-1 text-center">12581189</p>
          <div className="divider" />
          <p className="flex-1 text-center">3912410</p>
        </div>
        <div className="label">
          <p className="flex-1 text-center">2024年总收入情况</p>
          <p className="flex-1 text-center">2024年预计收入情况</p>
        </div>
      </div>

      <div className="map-box-bottom">
        <Chart height="700px" width="100%" options={MapOption()} />;
      </div>
    </div>
  );
};

export default CenterPanel;
