import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { api } from "../lib/axios";
import { setUserSessionStorage } from "../utils/sessionStorage";

interface Data {
  product: string;
  quantity: number;
  price: string;
  type: string;
  industry: string;
  origin: string;
}
interface User {
  email: string;
  password: string;
}
interface AuthContextProps {
  user: User;
  data: Data[];
  setUser: React.Dispatch<React.SetStateAction<User>>;
  fetchData: (query?: string) => Promise<void>;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [data, setData] = useState<Data[]>([]);

  const login = (user: User) => {
    setUser(user);
    setUserSessionStorage(user);
  };

  const logout = () => {
    setUser({ email: "", password: "" });
    sessionStorage.clear();
  };

  const fetchData = useCallback(async (query?: string) => {
    const response = await api.get("data", {
      params: {
        q: query,
      },
    });
    setData(response.data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, fetchData, setUser, login, data, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
