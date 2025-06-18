import {
  Card,
  Statistic,
  Calendar,
  Badge,
  Row,
  Col,
  Typography,
  ConfigProvider,
} from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  DollarOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const { Title } = Typography;

// Dữ liệu mẫu
const statsData = {
  availableRooms: 12,
  bookedRooms: 8,
  totalRevenue: 42500000,
  pendingPayment: 12500000,
};

// Dữ liệu lịch mẫu
const getListData = (value: Dayjs) => {
  let listData: any[] = [];
  const day = value.date();
  const today = dayjs().date();

  // Thêm note vào ngày hiện tại
  if (day === today) {
    listData = [
      { type: 'success', content: 'Thanh toán phòng 101' },
      { type: 'warning', content: 'Dọn dẹp phòng 203' },
    ];
  }

  // Thêm note vào ngày 20
  if (day === 20) {
    listData = [
      { type: 'warning', content: 'Kiểm tra thiết bị' },
      { type: 'error', content: 'Đến hạn bảo trì' },
    ];
  }

  return listData;
};

// Tùy chỉnh header của lịch
const headerRender = ({ value, type, onChange, onTypeChange }: any) => {
  const monthOptions = [];
  const current = value.clone();

  // Lấy tên tháng hiện tại
  const monthName = current.format('MM/YYYY');

  return (
    <div className='flex justify-between items-center p-4 border-b'>
      <div className='text-lg font-medium'>{monthName}</div>
    </div>
  );
};

const Dashboard = () => {
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className='space-y-1'>
        {listData.map((item, index) => (
          <li key={index} className='text-xs'>
            <Badge status={item.type as any} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current: Dayjs, info: any) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  return (
    <div className='p-6'>
      <Title level={2} className='mb-6'>
        Tổng quan
      </Title>

      {/* Hàng thứ nhất: Các thống kê */}
      <Row gutter={[16, 16]} className='mb-6'>
        <Col xs={24} sm={12} lg={6}>
          <Card className='bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-sm'>
            <Statistic
              title='Phòng còn trống'
              value={statsData.availableRooms}
              prefix={<HomeOutlined className='text-blue-500' />}
              valueStyle={{ color: '#2563eb' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className='bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-sm'>
            <Statistic
              title='Phòng đã đặt'
              value={statsData.bookedRooms}
              prefix={<UserOutlined className='text-green-500' />}
              valueStyle={{ color: '#059669' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className='bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-sm'>
            <Statistic
              title='Tổng doanh số'
              value={statsData.totalRevenue}
              prefix={<DollarOutlined className='text-purple-500' />}
              valueStyle={{ color: '#7c3aed' }}
              formatter={(value) => `${(value as number).toLocaleString()} đ`}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className='bg-gradient-to-br from-amber-50 to-amber-100 border-0 shadow-sm'>
            <Statistic
              title='Cần thu'
              value={statsData.pendingPayment}
              prefix={<WalletOutlined className='text-amber-500' />}
              valueStyle={{ color: '#d97706' }}
              formatter={(value) => `${(value as number).toLocaleString()} đ`}
            />
          </Card>
        </Col>
      </Row>

      {/* Hàng thứ hai: Lịch */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card className='shadow-sm'>
            <Calendar
              cellRender={cellRender}
              defaultValue={dayjs()}
              className='w-full'
              // headerRender={headerRender}
              // fullscreen={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
