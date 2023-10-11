import React from "react";
import "../css/appbar.css";

function Appbar() {
  return (
    <>
      <span>page name</span>
      <div className="user-card">
        <span className="user-icon"></span>
        <span className="user-name">Richard Parker</span>
      </div>
    </>
  );
}

export default Appbar;
