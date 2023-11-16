import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import DashCard from "./DashCard";

const dash = [
  {
    companies: 10,
  },
  {
    languages: 3,
  },
  {
    TestTaken: 2,
  },
];
function dashboard() {
  //this user object will have all the data if the user such as its name, email , etc
  const { user } = useUser();
  console.log(user);

  // return <div>Dashboard : The user is {user?.name}</div>;
  return (
    <div>
      <div>
        <h2>Student Information:</h2>
        <br />
        Name: {user?.name}
        <br />
        Enrollment Number: {user?.name}
        <br />
        Course: {user?.name}
        <br />
        Batch: {user?.name}
        <br />
      </div>
      <div>
       {dash.map((e)=>{
         <DashCard/>
       })}
      </div>
    </div>
  );
}

export default dashboard;
