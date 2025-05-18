import { lazy } from "react";
import { createBrowserRouter } from "react-router";

// import { Layout } from "@/components/core/layout";
import PageLoader from "@/components/core/PageLoader";
import AuthLayout from "@/components/core/layout/AuthLayout";
import PublicLayout from "@/components/core/layout/PublicLayout";

// const HomePage = PageLoader(lazy(() => import("@/pages/Home")));
// const TripPlan = PageLoader(lazy(() => import("@/pages/TripPlan")));
const LandingPage = PageLoader(
  lazy(() => import("@/pages/public/LandingPage"))
);
const LoginPage = PageLoader(lazy(() => import("@/pages/auth/LoginPage")));
const RegisterPage = PageLoader(
  lazy(() => import("@/pages/auth/RegisterPage"))
);
const TripPlanFormPage = PageLoader(
  lazy(() => import("@/pages/user/TripPlanFormPage"))
);
const UserLayoutPage = PageLoader(
  lazy(() => import("@/components/core/layout/UserLayout"))
);

const NotFound = PageLoader(
  lazy(() => import("@/components/core/error/notFound"))
);

export const userRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      // {
      //   path: "trip",
      //   element: <TripPlan />,
      // },

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
  {
    path: "/plan",
    element: <UserLayoutPage />,
    children: [
      {
        path: "setup",
        element: <TripPlanFormPage />,
      },
    ],
  },
]);
