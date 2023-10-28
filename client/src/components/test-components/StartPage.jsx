import React from "react";
import "../../css/test-component-css/StartPage.css";

function StartPage({ dispatch }) {
  return (
    <div className="main-container">
      <h2>Welcome to the Test</h2>
      <ul className="instructions">
        <li>Dont cheat</li>
        <li>Be fair</li>
        <li>Dont switch tabs</li>
        <li>Dont close the window</li>
        <li>All the best</li>
      </ul>
      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "startTest" })}
      >
        Start Test
      </button>
    </div>
  );
}

export default StartPage;
