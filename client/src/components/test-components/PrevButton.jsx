import React from "react";

function PrevButton({ index, dispatch }) {
  if (index <= 0) return;
  return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch({ type: "prevQuestion" })}
    >
      Previous
    </button>
  );
}

export default PrevButton;
