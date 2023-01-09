import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Error from "../component/common/Error";
import PublicLayout from "../layout/PublicLayout";
import News from "../pages/News";

const Counter = lazy(() => import("../pages/Counter"));
const Product = lazy(() => import("../pages/Product"));

const PageRoute = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="/counter"
          element={
            <Suspense fallback={"loading"}>
              <Counter />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={"loading"}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="/news"
          element={
            <Suspense fallback={"loading"}>
              <News />
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
