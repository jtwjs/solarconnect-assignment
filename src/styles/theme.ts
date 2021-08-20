import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    primary: "#119955",
    secondary: "#33bb77",
    black: "#191A20",
    white: "#fff",
	  grayC: "#ced4da",
    grayD: "#ddd",
	  grayE: "#eee",

  },
	boxShadow: {
  	input: "0 0 0 2px rgb(17 153 85 / 20%)",
		section: "0 0 50px 0 rgba(0, 0, 0, 0.1)",
	},
	device: {
  	mobile: `(max-width: 768px)`,
	}
};

export { theme };