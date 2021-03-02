/**
 * @file Config File for styled-component + TS
 * @author sadamian
 */

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
