/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:55:48
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-06 16:49:46
 * @Description: 节点数据
 *
 */
export interface NodeRes {
  id: string; // 节点id
  nodeName: string; // 节点名字
  nodeType: number; // 节点类型
  skipNodeId: string; // 跳转的节点id
  position: { x: number; y: number }; // 节点位置信息
}

export const data = [
  {
    id: '1',
    nodeName: '基本信息',
    nodeType: 0,
    skipNodeId: '2',
    position: {
      x: 50,
      y: 50
    }
  }
];
