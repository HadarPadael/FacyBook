import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthContext";
import postAPI from "../../../API/postAPI";

export default function PostHandlers(name, postID) {
  const { token, setPosts, posts } = useContext(AuthContext);
 
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      let post = await postAPI.deletePost(name, postID, token);
      const index = posts.indexOf(post);
      posts.splice(index, 1);
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
  };

  return { handleDelete };
}
