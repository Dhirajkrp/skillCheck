import React from "react";

function TestNav({ questions, dispatch }) {
  return (
    <>
      <div className="sidebar-header">
        <span className="sidebar-logo">Logo</span>
      </div>
      <ul className="questions-icon-container">
        {questions.map((question, index) => {
          return (
            <li key={question._id}>
              <button
                className={`${
                  question.isAnswered
                    ? "question-index-btn attempted"
                    : "question-index-btn"
                }`}
                onClick={() =>
                  dispatch({ type: "setQuestion", payload: index })
                }
              >
                {index + 1}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TestNav;
