/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:55:48
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-09 16:38:25
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
    nodeName: '基本流程',
    nodeType: 0,
    skipNodeId: '2',
    position: {
      x: 50,
      y: 300
    }
  },
  {
    id: '2',
    nodeName: '确认用户信息',
    nodeType: 1,
    skipNodeId: '3',
    position: {
      x: 298, // 节点之间间隔120，自己算一下
      y: 300
    }
  },
  {
    id: '3',
    nodeName: '是否是大会员',
    nodeType: 1,
    skipNodeId: '4',
    position: {
      x: 632,
      y: 300
    },
    children: [
      { id: '4', nodeName: '是大会员' },
      { id: '5', nodeName: '不是大会员' }
    ]
  }
];
