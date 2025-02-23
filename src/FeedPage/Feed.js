import "./Feed.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import Navbar from "./Navbar/Navbar";
import RightColumn from "./RightColumn/RightColumn";
import PostList from "./ScrollList/Post/PostList";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Feed() {
  const { user } = useContext(AuthContext);

  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" className="p-1 text-center">
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

export default Feed;
