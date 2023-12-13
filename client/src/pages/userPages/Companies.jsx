import "../../css/company.css";
import { useEffect, useState } from "react";
import { CompCard } from "../../components/CompCard";
import Loader from "../../components/test-components/Loader";

function Companies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      try {
        const res = await fetch(`http://localhost:3500/api/companies`);
        const data = await res.json();
        setData(data); // Set the data in the state
      } catch (error) {
        console.log("Error");
      }
    }
    getCompanies();
  }, []);

  return (
    <div>
      {data.length == 0 && <Loader />}
      <div className="lang-cards">
        {data.map((e) => (
          <CompCard
            key={e._id} // Assuming _id is the unique identifier for each item
            name={e.name}
            img={e.compImage}
            desc={e.description}
            profile={e.profile}
            websiteLink={e.websiteLink}
            compId={e._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Companies;
