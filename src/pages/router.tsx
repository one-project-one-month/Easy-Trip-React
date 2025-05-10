import PageLoader from "@/components/core/PageLoader";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "@/components/core/layout";

const HomePage = PageLoader(lazy(() => import("@/pages/Home")));
const TripPlan = PageLoader(lazy(() => import("@/pages/TripPlan")));

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
				path: "/trip",
				element: <TripPlan />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
