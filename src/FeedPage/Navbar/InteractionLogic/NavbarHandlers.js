import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import userAPI from "../../../API/userAPI";

export default function NavbarHandlers() {
  const { darkMode, setMode, setIsLoggedIn, user, setUserPosts, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleLogOut = (event) => {
    event.preventDefault();
    setIsLoggedIn(false);
  };

  const handleModeSwitch = (event) => {
    event.preventDefault();
    setMode(!darkMode);
  };

  const handleProfile = async (event) => {
    event.preventDefault();
    let posts;
    posts = await userAPI.getFriendsPosts(user.nickname, token);
    setUserPosts(posts);
    navigate("/UserPage", { state: { user, otherUser: false } });
  };

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/Feed");
  };

  return {
    handleLogOut,
    handleModeSwitch,
    handleProfile,
    handleHome,
  };
}
