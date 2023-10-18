import React from "react";
import { useParams } from "react-router-dom";

import "../../css/StudyGuide.css";

import { langs } from "../../assets/languages";
function StudyGuide() {
  let { langID } = useParams();
  const language = langs.filter((lang) => lang._id === langID)[0];

  console.log(language);
  return (
    <>
      <div className="language-intro">
        <div className="language-image">
          <img src={language.image} alt="language image" />
        </div>
        <div className="info">
          <h3 className="language-name">{language.name}</h3>
          <p>Total Topics: {language.topics}</p>
        </div>
      </div>
      <h3>Topics To cover</h3>
      <table>
        <tr>
          <th>SNO</th>
          <th>Name</th>
          <th>Resource</th>
        </tr>

        {language.resources.map((res, index) => {
          return (
            <tr>
              <td>{index + 1}</td> <td>{res.name}</td>{" "}
              <td>
                <a href={res.link}>{res.name}</a>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="faq">
        <h3>Frequently Asked Questions:</h3>
        {language.faq.map((ques, index) => {
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

export default StudyGuide;
