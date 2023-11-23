import React, { useState } from "react";
import OptionCard from "../../components/OptionCard";

function AddQuestion() {
  const [options, setOptions] = useState([]);

  const [tags, setTags] = useState([]);
  const [tempId, setTempId] = useState(101);

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

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Add new Question:</h3>
      <div className="input-section">
        <label htmlFor="question">Question:</label>
        <input type="text" name="question" />
      </div>

      <div className="topics-section">
        <h5>Add Options:</h5>
        <div className="topics-list">
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
        <button onClick={() => addOption()}> Add Option+</button>
      </div>

      <div className="topics-section">
        <h5>Add Tags:</h5>
        <div className="topics-list">
          {tags.map((tag) => {
            return (
              <OptionCard
                option={tag}
                removeOption={removeOption}
                key={tag.id}
              />
            );
          })}
        </div>
        <button onClick={() => addOption()}> Add Option+</button>
      </div>

      <h3>Select Content Type:</h3>
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
      </div>

      <button>Add Question</button>
    </form>
  );
}

export default AddQuestion;
