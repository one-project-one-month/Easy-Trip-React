import { Outlet } from "react-router";

import withAuth from "@/features/withAuth";
import UserFooter from "./UserFooter";

const ProtectedLayout = () => {
  return (
    <div className="w-full h-full">
      <Outlet />
      <UserFooter />
    </div>
  );
};

const AuthenticatedLayout = withAuth(ProtectedLayout);
export default AuthenticatedLayout;
