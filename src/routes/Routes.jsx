import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Edit from "../components/Edit";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
