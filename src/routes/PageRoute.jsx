import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import Mui from "../pages/Mui";
import News from "../pages/News";

const SignIn = lazy(() => import("../screens/SignIn"));
const SignUp = lazy(() => import("../screens/SignUp"));
const Product = lazy(() => import("../pages/Product"));

const PageRoute = () => {
  const propsData = {
    buy: "buy Three",
    discount: "Get five product",
  };
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <SignIn propsData={propsData} />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={"loading"}>
              <SignIn propsData={propsData} />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={"loading"}>
              <SignUp />
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
        <Route
          path="mui"
          element={
            <Suspense fallback={"loading"}>
              <Mui />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default PageRoute;
