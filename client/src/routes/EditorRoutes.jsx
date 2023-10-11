import React from "react";

import { Route } from "react-router-dom";

import Dashboard from "../pages/userPages/Dashboard";
import Languages from "../pages/userPages/Languages";
import Companies from "../pages/userPages/Companies";

function EditorRoutes() {
  return (
    <Route path="user">
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/companies" element={<Companies />} />
    </Route>
  );
}

export default EditorRoutes;
