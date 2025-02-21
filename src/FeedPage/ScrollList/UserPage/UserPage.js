import "../../Feed.css";
import LeftColumn from "../../LeftColumn/LeftColumn";
import Navbar from "../../Navbar/Navbar";
import RightColumn from "../../RightColumn/RightColumn";
import PostList from "../Post/PostList";

function UserPage() {
  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" className="p-1 text-center">
        <div id="userArea" className="p-2">
          <div className="cover-container">
            <img id="backgroundImg" src="/backgroundPic.jpg" />
            <div className="profile-container row">
              <div className="col-10">
                <img src="/profilePic.jpg" alt="Profile" id="profile-pic" />
              </div>
              <div className="col-2 usernameCol">
                <h1 id="user-profile-name">Nickname</h1>
                <h6 id="user-profile-friends">0 friends</h6>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div id="LeftCol" className="col-3">
            <LeftColumn />
          </div>
          <div id="PostsCol" className="col-6">
            <PostList />
          </div>
          <div id="RightCol" className="col-3">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
