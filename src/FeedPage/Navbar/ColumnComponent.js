import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

function ColumnComponent({ displayPic, IconClass, displayIcon, onClick }) {
  const { user } = useContext(AuthContext);

  return (
    <div className="col">
      <li className="nav-item">
        <button className="icon-button" onClick={onClick}>
          <img
            className="ProfilePic"
            id="NavbarProfilePic"
            src={user.profilePic}
            alt="profilePic"
            style={{ display: displayPic }}
          />
          <p className={IconClass} style={{ display: displayIcon }}></p>
        </button>
      </li>
    </div>
  );
}

export default ColumnComponent;
