import { Link } from 'react-router';
import {
  Button,
  Card,
  Checkbox,
  Form as AntdForm,
  Input,
  Typography,
  Space,
} from 'antd';
import { UserOutlined, LockOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export function meta() {
  const siteName = 'Hostify - Nền tảng Hosting & Domain chuyên nghiệp';
  const description =
    'Đăng nhập vào Hostify để quản lý dịch vụ Hosting, Domain và các giải pháp lưu trữ website chuyên nghiệp';

  return [
    { title: `Đăng nhập | ${siteName}` },
    { name: 'description', content: description },
    { property: 'og:title', content: `Đăng nhập | ${siteName}` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: siteName },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `Đăng nhập | ${siteName}` },
    { name: 'twitter:description', content: description },
  ];
}

export default function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    // Xử lý đăng nhập ở đây
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <Card className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <Space direction='vertical' size='middle' className='w-full'>
            <div className='flex items-center justify-center'>
              <Title level={3} className='!mb-0 !text-primary-500'>
                HOSTIFY
              </Title>
            </div>
            <Text type='secondary'>
              Nhập thông tin đăng nhập để tiếp tục sử dụng dịch vụ
            </Text>
          </Space>
        </div>

        <AntdForm
          name='login'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout='vertical'
        >
          <AntdForm.Item
            name='email'
            label='Email'
            rules={[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không hợp lệ!' },
            ]}
          >
            <Input
              prefix={<UserOutlined className='text-gray-300' />}
              placeholder='Nhập email đăng nhập'
              size='large'
            />
          </AntdForm.Item>

          <AntdForm.Item
            name='password'
            label='Mật khẩu'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className='text-gray-300' />}
              placeholder='Nhập mật khẩu'
              size='large'
            />
          </AntdForm.Item>

          <div className='flex justify-between mb-6'>
            <AntdForm.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </AntdForm.Item>

            <Link
              to='/forgot-password'
              className='text-blue-500 hover:text-blue-700'
            >
              Quên mật khẩu?
            </Link>
          </div>

          <AntdForm.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='w-full'
              size='large'
            >
              Đăng nhập vào Hostify
            </Button>
          </AntdForm.Item>

          <div className='text-center'>
            <Text type='secondary'>Chưa có tài khoản Hostify? </Text>
            <Link to='/register' className='text-blue-500 hover:text-blue-700'>
              Đăng ký ngay
            </Link>
          </div>
        </AntdForm>
      </Card>
    </div>
  );
}
