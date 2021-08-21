import React from "react";
import styled, {css} from "styled-components";
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons";

import {Itodo} from "utils/hooks/useTodo";

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  id: Itodo['id'],
  text: Itodo['text'],
  targetDate: Itodo['targetDate'],
  done: Itodo['done']
}

const TodoItem = ({toggleTodo, removeTodo, id, text, targetDate, done}: TodoItemProps): JSX.Element => {
  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle
        type="button"
        done={done}
        onClick={handleToggle}
        aria-label="완료 버튼"
      >
        {done && <CheckOutlined/>}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <TargetDateWrap done={done}>
        <TargetDateTitle>목표일:</TargetDateTitle>
        <TargetDateDesc>
          <TargetDate>{targetDate}</TargetDate>
        </TargetDateDesc>
      </TargetDateWrap>
      <Remove
        type="button"
        onClick={handleRemove}
      >
        <DeleteOutlined/>
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.primary};
  font-size: 16px;
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

`;
const TodoItemBlock = styled.article`
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
const CheckCircle = styled.button<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  transition: transform 0.3s ease-in-out;

  ${(props) =>
          props.done &&
          css`
            border: 1px solid ${({theme}) => theme.colors.grayD};
            color: ${({theme}) => theme.colors.grayD};
          `}
  &:hover {
    transform: scale(1.2);
  }

  @media screen and ${({theme}) => theme.device.mobile} {
    margin-right: 10px;
  }
`;
const doneTextMixin = css`
  color: ${({theme}) => theme.colors.grayC};
  text-decoration: line-through;
`;
const Text = styled.h3<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary};
  text-overflow: ellipsis;
  overflow: hidden;
  ${({done}) => done && doneTextMixin}
`;
const TargetDateWrap = styled.dl<{ done: boolean }>`
  display: flex;
  margin-right: 10px;
  color: ${({theme}) => theme.colors.primary};
  ${({done}) => done && doneTextMixin}
`;
const TargetDateTitle = styled.dt`
  margin-right: 5px;
  @media screen and ${({theme}) => theme.device.mobile} {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`
const TargetDateDesc = styled.dd`
`

const TargetDate = styled.time`
  display: block;
  font-weight: 700;
`;