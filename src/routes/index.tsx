/* eslint-disable react/jsx-filename-extension */
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import RequireAuth from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
