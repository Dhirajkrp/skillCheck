import React from "react";
import { Link } from "react-router-dom";

function LanguageCard({ _id, name, topics, image }) {
  return (
    <div className="language-card">
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-data">
        <h3>{name}</h3>
        <p>Total Topics {topics}</p>
        <div className="cta">
          <button className="btn card-btn btn-secondary">
            <Link to={`/user/language/${_id}`}>Study Guide</Link>
          </button>
          <button className="btn card-btn btn-secondary">
            <Link>Take a Test</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageCard;
