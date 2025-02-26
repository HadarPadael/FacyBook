import "../../Feed.css";
import LeftColumn from "../../LeftColumn/LeftColumn";
import Navbar from "../../Navbar/Navbar";
import RightColumn from "../../RightColumn/RightColumn";
import PostList from "../Post/PostList";
import UserPreview from "./UserPreview";

import { useLocation } from "react-router-dom";

function UserPage() {
  const location = useLocation();
  const { user, otherUser } = location.state || {};

  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" className="p-1 text-center">
        <UserPreview user={user} otherUser={otherUser}/>
        <hr></hr>
        <div className="row">
          <div id="LeftCol" className="col-3">
            <LeftColumn user={user} />
          </div>
          <div id="PostsCol" className="col-6">
            <PostList />
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
