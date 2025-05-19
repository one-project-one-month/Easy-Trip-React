import { Outlet } from "react-router";

import withAuth from "@/features/withAuth";
import Navbar from "./Navbar";

const ProtectedLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

const AuthenticatedLayout = withAuth(ProtectedLayout);
export default AuthenticatedLayout;
