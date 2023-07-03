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
import { setLang, getLang } from '@/utils/store';
import { useTranslation } from 'react-i18next';
import { startTransition } from 'react';
import rootStore from '@/store';

const { Header } = Layout;

const LayoutHeader = (props: Iprops) => {
  const { collapsed, setCollapsed } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { removeAllTag } = rootStore;

  const MessageInfo = () => {
    const Content = () => {
      const items: TabsProps['items'] = [
        {
          key: '1',
          label: t('通知') + '(4)',
          children: (
            <div className="flex flex-col gap-2">
              <UserInfo />
              <UserInfo />
            </div>
          )
        },
        {
          key: '2',
          label: t('消息') + '（2）',
          children: (
            <div>
              should be used in parent route elements to render their child
              route elements. This allows nested UI to show up when child routes
              are rendered. If the parent route matched exactly, it will render
              a child index route or nothing if there is no index route.
            </div>
          )
        },
        {
          key: '3',
          label: t('待办') + '（3）',
          children: <div>xxx</div>
        }
      ];
      return (
        <div className="w-[340px]">
          <Tabs defaultActiveKey="1" items={items} className="mt-[-12px]" />
        </div>
      );
    };

    return (
      <Popover content={Content} arrow={false} trigger="click">
        <div className="w-10 cursor-pointer">
          <Badge count={99} offset={[10, 0]} size="small">
            <BellOutlined className="text-xl" />
          </Badge>
        </div>
      </Popover>
    );
  };
  const UserInfo = () => {
    const items: MenuProps['items'] = [
      {
        key: '1',
        icon: <UserOutlined />,
        label: t('个人中心'),
        onClick: () => {
          navigate('/account/center');
        }
      },
      {
        key: '2',
        icon: <SettingOutlined />,
        label: t('个人设置'),
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
        label: t('退出登录'),
        onClick: () => {
          startTransition(() => {
            removeAllTag();
            navigate('/login');
          });
        }
      }
    ];
    return (
      <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
        <div className="cursor-pointer flex items-center">
          <img src={AvatarImg} className="w-8 h-8 mr-1" />
          <span>Admin User</span>
        </div>
      </Dropdown>
    );
  };

  const LangInfo = () => {
    const Content = () => {
      const items = [
        {
          key: 'zhCN',
          label: '简体中文'
        },
        {
          key: 'zhHK',
          label: '繁体中文'
        },
        {
          key: 'enUS',
          label: 'English'
        },
        {
          key: 'jaJP',
          label: '日语'
        }
      ];
      const handleClick = (key: string) => {
        if (getLang() === key) return;

        setLang(key);
        window.location.reload();
      };
      return (
        <ul className="!mx-[-12px]">
          {items.map(item => (
            <li
              className={
                (getLang() === item.key ? '!text-blue-400 !bg-blue-50' : '') +
                ' cursor-pointer py-[5px] px-6 hover:bg-gray-50'
              }
              key={item.key}
              onClick={() => handleClick(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      );
    };

    return (
      <Popover content={Content} arrow={false} trigger="click">
        <div className="h-16">
          <FontSizeOutlined className="text-xl cursor-pointer" />
        </div>
      </Popover>
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
        <MessageInfo />
        <UserInfo />
        <LangInfo />
      </div>
    </Header>
  );
};

export default LayoutHeader;
