import React from "react";

function TestReport({ questions }) {
  const topics = [];
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
    topics.push(tagGroups[tag]);
  }

  console.log(topics);

  const score = questions.filter(
    (ques) => ques.answer === ques.selectedOption
  ).length;
  return (
    <section>
      <div>Your score is : {score} </div>;<h3>Questions</h3>
      <table>
        <tr>
          <th>SNO</th>
          <th>Question</th>
          <th>Attempted</th>
          <th>Correct</th>
        </tr>

        {questions.map((ques, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{ques.question}</td> <td>{ques.isAnswered ? "Yes" : "No"}</td>
              <td>{ques.answer === ques.selectedOption ? "Yes" : "No"}</td>
            </tr>
          );
        })}
      </table>
      <h3>Topics</h3>
      <table>
        <tr>
          <th>SNO</th>
          <th>Topic</th>
          <th>Total Questions</th>
          <th>Score</th>
        </tr>

        {topics.map((topic, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{topic.name}</td> <td>{topic.totalQuestions}</td>
              <td>{topic.totalCorrect}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}

export default TestReport;
