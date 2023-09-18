import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Notification } from "@/Components";
import {Layout} from "@/Layouts/Layout";
import { Loadable } from "../Providers/Loadable";
import { Paths } from ".";


const Settings = Loadable(lazy(() => import("@/Pages/SettingsPage/SettingsPage")));
const CalendarPage = Loadable(lazy(() => import("@/Pages/CalendarPage/CalendarPage")));
const AccauntPage = Loadable(lazy(() => import("@/Pages/AccauntPage/AccauntPage")));
const AuthPage = Loadable(lazy(() => import("@/Pages/AuthPage/AuthPage")));
const TargetPage = Loadable(lazy(() => import("@/Pages/TargetPage/TargetPage")));
const TodoPage = Loadable(lazy(() => import("@/Pages/TodoPage/TodoPage")));
const StatisticPage = Loadable(lazy(() => import("@/Pages/StatisticPage/StatisticPage")));



const Routing = () => createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <div>error</div>,
    children: [
      {
        path: Paths.Home,                                                
        element: (        
              <CalendarPage />                                                
        )                                                
      },                                                
      {                                                
        path: Paths.TODO,                                                
        element: (                                                
              <TodoPage />
        )
      },
      {
        path: Paths.Goals,
        element: (
              <TargetPage />
        )
      },
      {
        path: Paths.Stats,
        element: (
              <StatisticPage />
        )
      },
      {
        path: Paths.Account,
        element: (
            <AccauntPage />
        )
      },
      {
        path: Paths.Signup,
        element: (
            <AuthPage />
        )
      },
      {
          path: Paths.Login,
          element: (
              <AuthPage />
          )
        },
        {
          path: Paths.Settings,
          element: (
              <Settings />
          )
        },
        {
          path: Paths.Notify,
          element: (
              <Notification />
          )
        },
    ]
  }
]) 




export default Routing;
