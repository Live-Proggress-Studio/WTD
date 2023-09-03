import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Notification } from "@/Components";
import {Layout} from "@/Layouts/Layout";
import { Loadable } from "../Providers/Loadable";
import { Paths } from ".";


const Settings = Loadable(lazy(() => import("@/Pages/Settings")));
const Main = Loadable(lazy(() => import("@/Pages/Main/Main")));
const UserProfile = Loadable(lazy(() => import("@/Pages/Auth/UserProfilePage/UserProfilePage")));
const Login = Loadable(lazy(() => import("@/Pages/Auth/LoginPage/LoginPage")));
const SignUP = Loadable(lazy(() => import("@/Pages/Auth/SignUpPage/SignUpPage")));
const KBMap = Loadable(lazy(() => import("@Pages/Settings/KBMap")));



const Routing = () => createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <div>error</div>,
    children: [
      {
        path: Paths.Home,
        element: (
              <Main />
        )
      },
      {
        path: Paths.Account,
        element: (
            <UserProfile />
        )
      },
      {
        path: Paths.Signup,
        element: (
            <SignUP />
        )
      },
      {
          path: Paths.Login,
          element: (
              <Login />
          )
        },
        {
          path: Paths.Settings,
          element: (
              <Settings />
          )
        },
        {
          path: Paths.KBMap,
          element: (
              <KBMap />
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
