import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  HomeOutlined,
  UserOutlined,
  DollarOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

export const Sidebar = ({ collapsed }: SidebarProps) => {
  return (
    <Sider
      width={250}
      className='h-screen sticky top-0 left-0 shadow-lg'
      theme='light'
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <div className='p-4 h-16 flex items-center'>
        <h1 className='text-xl font-bold text-primary-600'>Hostify</h1>
      </div>

      <Menu
        mode='inline'
        defaultSelectedKeys={['dashboard']}
        className='border-r-0'
        items={[
          {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            label: <Link to='/dashboard'>Tổng quan</Link>,
          },
          {
            key: 'rooms',
            icon: <HomeOutlined />,
            label: 'Quản lý phòng',
          },
          {
            key: 'customers',
            icon: <UserOutlined />,
            label: 'Khách hàng',
          },
          {
            key: 'transactions',
            icon: <DollarOutlined />,
            label: 'Giao dịch',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Cài đặt',
          },
          {
            type: 'divider',
          },
          {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Đăng xuất',
            danger: true,
          },
        ]}
      />
    </Sider>
  );
};
