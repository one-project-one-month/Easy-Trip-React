import { Outlet } from "react-router";

import Navbar from "./Navbar";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default PublicLayout;
