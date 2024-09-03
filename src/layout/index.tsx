import { useState } from 'react';
import { Layout } from 'antd';
import LayoutHeader from './components/Header';
import LayoutSider from './components/Sider';
import LayoutTags from './components/Tags';
import LayoutTheme from './components/Theme';
import { Outlet } from 'react-router-dom';
export interface Iprops {
  collapsed: boolean;
  setCollapsed?: (val: boolean) => void;
}
const { Content } = Layout;
const LayoutMain = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="h-full">
      <LayoutSider collapsed={collapsed} />
      <Layout className={collapsed ? 'ml-[84px]' : 'ml-[200px]'}>
        <LayoutHeader
          collapsed={collapsed}
          setCollapsed={(val: boolean) => setCollapsed(val)}
        />
        <LayoutTags />
        <Content
          style={{
            margin: 0,
            padding: '16px',
            overflow: 'auto'
          }}
        >
          <Outlet />
        </Content>
        <LayoutTheme />
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
