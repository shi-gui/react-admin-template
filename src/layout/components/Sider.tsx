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
    <Sider trigger={null} collapsible collapsed={collapsed} theme={theme.mode}>
      <LayoutLogo collapsed={collapsed} />
      <LayoutMenu />
    </Sider>
  );
};

export default observer(LayoutSider);
