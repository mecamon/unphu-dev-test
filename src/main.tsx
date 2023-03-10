import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.scss";
import DashboardPage from "./pages/dashboard-page";
import LoginPage from "./pages/login-page";
import { AuthProvider } from "./providers/auth-provider";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={
        <AuthProvider>
          <App />
        </AuthProvider>
      }
    >
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardPage />} index />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
