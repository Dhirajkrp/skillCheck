import React from "react";
import { useParams } from "react-router-dom";

import "../../css/StudyGuide.css";

import { companies } from "../../assets/companies";
function CompanyGuide() {
  let { companyID } = useParams();
  const company = companies.filter((comp) => comp._id === companyID)[0];
  return (
    <>
      <div className="language-intro">
        <div className="language-image">
          <img src={company.image} alt="language image" />
        </div>
        <div className="info">
          <h3 className="language-name">{company.name}</h3>
          <p>Total Topics: {company.topics.length}</p>
        </div>
      </div>
      <h3>Topics To cover</h3>
      <table>
        <tr>
          <th>SNO</th>
          <th>Name</th>
          <th>Resource</th>
        </tr>

        {company.topics.map((topic, index) => {
          return (
            <tr>
              <td>{index + 1}</td> <td>{topic.name}</td>{" "}
              <td>
                <a href={topic.link}>{topic.name}</a>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="faq">
        <h3>Frequently Asked Questions:</h3>
        {company.faq.map((ques, index) => {
          return (
            <>
              <h5>
                {index + 1}. {ques.question}
              </h5>
              <p>{ques.answer}</p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CompanyGuide;
