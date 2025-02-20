import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthContext";

export default function NavbarHandlers() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { darkMode, setMode } = useContext(AuthContext);

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

  return {
    handleLogOut,
    handleModeSwitch,
  };
}
