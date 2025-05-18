import { Outlet } from "react-router";
import UserNavbar from "../UserNavbar";
import withAuth from "@/features/withAuth";
import { User } from "@/type/Auth";

function UserLayout({ user }: { user: User }) {
  console.log("user", user);

  return (
    <div>
      <UserNavbar />
      <Outlet />
    </div>
  );
}

const AuthUserLayout = withAuth(UserLayout);
export default AuthUserLayout;
