import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./assets/css/TodoItem.css";
import x from "./assets/icons/x.svg";

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const { id, task, done } = todo;
  const [inputTask, setInputTask] = useState(task);
  const textareaRef = useRef(null);
  const classNames = ["todo-item"].concat(done ? "done" : "");

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [inputTask]);

  const onEnterPress = (e) => {
    if (e.key.toLowerCase() === "enter") {
      e.target.blur();
    }
  };

  const onInputBlur = () => {
    if (inputTask.trim().length === 0) {
      onDelete(id);
    } else {
      onEdit(id, inputTask);
    }
  };

  return (
    <li className={classNames.join(" ")}>
      <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
      <textarea
        type="text"
        ref={textareaRef}
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        onBlur={onInputBlur}
        onKeyPress={onEnterPress}
      />
      <button type="button" onClick={() => onDelete(id)}>
        <img src={x} alt="Delete" />
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    done: PropTypes.bool,
  }).isRequired,
};
