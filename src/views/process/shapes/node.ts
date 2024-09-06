/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:30:45
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-06 16:54:45
 * @Description: 节点操作
 *
 */

import { NODE_SIZE, NODE_ICON, FILTER } from '../constants';
export default class Node {
  // 画布实例this
  graphInstance;

  constructor(graph) {
    this.graphInstance = graph;
  }
  /**
   * 创建开始节点
   */
  createStartNode(data) {
    const { startNodeWidth, startNodeHeight } = NODE_SIZE;
    const { id, position, nodeType } = data;
    // 生成画布节点信息
    const nodeInfo = {
      id,
      nodeType,
      width: startNodeWidth,
      height: startNodeHeight,
      x: position.x ?? 0,
      y: position.y ?? 0,
      // 我们可以通过 markup 和 attrs 来定制节点的形状和样式，markup 可以类比 HTML，attrs 类比 CSS
      markup: [
        {
          tagName: 'rect',
          selector: 'body'
        },
        {
          tagName: 'image',
          selector: 'img'
        },
        {
          tagName: 'text',
          selector: 'label'
        }
      ],
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          rx: startNodeHeight / 2,
          ry: startNodeHeight / 2,
          fill: '#f6f8fa',
          filter: FILTER.dropShadow
        },
        img: {
          'xlink:href': NODE_ICON.startNodeIcon,
          width: 24,
          height: 24,
          // 此处坐标是基于当前节点的
          x: 15,
          y: (startNodeHeight - 24) / 2
        },
        label: {
          fontSize: 16,
          fill: '#444',
          // 设置元素 x 坐标，目标 x 坐标相对于 ref 指代的元素的左上角 x 坐标
          refX: 45,
          refY: 0.5,
          // 水平
          textAnchor: 'start',
          // 垂直
          textVerticalAnchor: 'middle',
          text: data.nodeName,
          fontWeight: 600
        }
      }
    };

    // 将节点添加到画布上
    this.graphInstance.graph.addNode(nodeInfo);
  }

  /**
   * 创建中间节点
   */
  createMiddleNode(data) {
    console.log(data, 'xxxxxxxxxx');
  }

  /**
   * 创建结束节点
   */
  createEndNode(data) {
    console.log(data, 'xxxxxxxxxx');
  }
}
