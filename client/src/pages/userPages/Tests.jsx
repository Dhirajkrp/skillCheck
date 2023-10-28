import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";

import { questions } from "../../assets/questions";
import AppbarTest from "../../components/test-components/AppbarTest";
import QuestionCard from "../../components/test-components/QuestionCard";
import TestNav from "../../components/test-components/TestNav";
import TestReport from "../../components/test-components/TestReport";

function Test() {
  //getting the information about the test
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const testType = searchParams.get("type");
  const topic = searchParams.get("option");
  const testDuration = searchParams.get("duration");

  //fetch the questions from the database to the questions variable.
  const questionList = questions
    .filter((ques) => ques.tags.includes(topic))
    .map((ques) => {
      return {
        ...ques,
        isAnswered: false,
        selectedOption: null,
      };
    });

  const initialState = {
    questions: questionList,
    index: 0,
    answer: null,
    isAnswered: false,
    status: "active",
  };

  const numQuestions = questionList.length;

  const reducer = function (state, action) {
    let currIndex;
    switch (action.type) {
      case "setQuestion":
        currIndex = action.payload;
        return {
          ...state,
          index: currIndex,
          isAnswered: state.questions.at(currIndex).isAnswered,
          answer: state.questions.at(currIndex).selectedOption,
        };
      case "setAnswer":
        state.questions.at(state.index).isAnswered = true;
        state.questions.at(state.index).selectedOption = action.payload;
        return {
          ...state,
          answer: state.questions.at(state.index).selectedOption,
          isAnswered: true,
        };

      case "nextQuestion":
        currIndex = state.index + 1;
        return {
          ...state,
          index: currIndex,
          isAnswered: state.questions.at(currIndex).isAnswered,
          answer: state.questions.at(currIndex).selectedOption,
        };
      case "prevQuestion":
        currIndex = state.index - 1;
        return {
          ...state,
          index: currIndex,
          isAnswered: state.questions.at(currIndex).isAnswered,
          answer: state.questions.at(currIndex).selectedOption,
        };
      case "submitTest":
        return {
          ...state,
          status: "finished",
        };
      default:
        throw new Error("Not a valid action for the reducer");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="page-layout">
        <div className="navbar">
          {state.status === "active" && (
            <TestNav questions={state.questions} dispatch={dispatch} />
          )}
        </div>

        <div className="content">
          <div className="appbar">
            <AppbarTest dispatch={dispatch} />
          </div>
          <div className="main">
            {state.status === "active" && (
              <QuestionCard
                index={state.index}
                question={state.questions.at(state.index)}
                answer={state.answer}
                dispatch={dispatch}
                numQuestions={numQuestions}
              />
            )}

            {state.status === "finished" && (
              <TestReport questions={state.questions} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Test;
