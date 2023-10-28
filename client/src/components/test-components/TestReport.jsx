import React from "react";

function TestReport({ questions }) {
  const score = questions.fliter((ques) => ques.answer === selectedOption);
  return <div>Your score is : {score} </div>;
}

export default TestReport;
