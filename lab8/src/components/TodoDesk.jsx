/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoListButton from "./AddTodoListButton";
import Header from "./Header";
import NoTasksMessage from "./NoTasksMessage";
import "./assets/css/TodoDesk.css";

export default function TodoDesk() {
  const [todoLists, setTodoLists] = useState([]);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todoLists") || "[]");
    setTodoLists(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
  }, [todoLists]);

  const addNewTodoList = () => {
    const newTodoList = {
      id: Date.now(),
      todos: [],
      title: "Some tasks",
    };
    setTodoLists((prev) => [...prev, newTodoList]);
  };

  const deleteTodoList = (id) => {
    setTodoLists((prev) => prev.filter((todoList) => todoList.id !== id));
  };

  const editTodoList = (listId, newTitle) => {
    setTodoLists((prev) =>
      prev.map((todoList) =>
        listId === todoList.id
          ? { ...todoList, title: newTitle.trim() }
          : todoList
      )
    );
  };

  const addNewTodo = (listId, task) => {
    const newTodo = {
      id: Date.now(),
      task,
      done: false,
    };
    setTodoLists((prev) =>
      prev.map((todoList) =>
        todoList.id === listId
          ? { ...todoList, todos: [...todoList.todos, newTodo] }
          : todoList
      )
    );
  };

  const toggleTodo = (listId, todoId) => {
    setTodoLists((prev) =>
      prev.map((todoList) =>
        listId === todoList.id
          ? {
              ...todoList,
              todos: todoList.todos.map((todo) =>
                todo.id === todoId ? { ...todo, done: !todo.done } : todo
              ),
            }
          : todoList
      )
    );
  };

  const deleteTodo = (listId, todoId) => {
    setTodoLists((prev) =>
      prev.map((todoList) =>
        listId === todoList.id
          ? {
              ...todoList,
              todos: todoList.todos.filter((todo) => todo.id !== todoId),
            }
          : todoList
      )
    );
  };

  const editTodo = (listId, todoId, newTask) => {
    if (newTask.trim().length === 0) {
      return;
    }
    setTodoLists((prev) =>
      prev.map((todoList) =>
        listId === todoList.id
          ? {
              ...todoList,
              todos: todoList.todos.map((todo) =>
                todo.id === todoId ? { ...todo, task: newTask.trim() } : todo
              ),
            }
          : todoList
      )
    );
  };

  return (
    <div className="todo-desk-container">
      <Header>
        <AddTodoListButton addNewTodoList={addNewTodoList} />
      </Header>
      <div className="todo-desk">
        {todoLists.length !== 0 ? (
          todoLists.map((list) => (
            <TodoList
              todos={list.todos}
              listTitle={list.title}
              addNewTodo={addNewTodo.bind(null, list.id)}
              toggleTodo={toggleTodo.bind(null, list.id)}
              editTodo={editTodo.bind(null, list.id)}
              deleteTodo={deleteTodo.bind(null, list.id)}
              deletTodoList={deleteTodoList.bind(null, list.id)}
              editTodoList={editTodoList.bind(null, list.id)}
              key={list.id}
            />
          ))
        ) : (
          <NoTasksMessage />
        )}
      </div>
    </div>
  );
}
