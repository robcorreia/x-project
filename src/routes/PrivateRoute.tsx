import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getUserSessionStorage } from "../utils/sessionStorage";

export default function PrivateRoutes() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const userActived = getUserSessionStorage();
    if (userActived) {
      setUser(userActived);
      navigate("/");
    }
  }, []);
  const { user } = useAuth();

  return user.email && user.password ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}
