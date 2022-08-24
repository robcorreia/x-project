/* eslint-disable import/extensions */
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <h1>Hello</h1>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
