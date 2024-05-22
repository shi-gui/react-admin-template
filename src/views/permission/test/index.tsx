import { Divider } from 'antd';

const PermissionTest = () => {
  return (
    <div className="bg-white h-full">
      <div className="pl-4 pt-6 text-16 font-bold">test页面</div>
      <Divider />
      <p className="px-4">这个页面只有test角色才可以访问，admin角色看不到</p>
    </div>
  );
};

export default PermissionTest;
