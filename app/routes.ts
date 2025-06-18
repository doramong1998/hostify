import { type RouteConfig, index, route } from '@react-router/dev/routes';
import { MainLayout } from './components/layout';

// Tạo layout route
const layoutRoute: any = {
  element: MainLayout,
  children: [
    route('/dashboard', 'routes/dashboard.tsx'),
    // Thêm các route khác vào đây
  ],
};

export default [
  route('/', 'routes/home.tsx'),
  route('/login', 'routes/login.tsx'),
  route('/*', layoutRoute),
] satisfies RouteConfig;
