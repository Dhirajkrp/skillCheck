import React from "react";

function OptionCard({ option, removeOption }) {
  return (
    <div className="topic-item">
      <input
        type="text"
        id={option.id}
        option={option.value}
        placeholder="Your option here.."
        onChange={(e) => option.setValue(e.target.value)}
      />

      <button className="close-btn" onClick={() => removeOption(option.id)}>
        {" "}
        X
      </button>
    </div>
  );
}

export default OptionCard;
