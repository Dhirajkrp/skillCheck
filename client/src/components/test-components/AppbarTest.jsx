import React from "react";
import "../../css/appbar.css";
import Timer from "./Timer";

function AppbarTest({ dispatch, secondsRemaining }) {
  return (
    <>
      <span>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      </span>
      <div className="user-card">
        <button
          className="btn-success"
          onClick={() => dispatch({ type: "submitTest" })}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default AppbarTest;
