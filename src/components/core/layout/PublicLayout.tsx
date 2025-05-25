import { Outlet } from "react-router";

import Navbar from "./Navbar";

const PublicLayout = () => {
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <Navbar />

      <section className="flex-1 container mx-auto px-4">
        <Outlet />
      </section>
    </main>
  );
};

export default PublicLayout;
