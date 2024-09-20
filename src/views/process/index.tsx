import { useRef, useEffect } from 'react';
import GraphMain from './shapes/index';
import './index.less';
import { data } from './constants/data';
import FlowTool from './components/FlowTool';

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
  }, []);

  // 缩放画布
  function handleZoom(value: number) {
    graphMain?.graph.zoomTo(value);
  }
  // 整理画布
  function handleTidy() {
    //销毁并从父节点中移除节点/边
    graphMain?.graph.dispose();
    graphMain?.createGraph(map.current, minMap.current, data);
  }
  return (
    <div className="graph-container">
      {/* 画布容器 */}
      <div id="map" ref={map} />

      {/* 小地图容器 */}
      <div id="min-map" ref={minMap} />

      {/* 工具栏组件 */}
      <FlowTool zoom={handleZoom} tidy={handleTidy} />
    </div>
  );
};

export default Process;
