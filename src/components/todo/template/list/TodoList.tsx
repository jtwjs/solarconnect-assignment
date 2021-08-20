import React from "react";
import styled from "styled-components";

import TodoItem from "components/todo/template/list/item/TodoItem";
import { Itodo } from "utils/hooks/useTodo";

interface TodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({ toggleTodo, removeTodo, todos }: TodoListProps) => {
  return (
    <TodoListBlock>
	    <h2 className="a11y">Todo 목록</h2>
      {todos &&
      todos.map((todo) => (
        <TodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);

const TodoListBlock = styled.section`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;