import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import ImageHelper from "../../SignUpPage/InteractionLogic/ImageHelper";

function ColumnComponent({ displayPic, IconClass, displayIcon, onClick }) {
  const { user } = useContext(AuthContext);
  const profilePicString = user.profilePic;
  const blobUrl = ImageHelper.base64ToBlobUrl(profilePicString);

  return (
    <div className="col">
      <li className="nav-item">
        <button className="icon-button" onClick={onClick}>
          <img
            className="ProfilePic"
            id="NavbarProfilePic"
            src={blobUrl}
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
