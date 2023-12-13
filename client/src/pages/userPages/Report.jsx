import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

import axios from "axios";
import { ReportCard } from "../../components/ReportCard";
import Loader from "../../components/test-components/Loader";
function Report() {
  const { user } = useUser();

  const userID = user._id;
  const [reports, setReports] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/api/reports/all/${userID}`)
      .then((res) => {
        setReports(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setReports([]);
        }
        setReports([]);
      });
  }, []);

  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }

  if (reports !== null) {
    return (
      <div className="card-container">
        {reports.map((report) => (
          <ReportCard
            name={report.name}
            date={report.date}
            score={report.score}
            totalQuestions={report.totalQuestions}
            key={report.date}
          />
        ))}
      </div>
    );
  } else if (reports !== null && reports.length === 0) {
    return (
      <div>
        <h3>Looks Like You have not given any tests yet!</h3>
      </div>
    );
  } else {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default Report;
