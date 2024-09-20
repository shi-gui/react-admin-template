/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:30:15
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-20 15:25:51
 * @Description: 事件系统
 *
 */

import { NODE_FILTER } from '../constants';
export default class Event {
  // 画布实例this
  graphInstance;

  constructor(graph) {
    this.graphInstance = graph;
  }

  /**
   * 初始化事件
   */
  initGraphEvent() {
    if (!this.graphInstance.graph) return;

    // 监听node 点击
    this.graphInstance.graph.on('node:click', e => {
      console.log('node节点点击事件', e);
    });
    // 监听node 鼠标进入
    this.graphInstance.graph.on('node:mouseenter', e => {
      this.highlightCurrentNode(e);
    });
    // 监听node 鼠标离开
    this.graphInstance.graph.on('node:mouseleave', e => {
      this.resetCurrentNode(e);
    });
  }

  /**
   * 高亮当前节点
   */
  highlightCurrentNode(e) {
    const { nodeType } = e.node.attrs;

    // 高亮节点边
    e.node.attr({
      body: { stroke: '#1D52D6' }
    });
    // 群组节点中的子节点不添加滤镜
    if (nodeType) {
      e.node.attr({
        body: { filter: NODE_FILTER.highlight }
      });
    }
  }

  /**
   * 重置当前节点状态
   */
  resetCurrentNode(e) {
    const { nodeType } = e.node.attrs;

    // 重置节点边
    e.node.attr({
      body: { stroke: '#8f8f8f' }
    });
    if (nodeType) {
      e.node.attr({
        body: { filter: NODE_FILTER.dropShadow }
      });
    }
  }
}
