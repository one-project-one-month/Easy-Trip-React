import { Outlet } from "react-router";

import Navbar from "./Navbar";

const PublicLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default PublicLayout;
