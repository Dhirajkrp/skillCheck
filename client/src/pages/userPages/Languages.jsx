import "../../css/company.css";
import { useEffect, useState } from "react";
import { LangCard } from "../../components/LangCard";

export default function Languages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getLanguages() {
      try {
        const res = await fetch(`http://localhost:3500/api/languages`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getLanguages();
  }, []);

  return (
    <div className="lang-cards">
      {data.map((e) => (
        <LangCard
          key={e._id}
          name={e.name}
          img={e.image}
          langId={e._id}
          totalTopics={e.topics.length}
        />
      ))}
    </div>
  );
}
