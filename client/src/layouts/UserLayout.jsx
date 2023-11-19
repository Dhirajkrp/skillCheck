import React, { createContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { useUser } from "../context/userContext";

function UserRoutes() {
  const { user } = useUser();
  const navigate = useNavigate();
  const routes = [
    {
      name: "Dashboard",
      path: "/user/",
    },
    {
      name: "Languages",
      path: "/user/languages",
    },
    {
      name: "Companies",
      path: "/user/companies",
    },
    {
      name: "Reports",
      path: "/user/reports",
    },
    {
      name: "Take a Test",
      path: "/user/take-test",
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
