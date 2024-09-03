import { Graph } from '@antv/x6';
import { useRef } from 'react';
import { useEffect } from 'react';
import { data } from './constants/data';

const Process = () => {
  const container = useRef(null);
  useEffect(() => {
    if (container.current) {
      const graph = new Graph({
        container: container.current,
        width: 800,
        height: 600,
        background: {
          color: '#F2F7FA'
        }
      });

      graph.fromJSON(data);
    }
  });
  return (
    <div>
      <div ref={container} />
    </div>
  );
};

export default Process;
