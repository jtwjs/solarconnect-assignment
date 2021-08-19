import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
      gray: string;
    }
  }
}