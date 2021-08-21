import React from "react";
import styled from "styled-components";

import ToggleBtn from "components/common/ToggleBtn";

type TodoTemplateProps = {
  isDarkMode: boolean,
  toggleDarkTheme: () => void,
  children: React.ReactNode,
}

function TodoTemplate({isDarkMode, toggleDarkTheme, children}: TodoTemplateProps): JSX.Element {
  return (
    <Wrapper>
      <StyledToggleBtn
        id='toggle-theme'
        label="다크모드 토글 버튼"
        checked={isDarkMode}
        onChange={toggleDarkTheme}
      />
      <TodoTemplateBlock>
        <h1 className="a11y">TodoList</h1>
        {children}
      </TodoTemplateBlock>
    </Wrapper>
  )
}

export default React.memo(TodoTemplate);

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 20px 0;
`;

const TodoTemplateBlock = styled.article`
  width: 70%;
  min-width: 300px;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 30px;
  background: ${({theme}) => theme.colors.bgInner};
  box-shadow: ${({theme}) => theme.boxShadow.section};
`;

const StyledToggleBtn = styled(ToggleBtn)`
  margin-bottom: 20px;
`