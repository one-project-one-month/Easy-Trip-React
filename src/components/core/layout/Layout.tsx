import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h3>Layout</h3>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Layout;
