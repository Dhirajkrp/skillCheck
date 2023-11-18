import React from "react";
import "../../css/appbar.css";
import Timer from "./Timer";
import { useUser } from "../../context/userContext";
import axios from "axios";

function AppbarTest({dispatch,secondsRemaining,score}) {
  // console.log(dispatch);
  const { user } = useUser();
  const Name=user.name;
  const score1=score;
  const currentDate = new Date();

  // Format the date as needed
  const date = currentDate.toDateString();
  // const Type=testType;
  // const category=selectedOption;
  const dataToSend=[Name,date,score1]
  console.log(dataToSend)
  const handleClick = async () => {
    dispatch({ type: 'submitTest' });
      // const response = await fetch('http://localhost:3500/api/report', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // You might need to include additional headers or authentication tokens
      //   },
      //   body: JSON.stringify(dataToSend),
      // });
     const response=await axios.get("http://localhost:3500/api/report",{
      Name,date,score1
  
    })
    console.log(response);
  };
  return (
    <>
      <span>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      </span>
      <div className="user-card">
        <button
          className="btn-primary"
          // onClick={() => dispatch({ type: "submitTest" })} 
          onClick={() => handleClick()}
        >
        
          Submit
        </button>
        {/* <h1>{dispatch}</h1> */}
        <h1>{date}</h1>
        <h1>{score}</h1>
      </div>
    </>
  );
}

export default AppbarTest;
