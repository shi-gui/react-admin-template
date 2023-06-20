import { Menu, type MenuProps } from 'antd';
import { menuList } from '@/config/menuConfig';

const LayoutMenu = () => {
  const handleClick = () => {};
  // @ts-ignore
  const items: MenuProps['items'] = menuList;
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={items}
      onClick={handleClick}
    />
  );
};

export default LayoutMenu;
