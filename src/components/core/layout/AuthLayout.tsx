import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className='w-full h-lvh relative'>
      <Outlet />
    </div>
  );
}
