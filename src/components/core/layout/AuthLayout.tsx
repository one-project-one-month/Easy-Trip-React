import { Navigate, Outlet, useLocation } from "react-router";

import useAuthStore from "@/store/authStore";

export default function AuthLayout() {
  const location = useLocation();

  const token = useAuthStore(s => s.accessToken);

  if (token) {
    return <Navigate to={"/"} state={{ from: location.pathname }} replace />;
  }

  return (
    <div className="w-full h-lvh relative">
      <Outlet />
    </div>
  );
}
