import ChoicesList from "./ChoicesList";
import ImageHelper from "../../SignUpPage/InteractionLogic/ImageHelper";

function RightColumn({user}) {
  const profilePicString = user.profilePic;
  const blobUrl = ImageHelper.base64ToBlobUrl(profilePicString);
  return (
    <ul id="rightScroll" className="list-group custom-scrollbar">
      <li className="list-group-item">
        <div className="container top-container text-center">
          <div className="row">
            <div className="col text-start details-Username">
              {user.nickname}
            </div>
            <div className="col text-end">
              <img
                id="infoProfilePic"
                src={blobUrl}
                alt="profilePic"
                className="ProfilePic"
              />
            </div>
          </div>
        </div>
      </li>
      <hr></hr>
      {ChoicesList}
    </ul>
  );
}

export default RightColumn;
