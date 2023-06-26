import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, type MenuProps } from 'antd';
import { menuList, type MenuItem, type IconType } from '@/config/menu';
import * as Icons from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const LayoutMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { t } = useTranslation();
  /**
   *
   * @param param
   * @returns 动态创建antd图标
   */
  const IconComponent = ({ iconName }: { iconName: IconType }) => {
    const Component = Icons[iconName] as React.ElementType;
    if (!Component) {
      return null;
    }
    return <Component />;
  };

  /**
   *
   * @param menuList
   * @param parentId
   * @returns 将平级的数组转换成菜单树
   */
  const convertTreeMenu = (
    menuList: MenuItem[],
    parentId: string | null = null
  ) => {
    const tree: MenuProps['items'] = [];
    menuList.forEach(item => {
      if (item.parentId === parentId) {
        const child = convertTreeMenu(menuList, item.id);
        const node = {
          key: item.id,
          label: t(item.title),
          icon: item.icon ? <IconComponent iconName={item.icon} /> : null,
          roles: ['admin', 'test'],
          children: child?.length ? child : null
        };
        tree.push(node);
      }
    });
    return tree;
  };
  const items: MenuProps['items'] = convertTreeMenu(menuList);

  /**
   * @returns 通过path获取当前选中的菜单id
   */
  function getselectedKeys() {
    const id = menuList.find(item => item.path === path)?.id;

    return [id || ''];
  }
  /**
   * @returns 获取当前选中菜单的父id集合
   */
  function getDefaultOpenKeys() {
    const keys: string[] = [];

    const id = menuList.find(item => item.path === path)?.id || '';
    if (!id) return;

    const mapMenu = (menuList: MenuItem[], id: string) => {
      menuList.forEach(item => {
        if (item.id === id && item.parentId) {
          keys.push(item.parentId);
          mapMenu(menuList, item.parentId);
        }
      });
    };
    mapMenu(menuList, id);

    return keys;
  }

  const handleClick = ({ key }: { key: string }) => {
    const path = menuList.find(item => item.id === key)?.path;
    path && navigate(path);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      defaultOpenKeys={getDefaultOpenKeys()}
      selectedKeys={getselectedKeys()}
      onClick={handleClick}
    />
  );
};

export default LayoutMenu;
