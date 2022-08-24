/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  const auth = useAuth();

  return (
    <>
      {" "}
      {!auth.user.email && !auth.user.password ? (
        <Navigate to="/" state={{ path: location.pathname }} />
      ) : (
        children
      )}
    </>
  );
}

export default RequireAuth;
