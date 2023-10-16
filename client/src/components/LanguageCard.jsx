import React from "react";

function LanguageCard({ name, topics }) {
  return (
    <div className="language-card">
      <div className="card-image">
        <div className="card-data">
          <h3>{name}</h3>
          <p>Total Topics {topics}</p>
          <div className="cta">
            <button className="btn">
              <Link>Study Guide</Link>
            </button>
            <button className="btn">
              <Link>Take a Test</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageCard;
