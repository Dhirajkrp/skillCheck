import React from "react";
import { useUser } from "../../context/userContext";

function dashboard() {
  //this user object will have all the data if the user such as its name, email , etc
  const { user } = useUser();

  return (
    <div>
      <div>
        <h2>Student Information:</h2>
        {user ? (
          <div>
            <h5>Name: {user.name}</h5>
            <h5>Roll No. : {user.rollNo}</h5>
            <h5>Email: {user.emailID}</h5>
          </div>
        ) : (
          <p>Please log in to see your profile.</p>
        )}
      </div>
    </div>
  );
}

export default dashboard;
