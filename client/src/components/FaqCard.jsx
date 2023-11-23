import React from "react";

function FaqCard({ faq, removeFaq }) {
  return (
    <div>
      <input
        type="text"
        name=""
        placeholder="Your Question here..."
        onChange={(e) => faq.setQuestion(e.target.value)}
      />
      <input
        type="text"
        name=""
        onChange={(e) => faq.setAnswer(e.target.value)}
        placeholder="Your answer here..."
      />
      <button onClick={() => removeFaq(faq.id)}>Remove</button>
    </div>
  );
}

export default FaqCard;
