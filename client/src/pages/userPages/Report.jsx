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
        console.log(reports);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }

  return reports.map((report) => (
    <ReportCard name={report.name} date={report.date} score={report.score} />
  ));
}

export default Report;
