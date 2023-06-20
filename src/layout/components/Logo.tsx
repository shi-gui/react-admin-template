import { TwitterOutlined } from '@ant-design/icons';
import type { Iprops } from '@/layout';

const LayoutLogo = (props: Iprops) => {
  const { collapsed } = props;
  return (
    <div className="flex items-center justify-center h-16 text-center text-gray-50 gap-2">
      <TwitterOutlined style={{ fontSize: '30px', color: '#08c' }} />
      <span
        className=" text-2xl"
        style={{ display: collapsed ? 'none' : 'block' }}
      >
        Liuhua
      </span>
    </div>
  );
};

export default LayoutLogo;
