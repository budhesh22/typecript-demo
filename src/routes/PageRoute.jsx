import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import About from "../pages/About";

const Home = lazy(() => import("../pages/Home"));

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
      </Route>
    </Routes>
  );
};

export default PageRoute;
