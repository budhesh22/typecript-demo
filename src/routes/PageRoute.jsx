import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import PublicLayout from "../layout/PublicLayout";
import MuiAll from "../pages/MuiAll";
import MuiGrid from "../pages/MuiGrid";

const Login = lazy(() => import("../screens/Login"));
const Register = lazy(() => import("../screens/Register"));

const PageRoute = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/user-login"
          element={
            <Suspense fallback={"loading"}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/user-register"
          element={
            <Suspense fallback={"loading"}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/mui-grid"
          element={
            <Suspense fallback={"loading"}>
              <MuiGrid />
            </Suspense>
          }
        />

        <Route
          path="/mui-all"
          element={
            <Suspense fallback={"loading"}>
              <MuiAll />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default PageRoute;
