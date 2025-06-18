import { Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const { Content } = Layout;

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className='min-h-screen bg-gray-50'>
      <Sidebar collapsed={collapsed} />
      <Layout
        className='transition-all duration-200'
        style={{ marginLeft: collapsed ? 80 : 250 }}
      >
        <Header collapsed={collapsed} toggleCollapse={toggleCollapse} />
        <Content className='p-6 overflow-auto'>
          <div className='bg-white rounded-lg shadow-sm p-6'>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
