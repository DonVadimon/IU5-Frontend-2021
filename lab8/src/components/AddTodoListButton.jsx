import PropTypes from "prop-types";
import React from "react";
import "./assets/css/AddTodoListButton.css";
import addIcon from "./assets/icons/plus-square.svg";

export default function AddTodoListButton({ addNewTodoList }) {
  return (
    <div className="add-todo-list-container">
      <button type="button" className="add-todo-list" onClick={addNewTodoList}>
        <img src={addIcon} alt="add-todo-list" />
      </button>
    </div>
  );
}

AddTodoListButton.propTypes = {
  addNewTodoList: PropTypes.func.isRequired,
};
