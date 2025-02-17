import ColumnComponent from "./ColumnComponent";

const NavbarButtons = [
  { displayPic: "inline", displayIcon: "none" },
  { displayPic: "none", displayIcon: "inline", IconClass: "bi bi-bell-fill" },
  { displayPic: "none", displayIcon: "inline", IconClass: "bi bi-chat-dots-fill" },
  { displayPic: "none", displayIcon: "inline", IconClass: "bi bi-toggle2-on" }
];

const NavbarButtonsList = NavbarButtons.map((button, key) => {
  return <ColumnComponent {...button} key={key} />;
});

export default NavbarButtonsList;