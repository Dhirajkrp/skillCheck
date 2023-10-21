import React from "react";

function TestNav({ questions, setQuestion }) {
  return (
    <>
      <div className="sidebar-header">
        <span className="sidebar-logo">Logo</span>
      </div>
      <ul className="questions-icon-container">
        {questions.map((question) => {
          return (
            <li key={question._id} index={question.index}>
              <button
                className="question-index-btn"
                onClick={() => setQuestion(question.index)}
              >
                {question.index}{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TestNav;
