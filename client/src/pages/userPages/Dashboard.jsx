import React from "react";

import { useUser } from "../../context/userContext";

function dashboard() {
  //this user object will have all the data if the user such as its name, email , etc
  const { user } = useUser();
  console.log(user);
  return <div>Dashboard : The user is {user.name}</div>;
}

export default dashboard;
