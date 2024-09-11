/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:30:45
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-11 16:27:03
 * @Description: 节点操作
 *
 */

import { NODE_SIZE, NODE_ICON, NODE_FILTER, NODE_PORT } from '../constants';
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
          filter: NODE_FILTER.dropShadow
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
      },
      // 连接桩
      ports: {
        groups: {
          group1: NODE_PORT.groups.group1
        },
        items: [NODE_PORT.items.right]
      }
    };

    // 将节点添加到画布上
    this.graphInstance.graph.addNode(nodeInfo);
  }

  /**
   * 创建中间节点👉普通节点
   */
  createMiddleNormalNode(data) {
    const { middleNodeWidth, middleNodeHeight } = NODE_SIZE;
    const { id, position, nodeType } = data;
    // 生成画布节点信息
    const nodeInfo = {
      id,
      nodeType,
      width: middleNodeWidth,
      height: middleNodeHeight,
      x: position.x ?? 0,
      y: position.y ?? 0,
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#f6f8fa',
          rx: 4,
          ry: 4,
          filter: NODE_FILTER.dropShadow
        },
        label: {
          fontSize: 16,
          fill: '#444',
          // 水平
          textAnchor: 'middle',
          // 垂直
          textVerticalAnchor: 'middle',
          text: data.nodeName,
          fontWeight: 600
        }
      },
      ports: {
        groups: {
          group1: NODE_PORT.groups.group1
        },
        items: [NODE_PORT.items.left, NODE_PORT.items.right]
      }
    };

    // 将节点添加到画布上
    this.graphInstance.graph.addNode(nodeInfo);
  }
  /**
   * 创建中间节点👉群组节点
   */
  createMiddleGroupNode(data) {
    const { middleNodeWidth, middleNodeHeight, middleChildNodeHeight, middleChildNodeDistance } = NODE_SIZE;
    const { id, position, nodeType } = data;
    // 高度计算
    const len = data.children.length;
    const height = middleNodeHeight + len * (middleChildNodeHeight + middleChildNodeDistance);
    // 生成画布节点信息
    const nodeInfo = {
      id,
      nodeType,
      width: middleNodeWidth,
      height: height,
      x: position.x ?? 0,
      y: position.y ?? 0,
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#f6f8fa',
          rx: 4,
          ry: 4,
          filter: NODE_FILTER.dropShadow
        },
        label: {
          text: data.nodeName,
          textAnchor: 'start',
          refY: 32,
          refX: 20,
          fontSize: 16,
          fill: '#444',
          fontWeight: 600,
          lineHeight: 22
        }
      },
      ports: {
        groups: {
          group1: NODE_PORT.groups.group1
        },
        items: [NODE_PORT.items.left]
      }
    };

    // 将节点添加到画布上
    const parentNode = this.graphInstance.graph.addNode(nodeInfo);
    // 创建子节点并将其添加到中间节点中
    this.createMiddleGroupChildNode(parentNode, data, position);
  }
  /**
   * 创建中间节点👉群组节点👉下面的子节点
   */
  createMiddleGroupChildNode(parentNode, data, position) {
    const { middleNodeWidth, middleNodeHeight, middleChildNodeWidth, middleChildNodeHeight, middleChildNodeDistance } =
      NODE_SIZE;
    data.children.forEach((child, index) => {
      // 子节点坐标计算
      const x = position.x + (middleNodeWidth - middleChildNodeWidth) / 2;
      const y = position.y + middleNodeHeight + (middleChildNodeHeight + middleChildNodeDistance - 2) * index;
      // 生成画布节点信息
      const nodeInfo = {
        width: middleChildNodeWidth,
        height: middleChildNodeHeight,
        x,
        y,
        attrs: {
          body: {
            stroke: '#ccc',
            rx: 0,
            ry: 0,
            strokeWidth: 1
          },
          label: {
            textAnchor: 'start',
            fontSize: 14,
            refX: 15,
            fill: '#5f5f5f',
            lineHeight: 18,
            text: child.nodeName
          }
        },
        ports: {
          groups: {
            group1: NODE_PORT.groups.group1
          },
          items: [NODE_PORT.items.right]
        }
      };

      const childNode = this.graphInstance.graph.addNode(nodeInfo);
      parentNode.addChild(childNode);
    });
  }

  /**
   * 创建结束节点
   */
  createEndNode(data) {
    const { endNodeWidth, endNodeHeight } = NODE_SIZE;
    const { id, position, nodeType } = data;

    // 生成画布节点信息
    const nodeInfo = {
      id,
      nodeType,
      width: endNodeWidth,
      height: endNodeHeight,
      x: position.x ?? 0,
      y: position.y ?? 0,
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          rx: endNodeWidth / 2,
          ry: endNodeHeight / 2,
          fill: '#f6f8fa',
          filter: NODE_FILTER.dropShadow
        },
        label: {
          fontSize: 16,
          fill: '#444',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          text: data.nodeName,
          fontWeight: 600
        }
      },
      ports: {
        groups: {
          group1: NODE_PORT.groups.group1
        },
        items: [NODE_PORT.items.left]
      }
    };

    // 将节点添加到画布上
    this.graphInstance.graph.addNode(nodeInfo);
  }
}
