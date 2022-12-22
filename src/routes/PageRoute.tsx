import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import PublicLayout from "../layout/PublicLayout";

const Home = lazy(() => import("../pages/Home"));

const PageRoute = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={"loading"}>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default PageRoute;
