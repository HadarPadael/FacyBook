import UserActions from "./UserActions/UserActions";
import ImageHelper from "../../../SignUpPage/InteractionLogic/ImageHelper";

function UserPreview({ user, otherUser }) {
  const profilePicString = user.profilePic;
  const userPic = ImageHelper.base64ToBlobUrl(profilePicString);

  return (
    <div id="userArea" className="p-2">
      <div className="cover-container">
        <img id="backgroundImg" src="/backgroundPic.jpg" />
        <div className="row" id="profile-container">
          <div id="userPagePicCol" className="col-8">
            <img
              className="ProfilePic"
              src={userPic}
              alt="Profile"
              id="profile-pic"
            />
          </div>
          <div className="col-4" id="usernameCol">
            <h1 id="user-profile-name">{user.nickname}</h1>
            <h6 id="user-profile-friends">{`${user.friends.length} friends`}</h6>
          </div>
        </div>
      </div>
      <UserActions />
    </div>
  );
}

export default UserPreview;
