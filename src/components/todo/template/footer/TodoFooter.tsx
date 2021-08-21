import React from "react";
import styled from "styled-components";

import { Itodo } from "utils/hooks/useTodo";

type HooksTodoHeadProps = {
  todos: Itodo[];
}

const TodoFooter = ({ todos }: HooksTodoHeadProps): JSX.Element => {
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
  padding: 24px 0;
  
  @media screen and ${({theme}) => theme.device.mobile} {
    padding: 16px 0;	
  }
`;
const LeftText = styled.div`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 18px;
`;
const Count = styled.strong`
  margin-right: 5px;
`