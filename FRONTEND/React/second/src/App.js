import React, { useState } from "react";
import ClassComponent from "./ClassComponent";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>리액트 라이프사이클 실습</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "컴포넌트 숨기기" : "컴포넌트 보이기"}
      </button>

      <hr />

      {show && (
        <>
          <ClassComponent />
        </>
      )}
    </div>
  );
};

export default App;
