/*
 * @Author: zhangshigui
 * @Date: 2024-09-20 17:31:33
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-20 17:44:53
 * @Description: 元素拖拽
 *
 */

export function useDrag(el) {
  el.style.cursor = 'move';
  el.style.position = 'absolute';
  el.onmousedown = function (e) {
    const disx = e.pageX - el.offsetLeft;
    const disy = e.pageY - el.offsetTop;
    document.onmousemove = function (e) {
      let x = e.pageX - disx;
      let y = e.pageY - disy;
      const maxX = parseInt(window.getComputedStyle(el.parentNode).width) - parseInt(window.getComputedStyle(el).width);
      const maxY =
        parseInt(window.getComputedStyle(el.parentNode).height) - parseInt(window.getComputedStyle(el).height);
      if (x < 0) {
        x = 0;
      } else if (x > maxX) {
        x = maxX;
      }

      if (y < 0) {
        y = 0;
      } else if (y > maxY) {
        y = maxY;
      }
      el.style.left = x + 'px';
      el.style.top = y + 'px';
    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
  };
}
