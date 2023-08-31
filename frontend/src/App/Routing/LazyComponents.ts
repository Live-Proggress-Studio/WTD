import { lazy } from "react";

//@ Lazy load components
export const Settings = lazy(() => import("@Pages/Settings"));
export const Main = lazy(() => import("@Pages/Main"));
export const UserProfile = lazy(() => import("@Pages/Auth/UserProfile"));
export const Login = lazy(() => import("@Pages/Auth/Login"));
export const SignUP = lazy(() => import("@Pages/Auth/SignUp"));
export const KBMap = lazy(() => import("@Pages/Settings/KBMap"));
