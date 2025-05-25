import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <h3>Layout</h3>
      <div className="grow">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
