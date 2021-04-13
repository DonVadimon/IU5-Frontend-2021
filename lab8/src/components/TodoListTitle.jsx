import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./assets/css/TodoListTitle.css";

export default function TodoListTitle({ listTitle, editTodoList }) {
  const [inputTitle, setInputTitle] = useState(listTitle);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [inputTitle]);

  const onInputBlur = () => {
    if (inputTitle.trim().length !== 0) {
      editTodoList(inputTitle);
    }
  };

  const onEnterPress = (e) => {
    if (e.key.toLowerCase() === "enter") {
      e.target.blur();
    }
  };

  return (
    <div className="todo-list-title">
      <textarea
        type="text"
        ref={textareaRef}
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        onBlur={onInputBlur}
        onKeyPress={onEnterPress}
      />
    </div>
  );
}

TodoListTitle.propTypes = {
  listTitle: PropTypes.string.isRequired,
  editTodoList: PropTypes.func.isRequired,
};
