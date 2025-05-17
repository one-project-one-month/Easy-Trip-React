import { Link, Outlet } from "react-router";
import { Home } from "lucide-react";

export default function AuthLayout() {
  return (
    <div className="w-full h-lvh relative">
      <Link
        to="/"
        className="absolute px-4 py-2 top-4 left-4 transition-all duration-300 focus:outline-none  rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 bg-white"
        aria-label="Navigate to Home"
      >
        <span className="sr-only">Navigate to Home</span>
        <span className="font-bold text-xl flex justify-center">
          <Home />
          <span className="text-sm pt-1 ml-1">Home</span>
        </span>
      </Link>
      <Outlet />
    </div>
  );
}
