import UserActions from "./UserActions/UserActions";
import ImageHelper from "../../../SignUpPage/InteractionLogic/ImageHelper";

function UserPreview({ user, name, profilePic }) {
  let userPic, nickname;
  if (name) {
    userPic = profilePic;
    nickname = name;
  } else {
    const profilePicString = user.profilePic;
    userPic = ImageHelper.base64ToBlobUrl(profilePicString);
    nickname = user.nickname;
  }

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
            <h1 id="user-profile-name">{nickname}</h1>
            <h6 id="user-profile-friends">{`${user.friends.length} friends`}</h6>
          </div>
        </div>
      </div>
      {name && <UserActions />}
    </div>
  );
}

export default UserPreview;
