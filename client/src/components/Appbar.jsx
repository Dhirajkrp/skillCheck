import React from "react";
import { useUser } from "../context/userContext";
import "../css/appbar.css";

function Appbar() {
  const { user } = useUser();
  const name = user.name || "user";
  return (
    <>
      <span>{new Date().toLocaleDateString("en-US")}</span>
      <div className="user-card">
        <span className="user-icon"></span>
        <span className="user-name">{name}</span>
      </div>
    </>
  );
}

export default Appbar;
