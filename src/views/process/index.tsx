import { useRef } from 'react';
import { useEffect } from 'react';
import GraphMain from './shapes/index';
import './index.less';
import { data } from './constants/data';

const Process = () => {
  const map = useRef(null);
  const minMap = useRef(null);

  let graphMain;
  useEffect(() => {
    if (graphMain) return;

    graphMain = new GraphMain();
    if (map.current && minMap.current) {
      // 初始化
      graphMain.createGraph(map.current, minMap.current, data);
    }
  });
  return (
    <div className="graph-container">
      {/* 画布容器 */}
      <div id="map" ref={map} />

      {/* 小地图容器 */}
      <div id="min-map" ref={minMap} />
    </div>
  );
};

export default Process;
