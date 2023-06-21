import { useNavigate } from 'react-router-dom';
import { Menu, type MenuProps } from 'antd';
import { menuList, type MenuItem, type IconType } from '@/config/menu';
import * as Icons from '@ant-design/icons';

const LayoutMenu = () => {
  const navigate = useNavigate();
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
          label: item.title,
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

  const handleClick = ({ key }: { key: string }) => {
    const path = menuList.find(item => item.id === key)?.path;
    path && navigate(path);
  };

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
