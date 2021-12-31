import originalStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  colors: {
    background: "#ffffff",
    onBackground: "#000000",
  },
};

export type Theme = typeof theme;

export const styled = originalStyled as ThemedStyledInterface<typeof theme>;
