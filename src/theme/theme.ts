import originalStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {};

export const styled = originalStyled as ThemedStyledInterface<typeof theme>;
