import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Questions() {
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
      <h2>Select a Language to view their questions:</h2>
      <div className="lang-cards">
        {languages.map((lang) => {
          return (
            <div className="language-questions-card">
              <h2>{lang.name}</h2>
              <button>
                <Link to={`/editor/questions/${lang.name}`}>
                  {" "}
                  View Questions
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
