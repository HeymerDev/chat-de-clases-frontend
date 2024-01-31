import { createBrowserRouter } from "react-router-dom";
import ViewLogin from "../views/ViewLogin";
import ViewHome from "../views/ViewHome";
import ViewRegister from "../views/ViewRegister";
import ViewClass from "../views/ViewClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewHome />,
  },
  {
    path: "/login",
    element: <ViewLogin />,
  },
  {
    path: "register",
    element: <ViewRegister />,
  },
  {
    path: "/class",
    element: <ViewClass />,
  },
]);
