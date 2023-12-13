import React from "react";
import { useLocation } from "react-router-dom";

function LanguageReview() {
  const { state } = useLocation();
  const { langName, reports } = state;

  const data = reports.filter((report) => report.name === langName);

  function generateTopicSummary(filteredReports) {
    const topicSummary = {};

    filteredReports.forEach((report) => {
      const { topics } = report;

      topics.forEach((topic) => {
        const { name, totalQuestions, totalCorrect } = topic;

        if (!topicSummary[name]) {
          topicSummary[name] = {
            name,
            totalTests: 0,
            totalQuestions: 0,
            totalScore: 0,
          };
        }

        topicSummary[name].totalTests++;
        topicSummary[name].totalQuestions += totalQuestions;
        topicSummary[name].totalScore += totalCorrect;
      });
    });

    const topicArray = Object.values(topicSummary).map((topic) => {
      const overallPercentage =
        (topic.totalScore / (topic.totalTests * topic.totalQuestions)) * 100; // Calculate overall percentage

      return {
        name: topic.name,
        totalTests: topic.totalTests,
        totalQuestions: topic.totalQuestions,
        totalScore: topic.totalScore,
        overallPercentage,
      };
    });

    return topicArray;
  }

  const topics = generateTopicSummary(data);

  console.log(state);
  return (
    <div>
      <h3>Topics</h3>

      <div className="language-review-topics-card-container">
        {topics.map((topic) => (
          <TopicItem topic={topic} />
        ))}
      </div>
    </div>
  );
}

function TopicItem({ topic }) {
  let bgColor = "";
  if (topic.overallPercentage < 60) {
    bgColor = "language-review-item accuracy-low";
  } else if (topic.overallPercentage > 80) {
    bgColor = "language-review-item accuracy-high";
  } else {
    bgColor = "language-review-item";
  }
  return (
    <div className={bgColor}>
      <span>
        <strong>{topic.name} </strong>
      </span>
      <span> Total Questions: {topic.totalQuestions} </span>
      <span> Accuracy : {topic.overallPercentage}% </span>
    </div>
  );
}

export default LanguageReview;
