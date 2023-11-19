import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../context/userContext";

function Logout() {
  const navigate = useNavigate();
  const { logout } = useUser();
  logout();

  useEffect(() => {
    navigate("/");
  }, []);
}

export default Logout;
