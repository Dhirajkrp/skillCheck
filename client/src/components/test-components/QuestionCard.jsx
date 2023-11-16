import React from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import "../../css/test-component-css/QuestionCard.css"

function QuestionCard({ index, question, dispatch, numQuestions }) {
  return (
    <div className="QuestionCard">
      <h3>Question No:{index + 1}</h3>
      <p>Question: {question.question}</p>
      <br />
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option${index}`}
            name="ans"
            value={option}
            checked={index === question.selectedOption}
            onChange={() => dispatch({ type: "setAnswer", payload: index })}
          />
          <label htmlFor={`option${index}`}>
            {`${String.fromCharCode(65 + index)}) ${option}`}
          </label>
        </div>
      ))}

      <div className="cta-container">
        <PrevButton index={index} dispatch={dispatch} />
        <NextButton
          index={index}
          numQuestions={numQuestions}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default QuestionCard;
