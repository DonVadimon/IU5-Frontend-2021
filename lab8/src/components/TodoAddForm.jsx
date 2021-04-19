import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import "./assets/css/TodoAddForm.css";

export default function TodoAddForm({ addHandler }) {
  const [task, setTask] = useState("");
  const textareaRef = useRef(task);

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [task]);

  const onInputChange = (e) => {
    setTask(e.target.value);
  };

  const onAdd = () => {
    if (task.trim().length === 0) {
      return;
    }
    addHandler(task);
  };

  const onEscapePress = (e) => {
    if (e.key.toLowerCase() === "escape") {
      e.target.blur();
    }
  };

  const onEnterPress = (e) => {
    if (e.key.toLowerCase() === "enter") {
      onAdd();
      setTask("");
    }
  };

  const onAddBtnClick = () => {
    onAdd();
    setTask("");
  };

  return (
    <div className="todo-add-form">
      <div className="new-todo-wrapper">
        <textarea
          type="text"
          ref={textareaRef}
          name="new-todo"
          placeholder="New Task"
          onChange={onInputChange}
          value={task}
          onKeyPress={onEnterPress}
          onKeyUp={onEscapePress}
        />
      </div>
      <button type="button" onClick={onAddBtnClick}>
        Add
      </button>
    </div>
  );
}

TodoAddForm.propTypes = {
  addHandler: PropTypes.func.isRequired,
};
