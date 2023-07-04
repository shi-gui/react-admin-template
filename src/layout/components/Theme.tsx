import { useState } from 'react';
import { Button, Drawer, Switch, ColorPicker, Radio } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import rootStore from '@/store';
import type { Color } from 'antd/es/color-picker';
import { observer } from 'mobx-react';

const LayoutTheme = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { theme, setTheme } = rootStore;
  const [color, setColor] = useState<Color | string>(theme.primaryColor);

  const handleChange = (val: Color) => {
    const color = val.toHexString();

    setColor(color);
    setTheme('primaryColor', color);
  };
  return (
    <>
      <Button
        type="primary"
        size="large"
        className={(open ? 'hidden' : 'block') + ' absolute top-1/3 right-0'}
        icon={<SettingOutlined />}
        onClick={() => setOpen(true)}
      />
      <Drawer
        title={t('系统设置')}
        placement="right"
        onClose={() => setOpen(false)}
        width={350}
        open={open}
      >
        <div className=" flex flex-col !gap-y-7">
          <div className="flex justify-between items-center">
            <span>{t('风格')}</span>
            <Radio.Group
              onChange={e => setTheme('mode', e.target.value)}
              value={theme.mode}
            >
              <Radio value="dark">dark</Radio>
              <Radio value="light">light</Radio>
            </Radio.Group>
          </div>
          <div className="flex justify-between items-center">
            <span>{t('侧边栏Logo')}</span>
            <Switch
              defaultChecked={theme.sidebarLogo}
              onChange={(val: boolean) => setTheme('sidebarLogo', val)}
            />
          </div>
          <div className="flex justify-between items-center">
            <span>{t('开启Tag')}</span>
            <Switch
              defaultChecked={theme.showTag}
              onChange={(val: boolean) => setTheme('showTag', val)}
            />
          </div>
          <div className="flex justify-between items-center">
            <span>{t('主题色')}</span>
            <ColorPicker value={color} onChange={val => handleChange(val)} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default observer(LayoutTheme);
