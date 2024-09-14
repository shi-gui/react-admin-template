/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:29:39
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-14 18:00:26
 * @Description: 边操作
 *
 */

export default class Edge {
  // 画布实例this
  graphInstance;

  constructor(graph) {
    this.graphInstance = graph;
  }

  // 创建边（连线）
  createEdge(source, target) {
    const sourcePorts = source.port.ports.find(port => port.group === 'outPort');
    const targetPorts = target.port.ports.find(port => port.group === 'inPort');

    this.graphInstance.graph.addEdge({
      source: {
        cell: source,
        port: sourcePorts?.id
      },
      target: {
        cell: target,
        port: targetPorts?.id
      },
      attrs: {
        id: `${source.id} ${target.id}`,
        // 修改线条颜色
        line: {
          stroke: '#d9d9d9'
        }
      }
    });
  }
}
