import React from "react";
import styled from "styled-components";

import { Itodo } from "utils/hooks/useTodo";

interface HooksTodoHeadProps {
  todos: Itodo[];
}

const TodoFooter = ({ todos }: HooksTodoHeadProps) => {
  const undoneTasks = todos?.filter((todo) => !todo.done);
  return (
    <TodoFooterBlock>
      <LeftText>
        <Count>{undoneTasks?.length}</Count>
	      items left
      </LeftText>
    </TodoFooterBlock>
  );
};

export default React.memo(TodoFooter);

const TodoFooterBlock = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;
const LeftText = styled.div`
  color: ${({theme}) => theme.color.secondary};
  font-size: 18px;
`;
const Count = styled.strong`
	margin-right: 5px;
`