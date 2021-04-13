import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import TodoAddForm from "./TodoAddForm";
import TodoListTitle from "./TodoListTitle";
import "./assets/css/TodoList.css";

export default function TodoList({
  todos,
  listTitle,
  addNewTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  deletTodoList,
  editTodoList,
}) {
  return (
    <div className="todo-list-container">
      <TodoListTitle listTitle={listTitle} editTodoList={editTodoList} />
      <TodoAddForm addHandler={addNewTodo} />
      <ul className="todo-list">
        {todos.map(({ id, task, done }) => (
          <TodoItem
            todo={{ id, task, done }}
            key={id}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      <button type="button" className="delete-list" onClick={deletTodoList}>
        Delete
      </button>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      task: PropTypes.string,
      done: PropTypes.bool,
    })
  ).isRequired,
  listTitle: PropTypes.string.isRequired,
  addNewTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deletTodoList: PropTypes.func.isRequired,
  editTodoList: PropTypes.func.isRequired,
};
