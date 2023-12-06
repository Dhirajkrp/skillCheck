import { Link } from "react-router-dom";

export default function LanguageCard({ name, img, _id, topics }) {
  console.log(img);
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <h5>Total Topics: {topics} </h5>
      </div>
      <div className="card-buttons">
        <button className="study-material">
          <Link to={`/editor/languages/${_id}`} className="study-material">
            Edit Language
          </Link>
        </button>
      </div>
    </div>
  );
}
