import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./css/main.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";

// public route imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/OurTeam";

//user route import

import Dashboard from "./pages/userPages/Dashboard.jsx";
import Companies from "./pages/userPages/Companies.jsx";
import Languages from "./pages/userPages/Languages.jsx";
import StudyGuide from "./pages/userPages/StudyGuide.jsx";
import CompanyGuide from "./pages/userPages/CompanyGuide.jsx";
import Report from "./pages/userPages/Report.jsx";

//editor routes
import EditorDashboard from "./pages/editorPages/EditorDashboard.jsx";
import EditCompanies from "./pages/editorPages/EditCompanies.jsx";
import EditLanguages from "./pages/editorPages/EditLanguages";
import EditQuestions from "./pages/editorPages/EditQuestions";
import AddQuestion from "./pages/editorPages/AddQuestion";

import UserRoutes from "./layouts/UserLayout.jsx";
import EditorLayout from "./layouts/EditorLayout.jsx";
import TakeTest from "./pages/userPages/TakeTest.jsx";
import Test from "./pages/userPages/Tests.jsx";
import { UserProvider } from "./context/userContext.jsx";
import TestReport from "./components/test-components/TestReport.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* top level routes */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/test" element={<Test />} />
      <Route path="/user" element={<UserRoutes />}>
        <Route path="" element={<Dashboard />} />
        <Route path="languages" element={<Languages />} />
        <Route path="language/:langID" element={<StudyGuide />} />
        <Route path="companies" element={<Companies />} />
        <Route path="company/:companyID" element={<CompanyGuide />} />
        <Route path="reports" element={<Report />} />
        <Route path="take-test" element={<TakeTest />} />
        <Route path="test-report" element={<TestReport />} />
      </Route>

      <Route path="/editor" element={<EditorLayout />}>
        <Route path="" element={<EditorDashboard />} />
        <Route path="languages" element={<EditLanguages />} />
        <Route path="companies" element={<EditCompanies />} />
        <Route path="questions" element={<EditQuestions />} />
        <Route path="addQuestion" element={<AddQuestion />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
