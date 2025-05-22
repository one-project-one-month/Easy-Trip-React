import { Outlet } from "react-router";

import withAuth from "@/features/withAuth";

const ProtectedLayout = () => {
  return <Outlet />;
};

const AuthenticatedLayout = withAuth(ProtectedLayout);
export default AuthenticatedLayout;
