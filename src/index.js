import React from 'react';
import {ThemeProvider} from 'styled-components';
import ReactDOM from 'react-dom';

import {GlobalStyle} from "styles/global-style";
import {theme} from "styles/theme";
import App from 'App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
	  <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);