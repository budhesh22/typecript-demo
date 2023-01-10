import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Error from "../component/common/Error";

import PublicLayout from "../layout/PublicLayout";

const Register = lazy(() => import("../screens/Register"));

const PageRoute = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <Register />
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
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={"loading"}>
            <Error />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default PageRoute;
