import { Button, Checkbox, Form, Input } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import ParticlesBg from 'particles-bg';
import './index.less';

function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Button
            type="primary"
            className="w-full h-10 bg-[#4096ff]"
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
