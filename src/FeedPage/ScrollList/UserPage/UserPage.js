import "../../Feed.css";
import LeftColumn from "../../LeftColumn/LeftColumn";
import Navbar from "../../Navbar/Navbar";
import RightColumn from "../../RightColumn/RightColumn";
import PostList from "../Post/PostList";
import UserPreview from "./UserPreview";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import { useLocation } from "react-router-dom";

function UserPage() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { name, profilePic } = location.state || {};
  {/*currently logic is sloppy. change it so that istead of passing name and profilepic to Userprev, 
    you will make a server call to get the user in case name is defined nad then pass it as usual */}

  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" className="p-1 text-center">
        <UserPreview user={user} name={name} profilePic={profilePic}/>
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
