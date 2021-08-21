import React from "react";
import styled from "styled-components";

import TodoTimer from 'components/todo/template/head/timer/TodoTimer';

const TodoHead = (): JSX.Element => {
  return (
    <TodoHeadBlock>
      <TodoTimer/>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);

const TodoHeadBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 135px;
  border-bottom: 3px solid ${({theme}) => theme.colors.secondary};
`;
