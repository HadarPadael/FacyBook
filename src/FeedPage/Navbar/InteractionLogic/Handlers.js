import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";

export default function Handlers() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { darkMode, setMode } = useContext(AuthContext);

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
