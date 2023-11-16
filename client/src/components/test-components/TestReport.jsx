import React from "react";
import "../../css/test-component-css/TestReport.css"

// Import React and any other necessary modules

// Import React and any other necessary modules

function TestReport({ questions }) {
  const topics = {};
  // Create a map to group questions by tags
  const tagGroups = {};

  questions.forEach((question) => {
    question.tags.forEach((tag) => {
      if (!tagGroups[tag]) {
        tagGroups[tag] = {
          name: tag,
          totalQuestions: 0,
          totalCorrect: 0,
        };
      }

      tagGroups[tag].totalQuestions++;

      if (question.answer === question.selectedOption) {
        tagGroups[tag].totalCorrect++;
      }
    });
  });

  // Convert the map to an array of topics
  for (const tag in tagGroups) {
    topics[tag] = tagGroups[tag];
  }

  const score = questions.filter(
    (ques) => ques.answer === ques.selectedOption
  ).length;

  return (
    <div className="report">
      <nav>
        <h1>Test Report</h1>
      </nav>
      <section>
        <div>Your score is: {score}</div>
        <h3>Questions</h3>
        <table>
          <thead>
            <tr>
              <th>SNO</th>
              <th>Question</th>
              <th>Attempted</th>
              <th>Correct</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((ques, index) => {
              const isAnsweredClass = ques.isAnswered ? 'yes' : 'no';
              const isCorrectClass =
                ques.answer === ques.selectedOption ? 'yes' : 'no';

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ques.question}</td>
                  <td className={isAnsweredClass}>
                    {ques.isAnswered ? 'Yes' : 'No'}
                  </td>
                  <td className={isCorrectClass}>
                    {ques.answer === ques.selectedOption ? 'Yes' : 'No'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3>Topics</h3>
        <table>
          <thead>
            <tr>
              <th>SNO</th>
              <th>Topic</th>
              <th>Total Questions</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(topics).map((tag, index) => {
              const topic = topics[tag];
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{topic.name}</td>
                  <td>{topic.totalQuestions}</td>
                  <td>{topic.totalCorrect}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TestReport;

