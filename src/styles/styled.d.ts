import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      grayC: string;
      grayD: string;
      bgOuter: string;
      bgInner: string;
      bgInput: string;
    },
    boxShadow: {
      input: string;
      section: string;
    },
    device: {
      mobile: string;
    }
  }
}