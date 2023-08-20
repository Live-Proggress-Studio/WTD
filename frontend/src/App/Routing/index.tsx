import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
//@ Lazy load components
const Settings = lazy(() => import("@Pages/UI/Settings"));
const Main = lazy(() => import("@Pages/UI/Main"));
const UserProfile = lazy(() => import("@/Pages/UI/Auth/UserProfile"));
const Login = lazy(() => import("@Pages/UI/Auth/Login"));
const SignUP = lazy(() => import("@Pages/UI/Auth/SignUp"));
const KBMap = lazy(() => import("@Pages/UI/Settings/KBMap"));
//@ Import fallback component
import { Loading } from "@/Shared/UI";

//? Routing component
/* Routes:
* Settings
* Main
* UserProfile
* Login
* SignUP
* KBMap
*/
const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/users/:id"
          element={
            <Suspense fallback={<Loading />}>
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loading />}>
              <SignUP />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/settings"
          element={
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="/kbmap"
          element={
            <Suspense fallback={<Loading />}>
              <KBMap />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
