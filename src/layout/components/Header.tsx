import { Layout, Button, Badge, Dropdown, type MenuProps } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FontSizeOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import type { Iprops } from '@/layout';
import AvatarImg from '@/assets/img/avatar.png';

const { Header } = Layout;

const LayoutHeader = (props: Iprops) => {
  const { collapsed, setCollapsed } = props;
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: '个人中心'
    },
    {
      key: '2',
      icon: <SettingOutlined />,
      label: '个人设置'
    },
    {
      key: '3',
      icon: <PoweroffOutlined />,
      label: '退出登录'
    }
  ];

  return (
    <Header className="bg-white pl-0 pr-3 flex justify-between">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        className="!w-16 h-16"
        onClick={() => setCollapsed?.(!collapsed)}
      />
      <div className="flex items-center gap-10 px-2">
        <Badge count={99} offset={[10, 0]} size="small">
          <BellOutlined className="text-xl cursor-pointer" />
        </Badge>
        <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
          <div className="cursor-pointer">
            <img src={AvatarImg} className="w-8 h-8 mr-1" />
            <span>Admin User</span>
          </div>
        </Dropdown>
        <FontSizeOutlined className="text-xl cursor-pointer" />
      </div>
    </Header>
  );
};

export default LayoutHeader;
