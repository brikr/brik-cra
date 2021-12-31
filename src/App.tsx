import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./theme/global-style";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello!</h1>
    </ThemeProvider>
  );
};

export default App;
