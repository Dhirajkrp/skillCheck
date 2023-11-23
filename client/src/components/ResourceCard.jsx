import React from "react";

function ResourceCard({ topic }) {
  return (
    <div className="topic-item">
      <input type="text" topic={topic.value} value={topic.value} disabled />
      <input
        type="text"
        placeholder="add a resource"
        onChange={(e) => topic.setResource(e.target.value)}
      />
    </div>
  );
}

export default ResourceCard;
