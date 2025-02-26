import PostComponent from "./PostComponent";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthContext";

function PostList() {
  const { posts } = useContext(AuthContext);
  console.log(posts);

  const postL = posts.map((post, index) => {
    return <PostComponent {...post} key={index} />;
  });

  return <ul>{postL}</ul>;
}

export default PostList;
