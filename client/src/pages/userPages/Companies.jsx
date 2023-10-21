import React from "react";
import CompanyCard from "../../components/CompanyCard";
import "../../css/LanguageCard.css";

//database fetch using axios
import { companies } from "../../assets/companies";

function Companies() {
  return (
    <div className="language-container">
      {companies.map((company) => (
        <CompanyCard
          _id={company._id}
          name={company.name}
          totalTopics={company.topics.length}
          image={company.image}
          key={company._id}
        />
      ))}
    </div>
  );
}

export default Companies;
