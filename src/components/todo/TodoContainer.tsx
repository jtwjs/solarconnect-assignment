import { useTodo } from "utils/hooks/useTodo";
import TodoTemplate from "components/todo/template/TodoTemplate";
import TodoHead from "components/todo/template/head/TodoHead";
import TodoList from "components/todo/template/list/TodoList";
import TodoCreate from "components/todo/template/create/TodoCreate";
import TodoFooter from "components/todo/template/footer/TodoFooter";

type TodoContainerProps = {
  isDarkMode: boolean,
  toggleDarkTheme: () => void,
}

const TodoContainer = ({isDarkMode, toggleDarkTheme}: TodoContainerProps): JSX.Element => {
  const {
    todoList,
    toggleTodo,
    removeTodo,
    createTodo,
  } = useTodo();

  return (
    <>
      <TodoTemplate
        isDarkMode={isDarkMode}
        toggleDarkTheme={toggleDarkTheme}
      >
        <TodoHead />
        <TodoCreate createTodo={createTodo}/>
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={todoList}
        />
        <TodoFooter todos={todoList} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
