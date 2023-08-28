import { lazy } from "react";

//@ Lazy load components
export const Settings = lazy(() => import("@Pages/UI/Settings"));
export const Main = lazy(() => import("@Pages/UI/Main"));
export const UserProfile = lazy(() => import("@Pages/UI/Auth/UserProfile"));
export const Login = lazy(() => import("@Pages/UI/Auth/Login"));
export const SignUP = lazy(() => import("@Pages/UI/Auth/SignUp"));
export const KBMap = lazy(() => import("@Pages/UI/Settings/KBMap"));
