/*
 * @Author: zhangshigui
 * @Date: 2024-08-30 17:30:13
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-09 18:32:07
 * @Description: 基础配置信息
 *
 */

// 节点类型
export const NODE_TYPE = {
  // 开始节点
  START_NODE: 0,
  // 中间节点
  MIDDLE_NODE: 1,
  // 结束节点
  END_NODE: 2
};

// 节点尺寸
export const NODE_SIZE = {
  // 开始节点宽高
  startNodeWidth: 128,
  startNodeHeight: 64,

  // 中间节点宽高
  middleNodeWidth: 214,
  middleNodeHeight: 64,
  // 中间节点的子节点宽高
  middleChildNodeWidth: 180,
  middleChildNodeHeight: 32,
  // 中间节点的子节点上下间隔
  middleChildNodeDistance: 10
};

// 节点Icon图片配置
export const NODE_ICON = {
  // 开始节点图标
  startNodeIcon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png'
};

// 滤镜 https://x6.antv.antgroup.com/api/registry/filter#highlight
export const FILTER = {
  // 💭 阴影滤镜 —— 默认显示
  dropShadow: {
    name: 'dropShadow',
    args: {
      color: '#000',
      dx: 0, // 阴影在 X 轴的偏移量
      dy: 2, // 阴影在 Y 轴的偏移量
      blur: 3, // 阴影的模糊半径
      opacity: 0.12 // 阴影的透明度
    }
  },
  // ✨ 高亮滤镜 —— 节点高亮
  highlight: {
    name: 'highlight',
    args: {
      color: '#000',
      width: 4,
      blur: 1,
      opacity: 0.08
    }
  }
};
