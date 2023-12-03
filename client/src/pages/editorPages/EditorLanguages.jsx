import React, { useEffect, useState } from "react";
import axios from "axios";
import LanguageCard from "../../components/editor-components/LanguageCard";

import "../../css/company.css";
import { Link } from "react-router-dom";

function EditorLanguages() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/api/languages")
      .then((res) => {
        setLanguages(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Languages</h2>
      <div className="lang-cards">
        {languages.map((lang) => {
          return (
            <LanguageCard
              _id={lang._id}
              img={lang.image}
              name={lang.name}
              topics={lang.topics.length}
              key={lang._id}
            />
          );
        })}
      </div>
      <div className="cta-container">
        <button className="btn btn-primary">
          <Link to="/editor/languages/add">Add a New Language</Link>
        </button>
      </div>
    </div>
  );
}

export default EditorLanguages;
