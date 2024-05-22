import { Divider, Tag } from 'antd';
import rootStore from '@/store';

const PermissionExplain = () => {
  const { theme } = rootStore;

  return (
    <div className="bg-white h-full">
      <div className="pl-4 pt-6 text-16 font-bold">权限说明</div>
      <Divider />
      <div className="px-4 pb-8">
        <p>
          本项目中的菜单和路由权限都是基于用户角色来分配的，内置了两种角色，分别是：
        </p>
        <Tag color={theme.primaryColor}>admin</Tag>
        <Tag color={theme.primaryColor}>test</Tag>
      </div>

      <p className="pl-4 text-12 text-gray-500">
        Tip：可以在config/menu.ts中查看具体的权限配置
      </p>
    </div>
  );
};
export default PermissionExplain;
