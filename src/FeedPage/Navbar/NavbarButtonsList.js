import ColumnComponent from "./ColumnComponent";
import MenuComponent from "./MenuComponent";
import NavbarHandlers from "./InteractionLogic/NavbarHandlers";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

function NavbarButtonsList() {
  const { darkMode } = useContext(AuthContext);
  const { handleLogOut, handleModeSwitch } = NavbarHandlers();

  const NavbarButtons = [
    { displayPic: "inline", displayIcon: "none" },
    /*notifications */
    { displayPic: "none", displayIcon: "inline", IconClass: "bi bi-bell-fill" },
    /*chats */
    {
      displayPic: "none",
      displayIcon: "inline",
      IconClass: "bi bi-chat-dots-fill",
    },
    /*mode switch */
    {
      displayPic: "none",
      displayIcon: "inline",
      IconClass: darkMode ? "bi bi-toggle2-off" : "bi bi-toggle2-on",
      onClick: handleModeSwitch,
    },
  ];

  const buttonsList = NavbarButtons.map((button, key) => {
    return <ColumnComponent {...button} key={key} />;
  });

  return (
    <div className="row">
      {buttonsList}
      <div className="col">
        <MenuComponent
          option1={"Create new post"}
          option2={"Settings"}
          option3={"Log out"}
          link1={"/CreateNewPost"}
          link2={"/ProfilePage"}
          link3={"/"}
          handler={handleLogOut}
          icon={"bi bi-list"}
        />
      </div>
    </div>
  );
}

export default NavbarButtonsList;
