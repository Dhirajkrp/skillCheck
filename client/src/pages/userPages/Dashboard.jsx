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
        {user ? (
        <div>
          <h2>Name: {user.name}</h2>
          <h2>Roll No. : {user.rollNo}</h2>
          <h2>Email: {user.emailID}</h2>

          {/* Display other user properties as needed */}
        </div>
            ) : (
        <p>Please log in to see your profile.</p>
      )}
        {/* <br />
        {user.map(c => <li key={c}>
          <h1 className="title1">{c.name}</h1></li>)} */}
        {/* Name: {user.name}
        <br />
        Roll Number: {user.rollNo}
        <br />
        Email-ID: {user.emailID}
        <br /> */}
  
        
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
