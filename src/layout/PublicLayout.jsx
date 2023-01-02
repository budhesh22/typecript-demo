import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../component/common/Header";
import Footer from "../component/common/Footer";

const PublicLayout = () => {
  return (
    <>
      <Suspense fallback={"loading"}>
        <Header />
      </Suspense>
      <main className="main-content">
        <Outlet />
      </main>
      <Suspense fallback={"loading"}>
        <Footer />
      </Suspense>
    </>
  );
};

export default PublicLayout;
