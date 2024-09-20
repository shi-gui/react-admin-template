import { TwitterOutlined } from '@ant-design/icons';
import type { Iprops } from '@/layout';
import rootStore from '@/store';
import { observer } from 'mobx-react';

const LayoutLogo = (props: Iprops) => {
  const { collapsed } = props;
  const { theme } = rootStore;

  return theme.sidebarLogo ? (
    <div className="flex items-center justify-center h-16 text-center gap-2">
      <TwitterOutlined style={{ fontSize: '30px', color: theme.primaryColor }} />

      <span
        className="text-2xl"
        style={{
          display: collapsed ? 'none' : 'block',
          color: theme.mode === 'dark' ? '#fff' : '#000'
        }}
      >
        Liuhua
      </span>
    </div>
  ) : null;
};

export default observer(LayoutLogo);
