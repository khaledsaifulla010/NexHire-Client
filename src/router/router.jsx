import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout/Layout";
import Home from "../pages/Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
