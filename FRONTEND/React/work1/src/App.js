import React, { useState } from "react";

function App() {
  //합치기
  const [user, setUser] = useState({ score: 0, name: "Alice" });

  // 점수 함수
  const incrementScore = () => {
    setUser(prevUser => ({
      ...prevUser,
      score: prevUser.score + 1,
    }));
  };

  // 이름 함수
  const changeName = () => {
    setUser(prevUser => ({
      ...prevUser,
      name: prevUser.name === "Alice" ? "Bob" : "Alice",
    }));
  };

  return (
    <div>
      <h1>점수: {user.score}</h1>
      <button onClick={incrementScore}>Increase Score</button>
      <h2>이름: {user.name}</h2>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
