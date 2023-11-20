import React from "react";

function TopicCard({ value, removeTopic }) {
  return (
    <div className="topic-item">
      <input type="text" name={value} id="" value={value} />
      <button onClick={() => removeTopic(value)}> remove</button>
    </div>
  );
}

export default TopicCard;
