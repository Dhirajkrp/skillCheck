import React from "react";

function FaqCard({ faq, removeFaq }) {
  return (
    <div className="faq-item">
      <label htmlFor="question">Question:</label>
      <input
        type="text"
        name="question"
        placeholder="Your Question here..."
        onChange={(e) => faq.setQuestion(e.target.value)}
      />
      <label htmlFor="answer">Answer:</label>

      <input
        type="text"
        name="answer"
        onChange={(e) => faq.setAnswer(e.target.value)}
        placeholder="Your answer here..."
      />
      <button onClick={() => removeFaq(faq.id)} className="remove-faq-btn">
        X
      </button>
    </div>
  );
}

export default FaqCard;
