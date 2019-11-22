import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
  }
};

const VisibleTodoList = () => {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const todos = useSelector(state => state.todos);
  const todosProp = getVisibleTodos(todos, visibilityFilter);

  const onTodoClick = useCallback(
    id => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );
  return <TodoList onTodoClick={onTodoClick} todos={todosProp} />;
};

export default VisibleTodoList;
