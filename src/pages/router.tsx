import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "@/components/core/layout";
import AuthLayout from "@/components/core/layout/AuthLayout";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";

const HomePage = PageLoader(lazy(() => import("@/pages/Home")));

const NotFound = PageLoader(
  lazy(() => import("@/components/core/error/notFound"))
);

export const userRoutes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
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
        element: <LoginPage />
      },
      {
        path: "/auth/register",
        element: <RegisterPage />
      }
    ]
  }
]);
