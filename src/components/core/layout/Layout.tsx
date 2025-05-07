import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="min-h-screen">
			<h3>Layout</h3>
			<div>{<Outlet />}</div>
			<Footer />
		</div>
	);
};

export default Layout;
