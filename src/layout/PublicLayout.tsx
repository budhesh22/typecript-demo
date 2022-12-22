import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";

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
