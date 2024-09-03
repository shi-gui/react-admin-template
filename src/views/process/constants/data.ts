/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:55:48
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-04 00:56:04
 * @Description: 假数据
 *
 */

export const data = {
  // 节点
  nodes: [
    {
      id: 'node1',
      x: 40,
      y: 40,
      width: 80,
      height: 40,
      label: 'hello'
    },
    {
      id: 'node2',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'world'
    }
  ],
  // 边
  edges: [
    {
      source: 'node1',
      target: 'node2'
    }
  ]
};
