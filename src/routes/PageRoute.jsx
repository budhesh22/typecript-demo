import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import News from "../pages/News";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
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
              <Home propsData={propsData} />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={"loading"}>
              <About />
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
    </Routes>
  );
};

export default PageRoute;
