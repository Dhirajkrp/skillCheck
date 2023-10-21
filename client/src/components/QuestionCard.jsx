import React from "react";

function QuestionCard({ question }) {
  return (
    <div className="QuestionCard">
      <h3>Question No:{question.index}</h3>
      <p>Question: {question.question}</p>
      <br />
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            name="ans"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <label htmlFor={`option${index}`}>{`${String.fromCharCode(
            65 + index
          )}) ${option}`}</label>
        </div>
      ))}

      {/* <Button
        onClick={handlePreviousClick}
        css={`
          ${qNumber === 0 ? "button-hide" : "button button-previous"}
        `}
      >
        Previous
      </Button>
      <Button
        onClick={saveAnswer}
        css={`
          ${qNumber === questions.length ? "button-hide" : "button"}
        `}
      >
        Save & Next
      </Button>
       */}
    </div>
  );
}

export default QuestionCard;
