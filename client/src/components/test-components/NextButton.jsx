import React from "react";
import "../../css/test-component-css/NextButton.css"
function NextButton({ index, numQuestions, dispatch }) {
  if (index >= numQuestions - 1) return;
  return (
    <button
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
