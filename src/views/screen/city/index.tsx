import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import CenterPanel from './components/CenterPanel';
import RightPanel from './components/RightPanel';
import './index.less';

const ScreenCity = () => {
  return (
    <div className="screen-city">
      <div className="screen-city-header">
        <Header />
      </div>
      <div className="screen-city-content">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default ScreenCity;
