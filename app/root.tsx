import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import { ConfigProvider, App as AntdApp, theme } from 'antd';
import type { Route } from './+types/root';
import './app.css';
import dayjs from 'dayjs';
dayjs.locale('vi');

// Bảng màu Danube
const colors = {
  primary: {
    50: '#f2f6fc',
    100: '#e2ebf7',
    200: '#cbdcf2',
    300: '#a7c6e9',
    400: '#7ea8dc',
    500: '#6a93d5',
    600: '#4b71c5',
    700: '#415fb4',
    800: '#3a4f93',
    900: '#334475',
    950: '#232b48',
  },
} as const;

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider
          theme={{
            algorithm: theme.defaultAlgorithm,
            token: {
              colorPrimary: colors.primary[500],
              colorInfo: colors.primary[500],
              colorLink: colors.primary[500],
              colorSuccess: '#52c41a',
              colorWarning: '#faad14',
              colorError: '#ff4d4f',
              borderRadius: 6,
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            },
            components: {
              Button: {
                primaryColor: '#fff',
                colorPrimary: colors.primary[500],
                colorPrimaryHover: colors.primary[600],
                colorPrimaryActive: colors.primary[700],
              },
              Input: {
                hoverBorderColor: colors.primary[500],
                activeBorderColor: colors.primary[500],
                activeShadow: `0 0 0 2px ${colors.primary[100]}`,
              },
              Checkbox: {
                colorPrimary: colors.primary[500],
              },
              Calendar: {
                fullBg: '#fff',
                itemActiveBg: '#f0f5ff',
              },
            },
          }}
        >
          <AntdApp>{children}</AntdApp>
        </ConfigProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
