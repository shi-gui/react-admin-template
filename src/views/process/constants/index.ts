/*
 * @Author: zhangshigui
 * @Date: 2024-08-30 17:30:13
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-20 15:26:02
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
  middleChildNodeDistance: 10,

  // 结束节点的宽高
  endNodeWidth: 100,
  endNodeHeight: 64
};

// 节点Icon图片配置
export const NODE_ICON = {
  // 开始节点图标
  startNodeIcon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png'
};

// 滤镜 https://x6.antv.antgroup.com/api/registry/filter#highlight
export const NODE_FILTER = {
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

// 链接桩配置
export const NODE_PORT = {
  // 链接桩组定义，可以定义多个
  groups: {
    // 进桩分组，分组名inPort
    inPort: {
      position: {
        name: 'absolute',
        args: { x: 0, y: 0 }
      },
      markup: [
        {
          tagName: 'rect',
          selector: 'rect'
        },
        {
          tagName: 'rect',
          selector: 'dot'
        }
      ],
      attrs: {
        rect: {
          magnet: true,
          stroke: '#D2CBC7',
          fill: '#fff',
          strokeWidth: 1,
          width: 12,
          height: 12,
          ry: 12,
          rx: 12,
          x: -6,
          y: -6
        },
        dot: {
          magnet: true,
          fill: '#D2CBC7',
          width: 8,
          height: 8,
          ry: 8,
          rx: 8,
          x: -4,
          y: -4
        }
      }
    },
    // 出桩分组，分组名outPort
    outPort: {
      position: {
        name: 'absolute',
        args: { x: 0, y: 0 }
      },
      markup: [
        {
          tagName: 'rect',
          selector: 'rect'
        },
        {
          tagName: 'rect',
          selector: 'dot'
        }
      ],
      attrs: {
        rect: {
          magnet: true,
          stroke: '#D2CBC7',
          fill: '#fff',
          strokeWidth: 1,
          width: 12,
          height: 12,
          ry: 12,
          rx: 12,
          x: -6,
          y: -6
        },
        dot: {
          magnet: true,
          fill: '#D2CBC7',
          width: 8,
          height: 8,
          ry: 8,
          rx: 8,
          x: -4,
          y: -4
        }
      }
    }
  },
  items: {
    // 节点左边的桩
    left: {
      // groups 中的分组名
      group: 'inPort',
      // 链接桩的 DOM 层级，值越大层级越高
      zIndex: 3,
      args: { x: 0, y: '50%' }
    },
    // 节点右边的桩
    right: {
      group: 'outPort',
      // 链接桩的 DOM 层级，值越大层级越高
      zIndex: 3,
      args: { x: '100%', y: '50%' }
    }
  }
};
