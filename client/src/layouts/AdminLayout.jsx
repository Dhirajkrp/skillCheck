import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";

function UserRoutes() {
  const navigate = useNavigate();
  const routes = [
    {
      name: "Dashboard",
      path: "/admin/",
    },
    {
      name: "Languages",
      path: "/admin/languages",
    },
    {
      name: "Companies",
      path: "/admin/companies",
    },
    {
      name: "Question",
      path: "/admin/questions",
    },
    {
      name: "Add a  Question",
      path: "/admin/addQuestion",
    },
    {
      name: "Logout",
      path: "/logout",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="page-layout">
        <div className="navbar">
          <Sidebar routes={routes} />
        </div>

        <div className="content">
          <div className="appbar">
            <Appbar />
          </div>

          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRoutes;
