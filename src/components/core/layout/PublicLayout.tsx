import { Outlet, useLocation } from "react-router";

import Navbar from "./Navbar";
import { useEffect } from "react";

const PublicLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default PublicLayout;
