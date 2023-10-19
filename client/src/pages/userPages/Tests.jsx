import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { questions } from "../../assets/questions";
import Appbar from "../../components/Appbar";
import TestNav from "../../components/TestNav";

function Test() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  TestNav;
  const testType = searchParams.get("type");
  const topic = searchParams.get("option");
  const testDuration = searchParams.get("duration");

  const questionList = questions
    .filter((ques) => ques.tags.includes(topic))
    .map((ques, i) => {
      return { ...ques, index: i + 1 };
    });
  //setting up the initial states.

  const [currentQuestion, setCurrentQuestion] = useState(0);

  console.log(questionList);
  // Now, you can use the retrieved parameters in your component as needed
  // For example, you can display them in your component's JSX
  return (
    <>
      <div className="page-layout">
        <div className="navbar">
          <TestNav questions={questionList} />
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
              {/* Other test page content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
