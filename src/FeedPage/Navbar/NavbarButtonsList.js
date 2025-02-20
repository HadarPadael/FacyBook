import ColumnComponent from "./ColumnComponent";

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
  { displayPic: "none", displayIcon: "inline", IconClass: "bi bi-toggle2-on" },
];

const NavbarButtonsList = NavbarButtons.map((button, key) => {
  return <ColumnComponent {...button} key={key} />;
});

export default NavbarButtonsList;
