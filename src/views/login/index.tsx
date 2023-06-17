import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import ParticlesBg from 'particles-bg';
import type { LoginParams } from '@/api/login/login';
import { setToken, setUserInfo } from '@/utils/store';
import './index.less';

function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
          sex: 1
        },
        token: 'xhshgsbzlgin'
      };
      setToken(res.token);
      setUserInfo(JSON.stringify(res.userInfo));
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <ParticlesBg type="circle" bg={true} />
      <div className="w-[400px] h-[500px] rounded-lg form-box p-5">
        <div className="flex justify-center items-center flex-col mb-10">
          <TwitterOutlined style={{ fontSize: '30px', color: '#08c' }} />
          <p className="pt-2">Sign in</p>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: false }}
          form={form}
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item name="username" rules={rules.username}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={rules.password}>
            <Input placeholder="Password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button
            type="primary"
            className="w-full h-10 bg-[#4096ff]"
            loading={loading}
            htmlType="submit"
          >
            Login
          </Button>
        </Form>
        <p className="flex text-xs justify-between text-[#08c] mt-4">
          <span className=" cursor-pointer">Forgot password?</span>
          <span className=" cursor-pointer">
            Don‘t have an account? Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
