import React, { useState } from "react";

function App() {
  const [headingTitle, setOnclick] = useState("hello");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleOclick() {
    setOnclick("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingTitle}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleOclick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
