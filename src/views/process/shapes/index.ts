/*
 * @Author: zhangshigui
 * @Date: 2024-08-30 17:32:33
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-04 17:15:28
 * @Description: 入口文件
 *
 */

import { Graph } from '@antv/x6';
import { Scroller } from '@antv/x6-plugin-scroller';
import { MiniMap } from '@antv/x6-plugin-minimap';
import { SimpleNodeView } from './simple-view';

export default class GraphMain {
  graph: Graph | null; // 画布实例

  constructor() {
    this.graph = null;
  }

  /**
   * 创建画布
   */
  createGraph(map: HTMLDivElement, minMap: HTMLDivElement) {
    // 画布初始化
    this.graph = new Graph({
      container: map,
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
        pageWidth: 1500 // 每一页的宽度，默认为画布容器宽度
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
  }

  /**
   * 初始化节点
   */
  initGraphNode() {}

  /**
   * 初始化边
   */
  initGraphEdge() {}
}
