import React from "react";
import "../../css/test-component-css/StartPage.css";

function StartPage({ dispatch }) {
  return (
    <div className="main-container">
      <h1>Welcome to the Test</h1>
      <br/>
      <h4>Read all instructions carefully!</h4>
      <br/>
      <ul className="instructions">
        <li>Read each question carefully before answering.</li>
        <li>Ensure a stable internet connection throughout the test.</li>
        <li>Answer all questions. Unanswered questions will not be scored.</li>
        <li>Double-check your answers before submitting the test.</li>
        <li>
          Do not use any external resources or assistance during the test.
        </li>
        <li>
          Keep track of the time. Monitor the test duration and pace yourself.
        </li>
        <li>Save your progress if the test allows for it.</li>
        <li>
          Follow any specific instructions provided for individual questions.
        </li>
        <li>
          Avoid switching tabs or opening other applications during the test.
        </li>
        <li>
          If technical issues arise, notify the test administrator immediately.
        </li>
        <li>Submit your test before the designated end time.</li>
      </ul>
      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "startTest" })}
      >
        Start Test
      </button>
    </div>
  );
}

export default StartPage;
