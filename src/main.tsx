import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Flashcards } from "./pages/Flashcards.tsx";
import { Profile } from "./pages/Profile.tsx";
import { routes } from "./invariants/Constants.ts";
import { ErrorPage } from "./pages/error-page.tsx";
import { Quotes } from "./pages/Quotes.tsx";
import { Logout } from "./pages/Logout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes.main,
        element: <Flashcards />,
      },
      {
        path: routes.profile,
        element: <Profile />,
      },
      {
        path: routes.quotes,
        element: <Quotes />,
      },
      {
        path: routes.logout,
        element: <Logout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
