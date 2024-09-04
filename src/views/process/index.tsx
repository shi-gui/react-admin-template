import { useRef } from 'react';
import { useEffect } from 'react';
import GraphMain from './shapes/index';
import './index.less';

const Process = () => {
  const map = useRef(null);
  const minMap = useRef(null);

  let graphMain;
  useEffect(() => {
    if (graphMain) return;

    graphMain = new GraphMain();
    if (map.current && minMap.current) {
      graphMain.createGraph(map.current, minMap.current);
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
