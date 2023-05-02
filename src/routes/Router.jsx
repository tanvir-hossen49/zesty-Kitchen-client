import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
  },
]);
