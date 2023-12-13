import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
function AdminDashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/reports")
      .then((res) => setReports(res.data))
      .catch((err) => console.log(err));
  }, []);

  function generateLanguageSummary(reports) {
    const languageSummary = {};

    reports.forEach((report) => {
      const { name, totalQuestions, score } = report;

      if (!languageSummary[name]) {
        languageSummary[name] = {
          name,
          totalTests: 0,
          totalQuestions: 0,
          totalScore: 0,
        };
      }

      languageSummary[name].totalTests++;
      languageSummary[name].totalQuestions += totalQuestions;
      languageSummary[name].totalScore += score;
    });

    const languageArray = Object.values(languageSummary).map((language) => {
      const overallPercentage = Math.floor(
        (language.totalScore / language.totalQuestions) * 100
      );

      return {
        name: language.name,
        totalTests: language.totalTests,
        totalQuestions: language.totalQuestions,
        totalScore: language.totalScore,
        overallPercentage,
      };
    });

    return languageArray;
  }

  const languages = generateLanguageSummary(reports);

  return (
    <>
      <div className="dashboard-header">
        <h3 className="dashboard-header-title">Welcome back Admin</h3>
      </div>

      <div className="dashboard-cards">
        {languages.map((language) => (
          <LanguageItem
            language={language}
            key={language.name}
            reports={reports}
          />
        ))}
      </div>
    </>
  );
}

function LanguageItem({ language, reports }) {
  const data = {
    langName: language.name,
    reports,
  };
  return (
    <div className="dashboard-item">
      <span>
        <strong>{language.name} </strong>
      </span>
      <span> Total Questions: {language.totalQuestions} </span>
      <span> Total Tests: {language.totalTests} </span>
      <span> Accuracy : {language.overallPercentage}% </span>
      <button className="language-review-btn">
        <Link to="languageReview" state={data}>
          Review
        </Link>
      </button>
    </div>
  );
}

export default AdminDashboard;
