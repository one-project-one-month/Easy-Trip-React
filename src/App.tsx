import { RouterProvider } from "react-router";
import { userRoutes } from "@/pages/router";

function App() {
  return (
    <>
      <div>
        <RouterProvider router={userRoutes} />
      </div>
    </>
  );
}

export default App;
