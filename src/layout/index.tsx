import { useState } from 'react';
import { Layout } from 'antd';
import LayoutHeader from './components/Header';
import LayoutSider from './components/Sider';
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
      <Layout>
        <LayoutHeader
          collapsed={collapsed}
          setCollapsed={(val: boolean) => setCollapsed(val)}
        />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff'
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
