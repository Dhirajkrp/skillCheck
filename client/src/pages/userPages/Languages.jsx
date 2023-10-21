import React from "react";
import LanguageCard from "../../components/LanguageCard";
import "../../css/LanguageCard.css";

//database fetch using axios
import { langs } from "../../assets/languages";

function Languages() {
  return (
    <div className="language-container">
      {langs.map((lang) => (
        <LanguageCard
          _id={lang._id}
          name={lang.name}
          topics={lang.topics}
          image={lang.image}
          key={lang._id}
        />
      ))}
    </div>
  );
}

export default Languages;
