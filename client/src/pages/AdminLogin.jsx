import { useState } from "react";
import axios from "axios";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserProvider, useUser } from "../context/userContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useUser();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .get("http://localhost:3500/api/users/login", {
          params: {
            email,
            password,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            login(res.data);
            navigate("/admin/");
          }
        });
    } catch (err) {
      if (err.request.status === 401) {
        alert(err.response.data.message);
      } else if (err.request.status === 500) {
        alert("something went wrong");
      }
    }
  }

  return (
    <UserProvider>
      <div className="Login">
        <div className="login-form">
          <h3 className="title">
            <span className="back-btn">
              <Link to="/">back</Link>
            </span>
            Login
          </h3>
          <form action="" method="post">
            <div className="input-container">
              <label id="email">Email:</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input"
                placeholder="richard@gmaail.com"
                type="text"
                required
              />
            </div>
            <div className="input-container">
              <label id="password">Password:</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input"
                placeholder="********"
                type="password"
                required
              />
            </div>
            <div className="button-container">
              <input
                type="submit"
                onClick={submit}
                className=" btn btn-secondary"
              />
            </div>
          </form>
        </div>
      </div>
    </UserProvider>
  );
}

export default Login;
