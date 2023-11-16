import React from "react";
import "../css/appbar.css";

function Appbar({ userName }) {
  return (
    <>
      <span>page name</span>
      <div className="user-card">
        <span className="user-icon"></span>
        <span className="user-name">{userName}</span>
      </div>
    </>
  );
}

export default Appbar;
