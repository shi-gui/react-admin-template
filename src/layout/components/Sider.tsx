import { Layout } from 'antd';
import LayoutLogo from './Logo';
import LayoutMenu from './Menu';
import type { Iprops } from '@/layout';

const { Sider } = Layout;
const LayoutSider = (props: Iprops) => {
  const { collapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <LayoutLogo collapsed={collapsed} />
      <LayoutMenu />
    </Sider>
  );
};

export default LayoutSider;
