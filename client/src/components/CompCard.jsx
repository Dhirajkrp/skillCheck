// eslint-disable-next-line react/prop-types
export function CompCard({ name, img, desc, profile, websiteLink }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>
          <b>Description:</b> {desc}
        </p>
        <p>
          <b>Hiring Profiles:</b> <br />
          {profile}
        </p>
      </div>
      <div className="card-buttons">
        <button className="start-quiz">
          <a href={`${websiteLink}`} target="_black" className="more-btn">View More</a>
        </button>
        <button className="study-material">Study Material</button>
      </div>
    </div>
  );
}
