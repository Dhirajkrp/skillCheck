import React, { useEffect, useState } from "react";
import OptionCard from "../../components/OptionCard";

import axios from "axios";

import "../../css/AddQuestion.css";

function AddQuestion() {
  const [options, setOptions] = useState([]);

  const [tags, setTags] = useState([]);
  const [tempId, setTempId] = useState(101);

  const [languages, setLanguages] = useState([]);
  const [currLang, setCurrLang] = useState();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(0);

  const [status, setStatus] = useState("loading");

  const [selectedTopics, setSelectedTopics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/languages")
      .then((res) => setLanguages(res.data))
      .catch((err) => console.log(err));
  }, []);

  function addOption() {
    setTempId((prev) => prev + 1);

    const newOption = {
      id: tempId,
      value: "",
      setValue(data) {
        this.value = data;
      },
    };
    setOptions([...options, newOption]);
  }

  function removeOption(optionId) {
    const updatedOptions = options.filter((option) => option.id != optionId);
    setOptions(updatedOptions);
  }

  function getTags(langId) {
    axios
      .get(`http://localhost:3500/api/languages/topics/${langId}`)
      .then((res) => setTags(res.data))
      .catch((err) => console.log(err));
  }

  function handleTopicChange(topic) {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  }

  function handleSubmit() {
    const newQuestion = {
      question,
      language: languages.filter((lang) => lang._id === currLang)[0].name,
      answer,
      options: options.map((op) => op.value),
      tags: selectedTopics,
      contentType: {
        questionType: "text",
        answerType: "text",
      },
    };

    //add the question to the database and reset all the input fields.

    setOptions([]);
    setQuestion("");
    setSelectedTopics([]);
    setAnswer(0);

    console.log(newQuestion);
    axios
      .post("http://localhost:3500/api/questions", newQuestion)
      .then((res) => {
        if (res.status === 201) {
          setStatus("questionInserted");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="content-box">
      {status === "loading" && (
        <form
          className="language-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <h4>Select the language for which you want to add the question :</h4>
          <select name="language" onChange={(e) => setCurrLang(e.target.value)}>
            <option value="Java">--please Select--</option>
            {languages.map((lang) => (
              <option value={lang._id}>{lang.name}</option>
            ))}
          </select>
          <button
            className="btn btn-primary"
            onClick={() => {
              setStatus("languageSelected");
              getTags(currLang);
            }}
          >
            Next
          </button>
        </form>
      )}
      {status === "languageSelected" && (
        <form
          onSubmit={(e) => e.preventDefault()}
          action="#"
          className="question-info"
        >
          <h3>Add new Question:</h3>
          <div className="input-section">
            <label htmlFor="question">Question:</label>
            <input
              type="text"
              name="question"
              placeholder="your question here..."
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
            />
          </div>

          <div className="options-section">
            <h5>Add Options:</h5>
            <div className="options-list">
              {options.map((option) => {
                return (
                  <OptionCard
                    option={option}
                    removeOption={removeOption}
                    key={option.id}
                  />
                );
              })}
            </div>
            <button className="btn btn-secondary" onClick={() => addOption()}>
              {" "}
              Add Option+
            </button>
          </div>

          <div>
            <h5>Select Answer Index:</h5>
            <input
              type="number"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
            />
          </div>

          <div className="topics-section">
            <h5> Select Topics which are realated to the question:</h5>
            <div className="add-question-topics-list">
              {tags.map((tag) => {
                return (
                  <div key={tag} className="add-question-topic-item">
                    <input
                      type="checkbox"
                      name="tag"
                      value={tag}
                      id={tag}
                      checked={selectedTopics.includes(tag)}
                      onChange={() => handleTopicChange(tag)}
                    />
                    <label
                      htmlFor={tag}
                      className={
                        selectedTopics.includes(tag) ? "topic-selected" : ""
                      }
                    >{`${tag}`}</label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <h3>Select Content Type:</h3>
          <div className="input-section">
            <label htmlFor="questionType">Select the question type</label>
            <select name="questionType">
              <option value="text">Text</option>
              <option value="code">Code</option>
            </select>
          </div>
          <div className="input-section">
            <label htmlFor="answerType">Select the question type</label>
            <select name="answerType">
              <option value="text">Text</option>
              <option value="code">Code</option>
            </select>
          </div> */}

          <div className="cta-container">
            <button className="btn btn-primary" onClick={() => handleSubmit()}>
              Add Question
            </button>
          </div>
        </form>
      )}

      {status === "questionInserted" && (
        <div>
          <h3>Question Inserted Successfully</h3>
          <button onClick={() => setStatus("languageSelected")}>Close</button>
        </div>
      )}
    </div>
  );
}

export default AddQuestion;
