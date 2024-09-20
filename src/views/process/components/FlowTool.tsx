/*
 * @Author: zhangshigui
 * @Date: 2024-09-04 00:34:01
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-09-20 16:47:37
 * @Description: 工具栏组件
 *
 */
import { useState } from 'react';
import { Tooltip } from 'antd';
import { HolderOutlined, MinusOutlined, ReloadOutlined, PlusOutlined, BranchesOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

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

  return (
    <div id="flow-tool">
      <Tooltip title={t('拖拽')}>
        <HolderOutlined />
      </Tooltip>
      <Tooltip title={t('缩小')}>
        <MinusOutlined className={percent <= minPercent ? 'disabled' : ''} onClick={() => handleZoom(-20)} />
      </Tooltip>
      <Tooltip title={t('原始大小')}>
        <ReloadOutlined onClick={() => handleZoom()} />
      </Tooltip>
      <Tooltip title={t('放大')}>
        <PlusOutlined className={percent >= maxPercent ? 'disabled' : ''} onClick={() => handleZoom(20)} />
      </Tooltip>
      <Tooltip title={t('整理画布')}>
        <BranchesOutlined onClick={() => tidy()} />
      </Tooltip>
    </div>
  );
};

export default FlowTool;
