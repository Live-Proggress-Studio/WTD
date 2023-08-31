import { Suspense } from "react";
import { Main, Settings, UserProfile } from "./LazyComponents";
import { Route, Routes } from "react-router-dom";
//@ Import fallback component
import { Loading } from "@/Shared/UI";
import { KBMap, Login, SignUP } from "@/Pages";
import { Paths } from ".";
import { Notification } from "@/Features";

//? Routing component
/* Routes:
 * Settings
 * Main
 * UserProfile
 * Login
 * SignUP
 * KBMap
 * Dev Routes: notify
 */
const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path={Paths.Home}
          element={
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path={Paths.Account}
          element={
            <Suspense fallback={<Loading />}>
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path={Paths.Signup}
          element={
            <Suspense fallback={<Loading />}>
              <SignUP />
            </Suspense>
          }
        />
        <Route
          path={Paths.Login}
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={Paths.Settings}
          element={
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path={Paths.KBMap}
          element={
            <Suspense fallback={<Loading />}>
              <KBMap />
            </Suspense>
          }
        />
        <Route
          path={Paths.Notify}
          element={
            <Suspense fallback={<Loading />}>
              <Notification />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
