import { createBrowserRouter } from 'react-router-dom';
import { Notification } from '@/Components';
import { Layout } from '@/Layouts/Layout';
import { Paths } from '.';
import {
  AccountPage,
  AuthPage,
  CalendarPage,
  Settings,
  StatisticPage,
  TargetPage,
  TodoPage,
} from '@/Pages';

const Routing = () =>
  createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <div>error</div>,
      children: [
        {
          path: Paths.Home,
          element: <CalendarPage />,
        },
        {
          path: Paths.TODO,
          element: <TodoPage />,
        },
        {
          path: Paths.Goals,
          element: <TargetPage />,
        },
        {
          path: Paths.Stats,
          element: <StatisticPage />,
        },
        {
          path: Paths.Account,
          element: <AccountPage />,
        },
        {
          path: Paths.Signup,
          element: <AuthPage />,
        },
        {
          path: Paths.Login,
          element: <AuthPage />,
        },
        {
          path: Paths.Settings,
          element: <Settings />,
        },
        {
          path: Paths.Notify,
          element: <Notification />,
        },
      ],
    },
  ]);

export default Routing;
