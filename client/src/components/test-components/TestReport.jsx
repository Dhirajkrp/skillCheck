import React from "react";

function TestReport({ questions }) {
  const score = questions.filter(
    (ques) => ques.answer === ques.selectedOption
  ).length;
  return <div>Your score is : {score} </div>;
}

export default TestReport;
