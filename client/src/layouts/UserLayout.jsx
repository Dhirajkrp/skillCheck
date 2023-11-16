import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { useUser } from "../context/userContext";

function UserRoutes() {
  const { user } = useUser();
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
      name: "Tests",
      path: "/user/tests",
    },
    {
      name: "Take a Test",
      path: "/user/take-test",
    },
  ];

  return (
    <>
      <div className="page-layout">
        <div className="navbar">
          <Sidebar routes={routes} />
        </div>

        <div className="content">
          <div className="appbar">
            <Appbar userName={"User"} />
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
