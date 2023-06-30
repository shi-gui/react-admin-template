import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const LayoutTheme = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open}
      <Button
        type="primary"
        size="large"
        className={(open ? 'hidden' : 'block') + ' absolute top-1/3 right-0'}
        icon={<SettingOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title={t('系统设置')}
        placement="right"
        onClose={onClose}
        width={350}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default LayoutTheme;
