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
import AdminLogin from "./pages/AdminLogin";
import EditorLogin from "./pages/EditorLogin";
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
import EditorCompanies from "./pages/editorPages/Companies.jsx";
import EditCompanies from "./pages/editorPages/EditCompanies";
import AddCompany from "./pages/editorPages/AddCompany";
import EditLanguages from "./pages/editorPages/EditLanguages";
import Questions from "./pages/editorPages/Questions";
import AddQuestion from "./pages/editorPages/AddQuestion";

import UserRoutes from "./layouts/UserLayout.jsx";
import EditorLayout from "./layouts/EditorLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

import TakeTest from "./pages/userPages/TakeTest.jsx";
import Test from "./pages/userPages/Tests.jsx";
import { UserProvider } from "./context/userContext.jsx";
import TestReport from "./components/test-components/TestReport.jsx";
import Logout from "./pages/Logout.jsx";
import AddLanguage from "./pages/editorPages/AddLanguage.jsx";
import EditorLanguages from "./pages/editorPages/Languages.jsx";
import QuestionList from "./pages/editorPages/QuestionList.jsx";

import AdminDashboard from "./pages/adminPages/AdminDashboard";
import LanguageReview from "./pages/adminPages/LanguageReview.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* top level routes */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/editorLogin" element={<EditorLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/test" element={<Test />} />
      <Route path="/logout" element={<Logout />} />
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
        <Route path="languages" element={<EditorLanguages />} />
        <Route path="languages/:langId" element={<EditLanguages />} />
        <Route path="languages/add" element={<AddLanguage />} />
        <Route path="companies" element={<EditorCompanies />} />
        <Route path="companies/:companyID" element={<EditCompanies />} />
        <Route path="companies/add" element={<AddCompany />} />
        <Route path="questions" element={<Questions />} />
        <Route path="questions/:langId" element={<QuestionList />} />

        <Route path="addQuestion" element={<AddQuestion />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="languages" element={<EditorLanguages />} />
        <Route path="languages/:langId" element={<EditLanguages />} />
        <Route path="languages/add" element={<AddLanguage />} />
        <Route path="companies" element={<EditorCompanies />} />
        <Route path="companies/:companyID" element={<EditCompanies />} />
        <Route path="companies/add" element={<AddCompany />} />
        <Route path="questions" element={<Questions />} />
        <Route path="questions/:langId" element={<QuestionList />} />

        <Route path="addQuestion" element={<AddQuestion />} />

        <Route path="languageReview" element={<LanguageReview />}></Route>
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
