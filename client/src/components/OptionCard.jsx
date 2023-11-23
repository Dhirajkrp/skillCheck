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

      <button onClick={() => removeOption(option.id)}> remove</button>
    </div>
  );
}

export default OptionCard;
