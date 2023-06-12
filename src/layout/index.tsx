import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  headerMenuItems,
  personListItems,
  allRoutesMenu
} from './baseMenuData';
import style from '@/style/Layout.module.less';

// 自定义类型守卫
function hasObjKey(obj: any[], key: string): key is keyof typeof allRoutesMenu {
  if (
    Object.keys(obj).some(v => {
      return v === key;
    })
  ) {
    return typeof key === typeof allRoutesMenu;
  } else {
    return false;
  }
}
type GetParams<T> = T extends (a: infer U, ...args: infer Rest) => unknown
  ? U
  : never;
const Home: React.FC = () => {
  const navigate = useNavigate();
  // theme
  const [theme, setTheme] = useState('dark');
  // 头部菜单key
  const [current, setCurrent] = useState<keyof typeof allRoutesMenu>('base');
  // 侧边菜单
  const [asideItems, setAsideItems] = useState<MenuProps['items']>(
    allRoutesMenu[current]
  );
  // 侧边菜单key
  const [asideCurrent, setAsideCurrent] = useState('base');
  // 头部菜单点击
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key as keyof typeof allRoutesMenu);
    setAsideItems(allRoutesMenu[e.key as keyof typeof allRoutesMenu]);
    setAsideCurrent('');
  };
  // 侧边菜单点击
  const onClickAside: MenuProps['onClick'] = e => {
    setAsideCurrent(e.key);
    navigate(`${current}/${e.key}`);
  };
  // 进入页面指定菜单的选择 S
  const location = useLocation();
  // 进入页面指定菜单的选择
  useEffect(() => {
    if (location.pathname.length > 1) {
      const pathNameArr = location.pathname
        .split('/')
        .filter((v, i) => i !== 0);
      const headerMenuTab = pathNameArr[0];
      if (hasObjKey(headerMenuItems, headerMenuTab)) {
        onClick(
          allRoutesMenu[headerMenuTab] as unknown as GetParams<
            MenuProps['onClick']
          >
        );
        setAsideCurrent(pathNameArr[1]);
      }
    }
  }, []);
  // 进入页面指定菜单的选择 E

  // 个人信息菜单
  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
  };
  const menuProps = {
    personListItems,
    onClick: handleMenuClick
  };

  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className={style.logo}>YANG</div>
      <header>
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={headerMenuItems}
        />
        <div className={style.personDropdown}>
          <Dropdown.Button
            menu={menuProps}
            placement="bottom"
            icon={<UserOutlined />}
          >
            杨杰
          </Dropdown.Button>
        </div>
      </header>
      <aside>
        <Menu
          theme="dark"
          onClick={onClickAside}
          selectedKeys={[asideCurrent]}
          mode="inline"
          items={asideItems}
        />
      </aside>
      <main>
        <div className={style.content}>
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};

export default Home;
