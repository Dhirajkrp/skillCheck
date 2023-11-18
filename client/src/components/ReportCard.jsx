export function ReportCard({ name, date, score }) {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://img.freepik.com/premium-vector/job-exam-test-vector-illustration_138676-243.jpg"
          alt={name}
          height="150px"
          width="100%"
        />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>Date: {date}</p>
        <h5>Score : {score}</h5>
      </div>
    </div>
  );
}
