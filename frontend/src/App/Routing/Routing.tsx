import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Settings, UserProfile } from "./LazyComponents";
//@ Import fallback component
import { Loading } from "@/Shared/UI";
import { KBMap, Login, SignUP } from "@/Pages";
import { Pathes } from ".";

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
          path={Pathes.Home}
          element={
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path={Pathes.Account}
          element={
            <Suspense fallback={<Loading />}>
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path={Pathes.Signup}
          element={
            <Suspense fallback={<Loading />}>
              <SignUP />
            </Suspense>
          }
        />
        <Route
          path={Pathes.Login}
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={Pathes.Settings}
          element={
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path={Pathes.KBMap}
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
