/* eslint-disable react/jsx-filename-extension */
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import { MyAccount } from "../pages/MyAccount";
import { NotFoundPage } from "../pages/NotFound";
import { Products } from "../pages/Products";
import PrivateRoutes from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />}>
          <Route index element={<MyAccount />} />
          <Route path="products" element={<Products />} />
          <Route path="my-account" element={<MyAccount />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
