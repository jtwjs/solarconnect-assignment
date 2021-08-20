/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  targetDate: string;
  done: boolean;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Itodo[]>(initialTodos);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoList]);

  const toggleTodo = (id: number) => {
    const newTodoState = todoList.map(todo => {
      todo.id === id && (todo.done = !todo.done);

      return todo;
    })
    setTodoList(newTodoState);
  };

  const removeTodo = (id: number) => {
    setTodoList((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
    setTodoList([...todoList, todo]);
  };

  const loadData = () => {
    const data = localStorage.getItem("todos");
    if (data == undefined) {
      saveData();
      return;
    }
    initialTodos = JSON.parse(data);
    setTodoList(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  return {
    todoList,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
