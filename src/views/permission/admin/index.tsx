import { Divider } from 'antd';

const PermissionAdmin = () => {
  return (
    <div className="bg-white h-full">
      <div className="pl-4 pt-6 text-16 font-bold">admin页面</div>
      <Divider />
      <p className="px-4">这个页面只有admin角色才可以访问，test角色看不到</p>
    </div>
  );
};

export default PermissionAdmin;
