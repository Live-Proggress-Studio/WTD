import { createBrowserRouter } from 'react-router-dom';
import { Loading, Notification } from '@/Components';
import { Layout } from '@/Layouts/Layout';
import { Paths } from '.';
import {
  AccauntPage,
  AuthPage,
  CalendarPage,
  Settings,
  StatisticPage,
  TargetPage,
  TodoPage,
  ErrorPage
} from '@/App/Routing/Lazy';

const Routing = () =>
  createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage/>,
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
          element: <AccauntPage />,
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
