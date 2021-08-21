import React, {useState, useCallback, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import "antd/dist/antd.css";

import {GlobalStyle} from "styles/global-style";
import {lightTheme, darkTheme} from "styles/theme";
import {darkModeStorage} from "utils/storage";
import Spinner from "components/common/Spinner";
import TodoContainer from "components/todo/TodoContainer";


function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  //@TODO login
  let isLogged = true;

  const toggleDarkTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  },[]);

  useEffect(() => {
    const value = darkModeStorage.load();
    value && setDarkMode(value);
  },[]);

  useEffect(() => {
    darkModeStorage.save(darkMode);
  },[darkMode]);

  const RenderLayout = (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <TodoContainer
        isDarkMode={darkMode}
        toggleDarkTheme={toggleDarkTheme}
      />
    </ThemeProvider>
  );

  return isLogged ? RenderLayout : <Spinner mask/>;
}

export default App;
