import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

import axios from "axios";
import { ReportCard } from "../../components/ReportCard";
function Report() {
  const { user } = useUser();

  const userID = user._id;
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/api/report/all/${userID}`)
      .then((res) => {
        setReports(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }

  if (reports.length > 0) {
    return (
      <div className="card-container">
        {reports.map((report) => (
          <ReportCard
            name={report.name}
            date={report.date}
            score={report.score}
            totalQuestions={report.totalQuestions}
          />
        ))}
      </div>
    );
  } else {
    return (
      <h3>
        Looks Like You have not given any tests yet, please give a test first!
      </h3>
    );
  }
}

export default Report;
