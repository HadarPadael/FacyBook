import "../../Feed.css";
import LeftColumn from "../../LeftColumn/LeftColumn";
import Navbar from "../../Navbar/Navbar";
import RightColumn from "../../RightColumn/RightColumn";
import PostList from "../Post/PostList";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import ImageHelper from "../../../SignUpPage/InteractionLogic/ImageHelper";

function UserPage() {
  const { user } = useContext(AuthContext);
  const profilePicString = user.profilePic;
  const blobUrl = ImageHelper.base64ToBlobUrl(profilePicString);

  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" className="p-1 text-center">
        <div id="userArea" className="p-2">
          <div className="cover-container">
            <img id="backgroundImg" src="/backgroundPic.jpg" />
            <div className="row" id="profile-container">
              <div className="col-8">
                <img
                  className="ProfilePic"
                  src={blobUrl}
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
        </div>
        <hr></hr>
        <div className="row">
          <div id="LeftCol" className="col-3">
            <LeftColumn user={user} />
          </div>
          <div id="PostsCol" className="col-6">
            <PostList user={user} />
          </div>
          <div id="RightCol" className="col-3">
            <RightColumn user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
