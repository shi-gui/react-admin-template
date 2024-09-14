/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:29:39
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-14 17:05:30
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
    // console.log(source, 'xxxxx');
    // const sourcePorts = source.port.ports.find(port => port.group === 'group1');
    // const targetPorts = target.port.ports.find(port => port.group === 'group1');
    this.graphInstance.graph.addEdge({
      source: {
        cell: source
      },
      target: {
        cell: target
      },
      attrs: {
        // 修改线条颜色
        line: {
          stroke: '#d9d9d9'
        }
      }
    });
  }
}
