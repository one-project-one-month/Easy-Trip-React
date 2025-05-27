import { Outlet } from "react-router";

import withAuth from "@/features/withAuth";
import Footer from "./Footer";

const ProtectedLayout = () => {
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <section className="flex-1 container mx-auto px-4">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

const AuthenticatedLayout = withAuth(ProtectedLayout);
export default AuthenticatedLayout;
