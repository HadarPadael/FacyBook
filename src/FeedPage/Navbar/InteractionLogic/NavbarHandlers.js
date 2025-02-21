import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function NavbarHandlers() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { darkMode, setMode } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleModeSwitch = () => {
    setMode(!darkMode);
  };

  const handleProfile = () => {
    navigate("/UserPage");
  };

  const handleHome = () => {
    navigate("/Feed");
  };

  return {
    handleLogOut,
    handleModeSwitch,
    handleProfile,
    handleHome,
  };
}
