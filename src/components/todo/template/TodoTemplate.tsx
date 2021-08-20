import React from "react";
import styled from "styled-components";

interface todoTemplateProps {
	children: React.ReactNode,
}

function TodoTemplate({children}: todoTemplateProps): JSX.Element {
  return (
    <TodoTemplateBlock>
      <Container>
	      <h1 className="a11y">TodoList</h1>
        {children}
      </Container>
    </TodoTemplateBlock>
  )
}

export default React.memo(TodoTemplate);

const TodoTemplateBlock = styled.main`
  position: relative;
	display: flex;
	align-items: center;
	min-height: 100vh;
	padding: 20px 0;
`;
const Container = styled.article`
	width: 70%;
  min-width: 360px;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 30px;
  background: ${({theme}) => theme.color.white};
	box-shadow: ${({theme}) => theme.boxShadow.section};
`;