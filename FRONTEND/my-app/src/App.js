import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (trimmed === "") {
      alert("값을 입력해주세요!");
      return;
    }

    setTodoList([...todoList, trimmed]);
    setInputValue("");
  };

  const handleDelete = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>✅ 할 일 목록</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flexGrow: 1, padding: "5px" }}
        />
        <button onClick={handleAdd}>추가</button>
      </div>

      <ul style={{ paddingLeft: "0", listStyle: "none" }}>
        {todoList.map((todo, index) => (
          <TodoItem key={index} text={todo} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
