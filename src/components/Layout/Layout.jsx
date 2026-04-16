
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {


  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
