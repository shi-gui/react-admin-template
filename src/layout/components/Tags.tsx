import { Space, Tag, Dropdown, type MenuProps } from 'antd';
import { observer } from 'mobx-react';
import rootStore from '@/store';
import { type TagItem } from '@/store';
import { useNavigate, useLocation } from 'react-router-dom';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import { useTranslation } from 'react-i18next';
import { menu } from '@/config/menu';

const { tag, setTag, removeTag, removeAllTag, theme } = rootStore;
const LayoutTags = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  /**
   * @description tag关闭组件
   */
  const CloseTag = () => {
    const items: MenuProps['items'] = [
      {
        key: '1',
        label: t('关闭其他'),
        onClick: () => {
          /**
           * 先清除所有
           * 在添加当前
           */
          removeAllTag();
          const v = menu.find(item => item.path === location.pathname);
          if (v?.path) {
            setTag({
              id: v.id,
              title: v.title,
              path: v.path,
              isClosed: true
            });
          }
        }
      },
      {
        key: '2',
        label: t('关闭所有'),
        onClick: () => {
          removeAllTag();
          navigate('/home');
        }
      }
    ];
    return (
      <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
        <div className="w-10 flex justify-center">
          <CloseCircleOutlined className="cursor-pointer" />
        </div>
      </Dropdown>
    );
  };

  const handleClick = (item: TagItem) => {
    navigate(item.path);
  };
  const handleClose = (item: TagItem) => {
    /**
     * 点进非选中状态tag
     *    删除当前tag
     * 点击选中状态tag
     *    寻找前一个tag并跳转至该path页面
     *    删除当前tag
     */
    const flag = location.pathname === item.path;
    if (flag) {
      const index = tag.findIndex((i: TagItem) => i.id === item.id);
      const path = tag[index - 1]?.path;
      navigate(path);
    }
    removeTag(item.id);
  };
  return theme.showTag ? (
    <div
      className="w-full h-[36px] bg-white flex items-center px-4"
      style={{ borderTop: '1px solid #e8e8e8' }}
    >
      <Scrollbars
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
        hideTracksWhenNotNeeded={true}
      >
        <div className="flex items-center h-full">
          <Space size={[0, 8]} wrap className="!flex-nowrap">
            {tag.map(item => (
              <Tag
                key={item.id}
                closable={item.isClosed}
                color={
                  item.path === location.pathname ? 'processing' : 'default'
                }
                onClose={() => handleClose(item)}
              >
                <span
                  className="cursor-pointer"
                  onClick={() => handleClick(item)}
                >
                  {t(item.title)}
                </span>
              </Tag>
            ))}
          </Space>
        </div>
      </Scrollbars>

      <CloseTag />
    </div>
  ) : null;
};
export default observer(LayoutTags);
