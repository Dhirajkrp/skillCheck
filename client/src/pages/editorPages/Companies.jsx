import React, { useEffect, useState } from "react";
import axios from "axios";
import LanguageCard from "../../components/editor-components/LanguageCard";

import "../../css/company.css";
import { Link } from "react-router-dom";
import CompanyCard from "../../components/editor-components/CompanyCard";

function EditorCompanies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/companies")
      .then((res) => {
        setCompanies(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Companies</h2>
      <div className="lang-cards">
        {companies.map((comp) => {
          return (
            <CompanyCard
              _id={comp._id}
              img={comp.compImage}
              name={comp.name}
              topics={comp.topics.length}
              key={comp._id}
            />
          );
        })}
      </div>
      <div className="cta-container">
        <button className="btn btn-primary">
          <Link to="/editor/companies/add">Add a New Company</Link>
        </button>
      </div>
    </div>
  );
}

export default EditorCompanies;
