import { createGlobalStyle, css } from "styled-components";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${theme.colors.background};
      color: ${theme.colors.onBackground};
    }
  `}
`;

export default GlobalStyle;
