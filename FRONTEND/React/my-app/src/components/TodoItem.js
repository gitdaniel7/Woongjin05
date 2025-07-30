// src/components/TodoItem.js
import React from "react";

function TodoItem({ text, onDelete }) {
  return (
    <li style={{ marginBottom: "8px" }}>
      {text}
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
