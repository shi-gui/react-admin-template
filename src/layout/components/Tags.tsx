import { Space, Tag } from 'antd';
import { observer } from 'mobx-react';
import rootStore from '@/store';
import { type TagItem } from '@/store';
import { useNavigate } from 'react-router-dom';

const LayoutTags = () => {
  const navigate = useNavigate();

  const handleClick = (item: TagItem) => {
    navigate(item.path);
  };
  const handleClose = (item: TagItem) => {
    // 找到当前tag的前一个，并跳转至该页面
    const index = rootStore.tag.findIndex((i: TagItem) => i.id === item.id);
    const path = rootStore.tag[index - 1]?.path;
    navigate(path);
    // 删除当前tag
    rootStore.removeTag(item.id);
  };
  return (
    <div
      className="w-full h-[36px] bg-white flex items-center px-4"
      style={{ borderTop: '1px solid #e8e8e8' }}
    >
      <Space size={[0, 8]} wrap>
        {rootStore.tag.map(item => (
          <Tag
            key={item.path}
            closable={item.isClosed}
            onClose={() => handleClose(item)}
          >
            <span className="cursor-pointer" onClick={() => handleClick(item)}>
              {item.title}
            </span>
          </Tag>
        ))}
      </Space>
    </div>
  );
};
export default observer(LayoutTags);
