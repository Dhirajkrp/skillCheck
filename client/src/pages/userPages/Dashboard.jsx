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
            <h2>Name: {user.name}</h2>
            <h2>Roll No. : {user.rollNo}</h2>
            <h2>Email: {user.emailID}</h2>
          </div>
        ) : (
          <p>Please log in to see your profile.</p>
        )}
      </div>
    </div>
  );
}

export default dashboard;
