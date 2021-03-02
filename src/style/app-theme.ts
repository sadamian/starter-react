/**
 * @file Theme of the App
 * @description
 * All Styled Components can access to this theme
 */

import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "cyan",
    secondary: "magenta",
  },
  background: {
    color: "#f5f5f5",
  },
};

export { appTheme };
