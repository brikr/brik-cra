import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello!</h1>
    </ThemeProvider>
  );
};

export default App;
