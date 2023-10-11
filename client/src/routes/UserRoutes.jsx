// import React from "react";

// import { Route } from "react-router-dom";

// import Dashboard from "../pages/editorPages/EditorDashboard";
// import Languages from "../pages/editorPages/EditLanguages";
// import Companies from "../pages/editorPages/EditCompanies";

// function UserRoutes() {
//   return (
//     <Route path="editor">
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/languages" element={<Languages />} />
//       <Route path="/companies" element={<Companies />} />
//     </Route>
//   );
// }

// export default UserRoutes;

import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar";
import Navbar from "../components/Navbar";

function UserRoutes() {
  return (
    <>
      <div className="page-layout">
        <div className="sidebar">
          <Navbar />
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
