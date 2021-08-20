import React from "react";
import styled, { css } from "styled-components";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";

import { Itodo } from "utils/hooks/useTodo";

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const {id, text, targetDate, done} = todo;
  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <TargetDateWrap done={done}>
        목표일:
        <TargetDate >{targetDate}</TargetDate>
      </TargetDateWrap>
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.color.primary};
  font-size: 16px;
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.color.secondary};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
  props.done &&
  css`
      border: 1px solid ${({theme}) => theme.color.gray};
      color: ${({theme}) => theme.color.gray};
    `}
`;
const doneTextMixin = css`
  color: #ced4da;
  text-decoration: line-through;
`;
const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: ${({theme}) => theme.color.primary};
  ${({done}) => done && doneTextMixin }
`;
const TargetDateWrap = styled.div<{ done: boolean}>`
  display: flex;
  margin-right: 10px;
  color: ${({theme}) => theme.color.primary};
  ${({done}) => done && doneTextMixin }
`;
const TargetDate = styled.time`
  display: block;
  margin-left: 5px;
  font-weight: 700;
`;