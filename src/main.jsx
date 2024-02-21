import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AboutPage from "./pages/about";
import FrontPage from "./pages/front-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
