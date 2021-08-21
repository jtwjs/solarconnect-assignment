/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useState} from "react";

import {todoStorage} from "utils/storage";

export interface Itodo {
  id: number;
  text: string;
  targetDate: string;
  done: boolean;
};

interface IuseTodo {
  todoList: Itodo[],
  toggleTodo: (id: number) => void,
  removeTodo: (id: number) => void,
  createTodo: (todo: Itodo) => void,
};

let initialTodos: Itodo[] = [];

export const useTodo = (): IuseTodo => {
  const [todoList, setTodoList] = useState<Itodo[]>(initialTodos);

  useEffect(() => {
    todoStorage.load() && setTodoList(todoStorage.load());
  }, []);

  useEffect(() => {
    todoStorage.save(todoList);
  }, [todoList]);

  const toggleTodo = useCallback((id: number) => {
    setTodoList(prev => {
      return prev.map(todo => {
        todo.id === id && (todo.done = !todo.done);
        return todo
      })
    });
  }, []);

  const removeTodo = useCallback((id: number) => {
    setTodoList((prev) =>
      prev.filter((todo: Itodo) => todo.id !== id)
    );
  }, []);

  const createTodo = useCallback((todo: Itodo) => {
    setTodoList(prev => [...prev, todo]);
  }, []);

  return {
    todoList,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
