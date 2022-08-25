import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { useCallback, useEffect } from "react";
import { getProducts } from "./store/Products.store";
import { useAppDispatch } from "./hooks/useReducers";

function App() {
  const dispatch = useAppDispatch();

  const fetchData = useCallback(
    async (query?: string) => {
      await dispatch(getProducts());
    },
    [dispatch]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
