import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import ParticlesBg from 'particles-bg';
import type { LoginParams } from '@/api/login/login';
import { setToken, setUserInfo, getLang, setLang } from '@/utils/store';
import { useNavigate } from 'react-router-dom';
import './index.less';
import appConfig from '@/config';
import { useTranslation } from 'react-i18next';

function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { defaultLang } = appConfig;
  const { t } = useTranslation();

  const rules = {
    username: [{ required: true, message: 'Please input your username!' }],
    password: [{ required: true, message: 'Please input your password!' }]
  };

  const handleLogin = (values: LoginParams) => {
    setLoading(true);
    console.log('表单信息:' + values);
    setTimeout(() => {
      setLoading(false);
      const res = {
        userInfo: {
          name: 'liuhua',
          age: 18,
          sex: 1,
          role: values.username === 'admin' ? 'admin' : 'test'
        },
        token: 'xhshgsbzlgin'
      };
      setToken(res.token);
      !getLang() && setLang(defaultLang);
      setUserInfo(JSON.stringify(res.userInfo));
      navigate('/home');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <ParticlesBg type="circle" bg={true} />
      <div className="w-[400px] h-[500px] rounded-lg form-box p-5">
        <div className="flex justify-center items-center flex-col mb-10">
          <TwitterOutlined style={{ fontSize: '35px', color: '#08c' }} />
          <p className="pt-2 text-2xl">Liuhua</p>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: false }}
          form={form}
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item name="username" rules={rules.username}>
            <Input placeholder={t('用户名')} />
          </Form.Item>
          <Form.Item name="password" rules={rules.password}>
            <Input placeholder={t('密码')} />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>{t('记住账号')}</Checkbox>
          </Form.Item>
          <Button
            type="primary"
            className="w-full h-10 bg-[#4096ff]"
            loading={loading}
            htmlType="submit"
          >
            {t('登录')}
          </Button>
        </Form>
        <p className="flex text-xs justify-between text-[#08c] mt-4 gap-6">
          <span className=" cursor-pointer">{t('忘记密码')}</span>
          <span className=" cursor-pointer">{t('没有账号?注册')}</span>
        </p>
      </div>
    </div>
  );
}
export default Login;
