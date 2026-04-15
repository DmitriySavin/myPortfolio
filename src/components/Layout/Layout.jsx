import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </Suspense>
  );
};

export default Layout