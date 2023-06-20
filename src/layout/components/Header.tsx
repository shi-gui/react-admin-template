import {
  Layout,
  Button,
  Badge,
  Dropdown,
  Popover,
  Tabs,
  type MenuProps,
  type TabsProps
} from 'antd';
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
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const LayoutHeader = (props: Iprops) => {
  const { collapsed, setCollapsed } = props;
  const navigate = useNavigate();

  const MessageInfo = () => {
    const items: TabsProps['items'] = [
      {
        key: '1',
        label: `通知（4）`,
        children: (
          <div className="flex flex-col gap-2">
            <UserInfo />
            <UserInfo />
          </div>
        )
      },
      {
        key: '2',
        label: `消息（2）`,
        children: (
          <div>
            should be used in parent route elements to render their child route
            elements. This allows nested UI to show up when child routes are
            rendered. If the parent route matched exactly, it will render a
            child index route or nothing if there is no index route.
          </div>
        )
      },
      {
        key: '3',
        label: `待办（3）`,
        children: <div>xxx</div>
      }
    ];
    return (
      <div className="w-[340px]">
        <Tabs defaultActiveKey="1" items={items} className="mt-[-12px]" />
      </div>
    );
  };
  const UserInfo = () => {
    const items: MenuProps['items'] = [
      {
        key: '1',
        icon: <UserOutlined />,
        label: '个人中心',
        onClick: () => {
          navigate('/account/center');
        }
      },
      {
        key: '2',
        icon: <SettingOutlined />,
        label: '个人设置',
        onClick: () => {
          navigate('/account/settings');
        }
      },
      {
        type: 'divider'
      },
      {
        key: '3',
        icon: <PoweroffOutlined />,
        label: '退出登录',
        onClick: () => {
          navigate('/login');
        }
      }
    ];
    return (
      <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
        <div className="cursor-pointer">
          <img src={AvatarImg} className="w-8 h-8 mr-1" />
          <span>Admin User</span>
        </div>
      </Dropdown>
    );
  };
  const Language = () => {
    const items: MenuProps['items'] = [
      {
        key: '1',
        label: '简体中文',
        onClick: () => {}
      },
      {
        key: '2',
        label: '繁体中文',
        onClick: () => {}
      },
      {
        key: '3',
        label: 'English',
        onClick: () => {}
      },
      {
        key: '4',
        label: '日语',
        onClick: () => {}
      }
    ];
    return (
      <Dropdown menu={{ items }} placement="bottomLeft" trigger={['click']}>
        <div className="h-16">
          <FontSizeOutlined className="text-xl cursor-pointer" />
        </div>
      </Dropdown>
    );
  };

  return (
    <Header className="bg-white pl-0 pr-3 flex justify-between">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        className="!w-16 h-16"
        onClick={() => setCollapsed?.(!collapsed)}
      />
      <div className="flex items-center gap-10 px-2">
        <Popover content={MessageInfo} arrow={false} trigger="click">
          <div className="w-10 cursor-pointer">
            <Badge count={99} offset={[10, 0]} size="small">
              <BellOutlined className="text-xl" />
            </Badge>
          </div>
        </Popover>

        <UserInfo />
        <Language />
      </div>
    </Header>
  );
};

export default LayoutHeader;
