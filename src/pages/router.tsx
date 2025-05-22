import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import PageLoader from "@/components/core/PageLoader";

const AuthLayout = PageLoader(
  lazy(() => import("@/components/core/layout/AuthLayout"))
);
const PublicLayout = PageLoader(
  lazy(() => import("@/components/core/layout/PublicLayout"))
);
const AuthenticatedLayout = PageLoader(
  lazy(() => import("@/components/core/layout/AuthenticatedLayout"))
);
const NotFound = PageLoader(
  lazy(() => import("@/components/core/error/notFound"))
);

const LoginPage = PageLoader(lazy(() => import("@/pages/auth/LoginPage")));
const RegisterPage = PageLoader(
  lazy(() => import("@/pages/auth/RegisterPage"))
);

const Welcome = PageLoader(lazy(() => import("@/pages/welcome")));

const Setup = PageLoader(lazy(() => import("@/pages/plan/setup")));
const Itinerary = PageLoader(lazy(() => import("@/pages/plan/itinerary")));
const Init = PageLoader(lazy(() => import("@/pages/plan/init")));

export const userRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "plan",
        element: <AuthenticatedLayout />,
        children: [
          {
            path: "setup",
            element: <Setup />,
          },
          {
            path: "itinerary",
            element: <Itinerary />,
          },
          {
            path: "init",
            element: <Init />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
