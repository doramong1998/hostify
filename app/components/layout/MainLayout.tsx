import { Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const { Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className='min-h-screen bg-gray-50'>
      <Sidebar collapsed={collapsed} />
      <Layout className='transition-all duration-50'>
        <Header collapsed={collapsed} toggleCollapse={toggleCollapse} />
        <Content className='overflow-auto'>
          <div className='bg-white  p-4'>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
