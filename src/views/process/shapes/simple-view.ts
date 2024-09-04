/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:31:19
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-04 10:10:10
 * @Description: 小地图
 *
 */
import { NodeView } from '@antv/x6';

export class SimpleNodeView extends NodeView {
  renderMarkup() {
    return this.renderJSONMarkup({
      tagName: 'rect',
      selector: 'body'
    });
  }

  update() {
    super.update({
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: '#3c80e6'
      }
    });
  }
}
