import PostComponent from "./PostComponent";
import postData from "../mockData/posts.json";

function PostList() {
  const { posts } = postData;

  const postL = posts.map((post, index) => {
    return <PostComponent {...post} key={index} />;
  });

  return <ul>{postL}</ul>;
}

export default PostList;
