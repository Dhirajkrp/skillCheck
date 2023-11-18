import { Link } from "react-router-dom";

export function LangCard({ name, img, langId }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
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
