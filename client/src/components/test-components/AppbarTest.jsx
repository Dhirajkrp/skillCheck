import React from "react";
import "../../css/appbar.css";

function AppbarTest({ dispatch }) {
  return (
    <>
      <span>page name</span>
      <div className="user-card">
        <button
          className="btn-primary"
          onClick={() => dispatch({ type: "submitTest" })}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default AppbarTest;
