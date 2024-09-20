/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:34:01
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-20 18:13:55
 * @Description: 工具栏组件
 *
 */
import { useState, useRef, useEffect } from 'react';
import { Tooltip } from 'antd';
import { HolderOutlined, MinusOutlined, ReloadOutlined, PlusOutlined, BranchesOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useDrag } from '@/hooks/useDrag';

export interface Iprops {
  zoom: (val: number) => void;
  tidy: () => void;
}
const FlowTool = (props: Iprops) => {
  const { t } = useTranslation();
  const { zoom, tidy } = props;

  const [percent, Setpercent] = useState<number>(100);
  // 最小|最大缩放比例
  const [minPercent, maxPercent] = [20, 180];
  // 缩放
  const handleZoom = (value?: number) => {
    let currentPercent: number;
    if (!value) {
      currentPercent = 100;
    } else {
      if (value < 0 && percent <= minPercent) return;
      if (value > 0 && percent >= maxPercent) return;
      currentPercent = percent + value;
      Setpercent(percent + value);
    }
    Setpercent(currentPercent);
    zoom(currentPercent / 100);
  };

  // 拖拽
  const tool = useRef(null);
  useEffect(() => {
    useDrag(tool.current);

    // 其他四个功能按钮不允许拖拽
    const doms = Array.from(document.getElementsByClassName('no-drag'));
    doms.forEach(dom => {
      if (!dom) return;

      // @ts-ignore
      dom.onmousedown = function (e) {
        e.stopPropagation();
      };
    });
  }, []);

  return (
    <div id="flow-tool" ref={tool}>
      <Tooltip title={t('拖拽')}>
        <HolderOutlined />
      </Tooltip>
      <Tooltip title={t('缩小')}>
        <MinusOutlined
          className={'no-drag' + ' ' + (percent <= minPercent ? 'disabled' : '')}
          onClick={() => handleZoom(-20)}
        />
      </Tooltip>
      <Tooltip title={t('原始大小')}>
        <ReloadOutlined className="no-drag" onClick={() => handleZoom()} />
      </Tooltip>
      <Tooltip title={t('放大')}>
        <PlusOutlined
          className={'no-drag' + ' ' + (percent >= maxPercent ? 'disabled' : '')}
          onClick={() => handleZoom(20)}
        />
      </Tooltip>
      <Tooltip title={t('整理画布')}>
        <BranchesOutlined className="no-drag" onClick={() => tidy()} />
      </Tooltip>
    </div>
  );
};

export default FlowTool;
