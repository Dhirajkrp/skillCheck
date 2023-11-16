import { useState } from "react";
import axios from "axios";
import "../css/Login.css";
import { Link } from "react-router-dom";
// import {useNavigate} from "react-router";
// import { createUser } from "../../../server/controllers/userController";

function Signup() {
  //    const history=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to create a new user
      const response = await axios.post(
        "/api/users",
        name,
        email,
        password,
        rollNo
      );

      if (response.status === 201) {
        // User registration was successful
        console.log("User registered successfully");
        // Redirect or perform other actions as needed
      }
    } catch (error) {
      // Handle registration errors
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="Signup">
      <div className="signup-form">
        <h3 className="title">
          <span className="back-btn">
            <Link to="/">back</Link>
          </span>
          Signup
        </h3>
        <form method="post">
          <div className="input-container">
            <label className="label">Username</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="input"
              placeholder="name"
              type="text"
            />
          </div>
          <div className="input-container">
            <label className="label">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input"
              placeholder="email"
              type="email"
            />
          </div>
          <div className="input-container">
            <label className="label">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input"
              placeholder="password"
              type="password"
            />
          </div>
          <div className="input-container">
            <label className="label">Roll No</label>
            <input
              onChange={(e) => {
                setRollNo(e.target.value);
              }}
              className="input"
              placeholder="rollNo"
              type="number"
            />
          </div>

          <div className="button-container">
            <input
              type="submit"
              onClick={submit}
              className="btn btn-secondary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
