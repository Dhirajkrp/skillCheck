import React from "react";

function TopicCard({ topic, removeTopic }) {
  return (
    <div className="topic-item">
      <input
        type="text"
        id={topic.id}
        topic={topic.value}
        placeholder={topic.placeholder}
        onChange={(e) => topic.setValue(e.target.value)}
      />
      <button onClick={() => removeTopic(topic.id)}> remove</button>
    </div>
  );
}

export default TopicCard;
