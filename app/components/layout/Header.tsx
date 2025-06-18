import { Layout, Dropdown, Avatar, Badge, Button } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const { Header: AntdHeader } = Layout;

interface HeaderProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}

export const Header = ({ collapsed, toggleCollapse }: HeaderProps) => {
  const [notifications] = useState([
    { id: 1, title: 'Thông báo 1', read: false },
    { id: 2, title: 'Thông báo 2', read: true },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AntdHeader className='bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-10'>
      <div className='flex items-center'>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
          className='w-10 h-10 flex items-center justify-center'
        />
        <h1 className='text-lg font-semibold ml-4'>
          {collapsed ? '' : 'Bảng điều khiển'}
        </h1>
      </div>

      <div className='flex items-center space-x-4'>
        <Dropdown
          overlay={
            <div className='bg-white rounded shadow-lg w-64 p-2'>
              <div className='p-2 border-b'>
                <h3 className='font-medium'>Thông báo</h3>
              </div>
              <div className='max-h-80 overflow-y-auto'>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 hover:bg-gray-50 cursor-pointer ${
                        !notification.read ? 'bg-blue-50' : ''
                      }`}
                    >
                      <p className='text-sm'>{notification.title}</p>
                    </div>
                  ))
                ) : (
                  <div className='p-4 text-center text-gray-500'>
                    Không có thông báo mới
                  </div>
                )}
              </div>
            </div>
          }
          trigger={['click']}
          placement='bottomRight'
        >
          <Badge count={unreadCount} size='small'>
            <Button
              type='text'
              icon={<BellOutlined className='text-lg' />}
              className='w-10 h-10 flex items-center justify-center'
            />
          </Badge>
        </Dropdown>

        <Dropdown
          menu={{
            items: [
              {
                key: 'profile',
                label: 'Hồ sơ',
              },
              {
                key: 'settings',
                label: 'Cài đặt',
              },
              {
                type: 'divider',
              },
              {
                key: 'logout',
                label: 'Đăng xuất',
                danger: true,
              },
            ],
          }}
          placement='bottomRight'
        >
          <div className='flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded'>
            <Avatar icon={<UserOutlined />} className='bg-primary-500' />
            <span className='ml-2 font-medium hidden md:inline'>Admin</span>
          </div>
        </Dropdown>
      </div>
    </AntdHeader>
  );
};
