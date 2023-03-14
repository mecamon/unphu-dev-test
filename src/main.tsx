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
import { ViewModeProvider } from "./providers/view-mode-provider";
import { store } from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={
        <ViewModeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ViewModeProvider>
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
