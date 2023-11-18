import React from "react";
import "../../css/appbar.css";
import Timer from "./Timer";

function AppbarTest({ dispatch, secondsRemaining, score }) {
  return (
    <>
      <span>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      </span>
      <div className="user-card">
        <button
          className="btn-primary"
          onClick={() => dispatch({ type: "submitTest" })}
        >
          Submit
        </button>
        <h1>{score}</h1>
      </div>
    </>
  );
}

export default AppbarTest;
