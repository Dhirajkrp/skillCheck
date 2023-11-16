import "../../css/company.css";
import { useEffect, useState } from "react";
import { LangCard } from "../../components/LangCard";

export default function Languages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      try {
        const res = await fetch(`http://localhost:3500/api/languages`);
        const data = await res.json();
        console.log(data);
        setData(data); // Set the data in the state
      } catch (error) {
        console.log("Error");
      }
    }
    getCompanies();
  }, []);

  return (
    <div className="lang-cards">
      {data.map((e) => (
        <LangCard
          key={e._id}
          name={e.name}
          img={e.langImg}
          topics={e.topics}
          // test={e.totalTest}
          // questions={e.totalQuestions}
        />
      ))}
    </div>
  );
}
