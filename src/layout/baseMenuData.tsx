import React from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
type FilterUndefind<T> = T extends undefined ? never : T;
// 头部菜单
export const headerMenuItems: FilterUndefind<MenuProps['items']> = [
  {
    label: '基座 Home',
    key: 'base',
    icon: <MailOutlined />
  },
  {
    label: 'React 子应用',
    key: 'c-react',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Vue 子应用',
    key: 'c-vue',
    icon: <SettingOutlined />
  },
  {
    label: 'threeJs学习',
    key: 'threejs',
    icon: <SettingOutlined />
  }
];
// 个人信息菜单
export const personListItems: FilterUndefind<MenuProps['items']> = [
  {
    label: '我的',
    key: '1',
    icon: <UserOutlined />
  },
  {
    label: '退出',
    key: '1',
    icon: <LogoutOutlined />
  }
];
export const allRoutesMenu = {
  base: [
    {
      label: '首页',
      key: 'homePage',
      icon: <UserOutlined />
    },
    {
      label: '菜单二号',
      key: 'menuTwo',
      icon: <UserOutlined />
    }
  ],
  'c-react': [
    {
      label: '菜单一号',
      key: 'menuOne',
      icon: <UserOutlined />
    },
    {
      label: '菜单二号',
      key: 'menuTwo',
      icon: <UserOutlined />
    }
  ],
  'c-vue': [
    {
      label: '菜单一号',
      key: 'menuOne',
      icon: <UserOutlined />
    },
    {
      label: '菜单二号',
      key: 'menuTwo',
      icon: <UserOutlined />
    }
  ],
  threejs: [
    {
      label: '1.基础',
      key: 'threejsOne',
      icon: <UserOutlined />
    },
    {
      label: '2.基础',
      key: 'threejsTwo',
      icon: <UserOutlined />
    }
  ]
};
