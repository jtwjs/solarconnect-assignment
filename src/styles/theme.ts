import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#119955",
    secondary: "#33bb77",
    grayC: "#ced4da",
    grayD: "#ddd",
    bgOuter: "#eee",
    bgInner: "#fff",
    bgInput: "#fefefe",
  },
  boxShadow: {
    input: "0 0 0 2px rgb(17 153 85 / 20%)",
    section: "0 0 50px 0 rgba(0, 0, 0, 0.1)",
  },
  device: {
    mobile: `(max-width: 768px)`,
  }
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#119955",
    secondary: "#33bb77",
    grayC: "#ced4da",
    grayD: "#ddd",
    bgOuter: "#2d333b",
    bgInner: "#22272e",
    bgInput: "#333B47",
  },
  boxShadow: {
    input: "0 0 0 2px rgb(17 153 85 / 20%)",
    section: "0 0 50px 0 rgba(0, 0, 0, 0.1)",
  },
  device: {
    mobile: `(max-width: 768px)`,
  }
}

export { lightTheme, darkTheme };