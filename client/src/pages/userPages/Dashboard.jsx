import React from "react";
import { useUser } from "../../context/userContext";

import "../../css/dashboard.css";
function dashboard() {
  //this user object will have all the data if the user such as its name, email , etc
  const { user } = useUser();
  return (
    <>
      <div className="dashboard-header">
        <h3 className="dashboard-header-title">Welcome back {user.name}</h3>
        <div className="header-info-card">
          <span>Roll No : {user.rollNo} </span>
          <span>Email: {user.emailID}</span>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-item">
          <p className="dashboard-item-p">
            Have a closer look at the companies and get to know them well
          </p>
          <button className="dashboard-item-btn"> Browse Companies</button>
        </div>

        <div className="dashboard-item">
          <p className="dashboard-item-p">
            Sharpen Your knowledge in various languages to get ahead of the rest
          </p>
          <button className="dashboard-item-btn"> Browse Languages</button>
        </div>

        <div className="dashboard-item">
          <p className="dashboard-item-p">
            Have a quick assessment of your knowledge to know where you stand
          </p>
          <button className="dashboard-item-btn"> Take Test</button>
        </div>
      </div>
    </>
  );
}

export default dashboard;
