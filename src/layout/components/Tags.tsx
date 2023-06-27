import { Space, Tag } from 'antd';

const LayoutTags = () => {
  const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };
  return (
    <div
      className="w-full h-[36px] bg-white flex items-center px-4"
      style={{ borderTop: '1px solid #e8e8e8' }}
    >
      <Space size={[0, 8]} wrap>
        <Tag>Tag 1211</Tag>
        <Tag>
          <a
            className="text-12 pr-form"
            href="https://github.com/ant-design/ant-design/issues/1862"
          >
            Link
          </a>
        </Tag>
        <Tag closable onClose={log}>
          Tag 2
        </Tag>
        <Tag closable onClose={preventDefault}>
          Prevent Default
        </Tag>
      </Space>
    </div>
  );
};
export default LayoutTags;
