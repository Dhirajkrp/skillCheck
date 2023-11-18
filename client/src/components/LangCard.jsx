import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function LangCard({ name, img, langId }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        {/* <p>Total Test: {test}</p>
        <p>Total Questions: {questions}</p> */}
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
