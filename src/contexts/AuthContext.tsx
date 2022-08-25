import { useState, createContext, useContext, ReactNode } from "react";
import { api } from "../lib/axios";
import { setUserSessionStorage } from "../utils/sessionStorage";

interface User {
  email: string;
  password: string;
}
interface AuthContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
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
    setUserSessionStorage(user);
  };

  const logout = () => {
    setUser({ email: "", password: "" });
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
