/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:55:48
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-14 15:52:44
 * @Description: 节点数据
 *
 */
export interface NodeRes {
  id: string; // 节点id
  nodeName: string; // 节点名字
  nodeType: number; // 节点类型
  skipNodeId: string; // 跳转的节点id
  position: { x: number; y: number }; // 节点位置信息
  children?: Array<{ id: string; nodeName: string; skipNodeId: string }>;
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
    position: {
      x: 632,
      y: 300
    },
    children: [
      { id: '4', nodeName: '是大会员', skipNodeId: '6' },
      { id: '5', nodeName: '不是大会员', skipNodeId: '9' }
    ]
  },
  {
    id: '6',
    nodeName: '是否申请访问',
    nodeType: 1,
    position: {
      x: 966,
      y: 160
    },
    children: [
      { id: '7', nodeName: '申请访问', skipNodeId: '10' },
      { id: '8', nodeName: '不申请访问', skipNodeId: '13' }
    ]
  },
  {
    id: '9',
    nodeName: '无权访问',
    nodeType: 1,
    skipNodeId: '14',
    position: {
      x: 966,
      y: 500
    }
  },
  {
    id: '10',
    nodeName: '是否通过',
    nodeType: 1,
    position: {
      x: 1300,
      y: 100
    },
    children: [
      { id: '11', nodeName: '通过', skipNodeId: '15' },
      { id: '12', nodeName: '不通过', skipNodeId: '16' }
    ]
  },
  {
    id: '13',
    nodeName: '结束',
    nodeType: 2,
    position: {
      x: 1300,
      y: 300
    }
  },
  {
    id: '14',
    nodeName: '结束',
    nodeType: 2,
    position: {
      x: 1300,
      y: 500
    }
  },
  {
    id: '15',
    nodeName: '结束',
    nodeType: 2,
    position: {
      x: 1634,
      y: 80
    }
  },
  {
    id: '16',
    nodeName: '结束',
    nodeType: 2,
    position: {
      x: 1634,
      y: 250
    }
  }
];
