/* eslint-disable import/extensions */
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
