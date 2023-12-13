import { Link } from "react-router-dom";

export function LangCard({ name, img, langId, totalTopics }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h5>{name}</h5>
        <p>
          Total Topics : <strong> {totalTopics} </strong>{" "}
        </p>
      </div>
      <div className="card-buttons">
        <button className="study-material">
          <Link to={`/user/language/${langId}`} className="study-material">
            Study Material
          </Link>
        </button>
      </div>
    </div>
  );
}
