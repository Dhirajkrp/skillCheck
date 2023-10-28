import React from "react";

function NextButton({ index, numQuestions, dispatch }) {
  if (index >= numQuestions - 1) return;
  return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
