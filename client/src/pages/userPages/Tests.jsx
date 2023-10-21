import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { questions } from "../../assets/questions";
import Appbar from "../../components/Appbar";
import QuestionCard from "../../components/QuestionCard";
import TestNav from "../../components/TestNav";

function Test() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  TestNav;
  const testType = searchParams.get("type");
  const topic = searchParams.get("option");
  const testDuration = searchParams.get("duration");

  //fetch the questions from the database to the questions variable.
  const questionList = questions
    .filter((ques) => ques.tags.includes(topic))
    .map((ques, i) => {
      return {
        ...ques,
        index: i + 1,
        isAttempted: false,
        selectedOption: null,
      };
    });
  //setting up the initial states.

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleQuestionChange = (index) => {
    setCurrentIndex(index);
    setCurrentQuestion(questionList[currentIndex]);
    setSelectedOption(currentQuestion.selectedOption);
  };

  const saveQuestion = () => {
    if (selectedOption === null) return;
    questionList[currentIndex].selectedOption = selectedOption;
    questionList[currentIndex].isAttempted = true;

    let isAttempted = true;
    if (selectedOption === null) {
      isAttempted = false;
    }
    const newAnswer = {
      questionId: currentQuestion._id,
      tags: currentQuestion.tags,
      isCorrect: selectedOption === currentQuestion.answer,
      isAttempted,
    };

    const alreadyAnswered = answers.find(
      (ans) => ans._id === currentQuestion._id
    );

    if (alreadyAnswered) {
      setAnswers([
        ...answers.filter((ans) => ans._id !== alreadyAnswered._id),
        newAnswer,
      ]);
    } else {
      setAnswers([...answers, newAnswer]);
    }
  };

  const nextQuestion = () => {
    if (currentIndex === questionList.length) return;
    //no options are selected so we dont need to save the current question.
    saveQuestion();
    handleQuestionChange(currentIndex + 1);
  };

  // Now, you can use the retrieved parameters in your component as needed
  // For example, you can display them in your component's JSX
  return (
    <>
      <div className="page-layout">
        <div className="navbar">
          <TestNav
            questions={questionList}
            setQuestion={handleQuestionChange}
          />
        </div>

        <div className="content">
          <div className="appbar">
            <Appbar />
          </div>

          <div className="main">
            <div>
              <h2>Test Details</h2>
              <p>Test Type: {testType}</p>
              <p>Selected Option: {topic}</p>
              <p>Test Duration: {testDuration}</p>
              <p>current question : {currentQuestion}</p>
              <QuestionCard question={currentQuestion} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
