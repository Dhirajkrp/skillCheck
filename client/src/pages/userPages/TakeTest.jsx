import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/takeTest.css";

function TakeTest() {
  const [testType, setTestType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [testDuration, setTestDuration] = useState("");

  //databse fetch
  const languages = ["Java", "SQL", "JavaScript"];
  const companies = ["GrapeCity", "Cvent", "Nagarro"];

  return (
    <div className="take-test-container">
      <h2 className="take-test-heading">Take a New Test</h2>
      <div className="take-test-radio-group">
        <label className="take-test-radio-label">
          <input
            type="radio"
            name="testType"
            value="language"
            checked={testType === "language"}
            onChange={() => setTestType("language")}
          />
          Language
        </label>

        <label className="take-test-radio-label">
          <input
            type="radio"
            name="testType"
            value="company"
            checked={testType === "company"}
            onChange={() => setTestType("company")}
          />
          Company
        </label>
      </div>
      <select
        className="take-test-select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">
          Select a {testType === "language" ? "Language" : "Company"}
        </option>
        {testType === "language"
          ? languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))
          : companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
      </select>

      <select
        className="take-test-select"
        value={testDuration}
        onChange={(e) => setTestDuration(e.target.value)}
      >
        <option value="">Select Test Duration</option>
        <option value="10">10 mins</option>
        <option value="20">20 mins</option>
        <option value="30">30 mins</option>
      </select>
      {testType && selectedOption && testDuration && (
        <Link
          to={`/test?type=${testType}&option=${selectedOption}&duration=${testDuration}`}
          className="btn btn-primary"
        >
          Start Test
        </Link>
      )}
    </div>
  );
}

export default TakeTest;
