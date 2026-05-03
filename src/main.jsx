import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import User from "./pages/User.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route index element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/user-details" element={<User />}></Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>,
);
