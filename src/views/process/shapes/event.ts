/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:30:15
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-14 18:25:55
 * @Description: 事件系统
 *
 */

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
      console.log('node节点鼠标进入事件', e);
    });
    // 监听node 鼠标离开
    this.graphInstance.graph.on('node:mouseleave', e => {
      console.log('node节点鼠标离开事件', e);
    });
  }
}
