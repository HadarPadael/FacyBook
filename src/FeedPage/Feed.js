import "./Feed.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import Navbar from "./Navbar/Navbar";
import RightColumn from "./RightColumn/RightColumn";
import PostList from "./ScrollList/Post/PostList";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import postAPI from "../API/postAPI";

function Feed() {
  const { posts } = useContext(AuthContext);

  return (
    <div className="vstack gap-2">
      <div className="p-2">
        <Navbar />
      </div>
      <div id="UnderNavContainer" className="p-1 text-center">
        <div className="row">
          <div id="LeftCol" className="col-3">
            <LeftColumn />
          </div>
          <div id="PostsCol" className="col-6">
            <PostList posts={posts} message={"No available posts"} />
          </div>
          <div id="RightCol" className="col-3">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
