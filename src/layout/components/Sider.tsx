import { Layout } from 'antd';
import LayoutLogo from './Logo';
import LayoutMenu from './Menu';
import type { Iprops } from '@/layout';
import rootStore from '@/store';
import { observer } from 'mobx-react';

const { Sider } = Layout;
const LayoutSider = (props: Iprops) => {
  const { collapsed } = props;
  const { theme } = rootStore;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme={theme.mode}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        zIndex: 999,
        left: 0,
        top: 0,
        bottom: 0
      }}
    >
      <LayoutLogo collapsed={collapsed} />
      <LayoutMenu />
    </Sider>
  );
};

export default observer(LayoutSider);
