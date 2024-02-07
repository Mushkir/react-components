import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest.jsx";
import HomePage from "./pages/HomePage.jsx";
import AlertPage from "./pages/AlertsPage.jsx";
import CardPage from "./pages/CardPage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/alert",
        element: <AlertPage />,
      },
      {
        path: "/card",
        element: <CardPage />,
      },
      {
        path: "button",
        element: <ButtonPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
