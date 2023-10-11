import "./css/main.css";
import Dashboard from "./pages/userPages/Dashboard";
import Companies from "./pages/userPages/Companies";
import Languages from "./pages/userPages/Languages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/companies" element={<Companies />} />
        <Route path="/user/Languages" element={<Languages />} />
      </Routes>
    </>
  );
}

export default App;
