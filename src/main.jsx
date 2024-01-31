import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/index.jsx";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import UseUser from "./Hooks/useUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseUser>
      <RouterProvider router={router} />
    </UseUser>
  </React.StrictMode>
);
