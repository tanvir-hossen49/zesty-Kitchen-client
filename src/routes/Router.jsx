import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
