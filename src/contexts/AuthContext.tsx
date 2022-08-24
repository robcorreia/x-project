/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/naming-convention */
import { useState, createContext, useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}
interface AuthContextProps {
  user: User;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({ email: "", password: "" });

  const login = (user: User) => {
    setUser(user);
    sessionStorage.setItem("user", String(user.email));
  };

  const logout = () => {
    setUser({ email: "", password: "" });
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
