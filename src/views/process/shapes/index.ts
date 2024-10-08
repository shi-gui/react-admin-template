/*
 * @Author: zhangshigui
 * @Date: 2024-08-30 17:32:33
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-14 18:14:31
 * @Description: 入口文件
 *
 */

import { Graph } from '@antv/x6';
import { Scroller } from '@antv/x6-plugin-scroller';
import { MiniMap } from '@antv/x6-plugin-minimap';
import { SimpleNodeView } from './simple-view';
import { type NodeRes } from '../constants/data';
import { NODE_TYPE } from '../constants/index';
import Node from './node';
import Edge from './edge';
import Event from './event';

export default class GraphMain {
  // graph 画布实例
  graph: Graph | null;
  // Node 节点实例
  node;
  // edge 边实例
  edge;
  // event 事件实例
  event;

  constructor() {
    this.graph = null;
    this.node = new Node(this);
    this.edge = new Edge(this);
    this.event = new Event(this);
  }

  /**
   * 创建画布
   */
  createGraph(map: HTMLDivElement, minMap: HTMLDivElement, data) {
    // 初始化画布
    this.graph = new Graph({
      container: map,
      autoResize: true,
      background: {
        color: '#fff' // 设置画布背景颜色
      }
    });
    // 初始化滚动
    this.graph.use(
      new Scroller({
        enabled: true,
        pageVisible: false, // 是否分页
        pageBreak: false, // 是否显示分页符
        pannable: true, // 是否启用画布平移能力（在空白位置按下鼠标后拖动平移画布）
        padding: 0, // 设置画布四周的 padding 边距。
        pageWidth: 1200 // 每一页的宽度，默认为画布容器宽度
      })
    );
    // 初始化小地图
    this.graph.use(
      new MiniMap({
        container: minMap,
        width: 160,
        height: 90,
        padding: 0,
        scalable: false, // 是否可缩放
        graphOptions: {
          async: true, //异步
          createCellView(cell) {
            if (cell.isEdge()) return null;
            if (cell.isNode()) return SimpleNodeView;
          }
        }
      })
    );

    // 初始化节点
    this.initGraphNode(data);
    // 初始化边
    this.initGraphEdge(data);
    // 初始化事件
    this.event.initGraphEvent();
  }

  /**
   * 初始化节点
   */
  initGraphNode(list: NodeRes[]) {
    const { node } = this;
    list.forEach(item => {
      switch (item.nodeType) {
        // 开始节点
        case NODE_TYPE.START_NODE:
          node.createStartNode(item);
          break;
        // 中间节点
        case NODE_TYPE.MIDDLE_NODE:
          this.middleNodeType(item);
          break;
        // 结束节点
        case NODE_TYPE.END_NODE:
          node.createEndNode(item);
          break;
      }
    });
  }

  /**
   * 中间节点类型判断
   *  1、普通节点
   *  2、群组节点
   */
  middleNodeType(data) {
    const { node } = this;
    if (data.children?.length) {
      // 群组节点
      node.createMiddleGroupNode(data);
    } else {
      // 普通节点
      node.createMiddleNormalNode(data);
    }
  }

  /**
   * 初始化边
   */
  initGraphEdge(data) {
    const { edge } = this;
    const nodes = this.graph?.getNodes();

    data.forEach(item => {
      if (item.children?.length) {
        // 群组节点
        const parentNode = nodes?.find(node => node.id === item.id);
        // 获取当前节点下的所有子节点
        const childNodes = parentNode?.getChildren() || [];
        item.children.forEach((child, index) => {
          const targetNode = nodes?.find(node => node.id === child.skipNodeId);
          const sourceNode = childNodes[index];

          targetNode && edge.createEdge(sourceNode, targetNode);
        });
      } else {
        // 普通节点
        const sourceNode = nodes?.find(node => node.id === item.id);
        const targetNode = nodes?.find(node => node.id === item.skipNodeId);

        targetNode && edge.createEdge(sourceNode, targetNode);
      }
    });
  }
}
